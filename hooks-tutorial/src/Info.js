import React, { useReducer } from 'react';

const initialState = {
  name: '',
  nickname: '',
};

function reducer(state, action) {
  console.log('[reducer]', state);
  // action = target
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  // const [state, f dispatch] = useReducer(f reducer, default value of f reducer === initialState)
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, nickname } = state;
  console.log('[Info]', state);
  const onChange = ({ target }) => {
    dispatch(target);
  };

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름: </b> {name}
      </div>
      <div>
        <b>닉네임: </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
