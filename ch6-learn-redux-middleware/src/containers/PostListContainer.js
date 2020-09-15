import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

const PostListContainer = () => {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]); // 빈 배열일 경우 컴포넌트가 처음 렌더링 되는 순간 처음 호출

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생...</div>;
  if (!data) return null;

  return <PostList posts={data} />;
};

export default PostListContainer;
