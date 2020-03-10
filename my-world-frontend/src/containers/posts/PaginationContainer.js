import React from 'react';
import Pagination from '../../components/posts/Pagination';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PaginationContainer = ({ location, match }) => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));

  // 포스트 데이터가 없거나 로딩중이면 보여주지 않음
  if (!posts || loading) return null;

  // page가 없으면 기본값 1.
  const { username } = match.params;
  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);
