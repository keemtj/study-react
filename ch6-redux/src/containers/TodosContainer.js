import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
  // ! redux state
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // ! hooks state
  // 반드시 redux로 상태관리를 할 필요는 없다.
  // 아래와 같이 로컬스테이트로 관리해주어도 상관없다.
  const [text, setText] = useState('');

  // ! event
  //
  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    // submit이벤트가 발생하면 페이지가 새로고침된다.
    // onSubmit이벤트로 관리하게 되면 enter로도 등록이 가능하다.
    // 새로고침을 방지
    e.preventDefault();
    onCreate(text);
    setText('');
  };

  return (
    <Todos
      todos={todos}
      text={text}
      onSubmit={onSubmit}
      onChange={onChange}
      onToggle={onToggle}
    />
  );
};

export default TodosContainer;
