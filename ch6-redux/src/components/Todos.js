import React from 'react';
import TodoList from './TodoList';

const Todos = ({ todos, text, onSubmit, onChange, onToggle }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
          placeholder="할일을 입력하세요"
        />
        <button type="submit">등록</button>
        <TodoList todos={todos} onToggle={onToggle} />
      </form>
    </div>
  );
};

export default React.memo(Todos);
