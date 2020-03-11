import React from 'react';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import { Helmet } from 'react-helmet-async';

const PostPage = () => {
  return (
    <>
      <Helmet>
        <title>포스트 제목 보여주기 - MYWORLD</title>
      </Helmet>
      <HeaderContainer />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
