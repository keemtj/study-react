const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// { id, title, body }
const posts = [
  {
    id: 1,
    title: 'redux-middleware',
    body: 'I learn redux-middleware',
  },
  {
    id: 2,
    title: 'redux-thunk',
    body: 'I learn redux-thunk',
  },
  {
    id: 3,
    title: 'redux-saga',
    body: 'I learn redux-saga',
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
