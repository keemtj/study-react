import React from 'react';
import PostContainer from '../containers/PostContainer';

// match : react-router에서 postpage를 라우트로 지정했을 때 받아오는 props
const PostPage = ({ match }) => {
  // ! URL파라미터는 무조건 문자열이다
  // ! api에서 받아오는 id는 문자열이 아니라 숫자이다
  console.log(match);
  const { id } = match.params;
  const postId = parseInt(id, 10);

  // ! postpage에 들어왔을 때 postid를 props로 넘겨주게 됨
  return <PostContainer postId={postId} />;
};

export default PostPage;
