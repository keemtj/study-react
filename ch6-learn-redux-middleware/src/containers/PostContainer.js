import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
import { getPost, goToHome } from '../modules/posts';

// postId: router parameter를 통해 받아올 예정
const PostContainer = ({ postId }) => {
  // const { data, loading, error } = useSelector((state) => state.posts.post);
  // const { data, loading, error } = useSelector(
  //   (state) => state.posts.post[postId] || {},
  // );
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId] || reducerUtils.initial(),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // if (data) return; // dispatch 요청조차 하기싫을 때
    dispatch(getPost(postId));
    // cleanup: 컴포넌트가 언마운트 될 때(뒤로가기 혹은 페이지 나가기), 혹은 그럴일은 없겠지만 post의 Id가 바뀌어서 위의 effect 함수가 호출되기 직전에 호출
    // return () => {
    //   dispatch(clearPost());
    // };
  }, [postId, dispatch]);

  if (loading && !data) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <Post post={data} />
    </>
  );
};

export default PostContainer;
