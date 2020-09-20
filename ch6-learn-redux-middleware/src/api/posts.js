import axios from 'axios';

// const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// { id, title, body }
// const posts = [
//   {
//     id: 1,
//     title: 'redux-middleware',
//     body: 'I learn redux-middleware',
//   },
//   {
//     id: 2,
//     title: 'redux-thunk',
//     body: 'I learn redux-thunk',
//   },
//   {
//     id: 3,
//     title: 'redux-saga',
//     body: 'I learn redux-saga',
//   },
// ];

export const getPosts = async () => {
  // await sleep(500);
  // return posts;
  const response = await axios.get('http://localhost:4000/posts');
  return response.data;
};

// const idSelector = (param) => param.id;
// export const getPostById = async ({ id, option }) => {
export const getPostById = async (id) => {
  // await sleep(500);
  // return posts.find((post) => post.id === id);
  const response = await axios.get(`http://localhost:4000/posts/${id}`);
  return response.data;
};
