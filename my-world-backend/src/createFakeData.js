import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map(i => ({
    title: `포스트 #${i}`,
    body:
      'B O D Y                       B O D Y                       B O D Y                       B O D Y                       B O D Y                       B O D Y                       B O D Y                       B O D Y                       B O D Y                       B O D Y                       ',
    tags: ['Fake...', 'Data...'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
