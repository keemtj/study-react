import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

const PostListContainer = () => {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    // ! 마운트 될 때 data가 있으면 return으로 간단하게 처리할 수 있지만 새로운 데이터를 가져오지는 않는다
    // if (data) return;
    dispatch(getPosts());
  }, [dispatch]); // 빈 배열일 경우 컴포넌트가 처음 렌더링 되는 순간 처음 호출

  // ! loading && !data일때만 로딩중 처리를 해준다
  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러발생...</div>;
  if (!data) return null;

  return <PostList posts={data} />;
};

export default PostListContainer;
