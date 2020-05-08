import React, { useState, useRef } from 'react';

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  // nameInput이라는 객체가 만들어짐
  const nameInput = useRef();

  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    // 해당 DOM을 선택하고 싶을 때에는 Ref객체.current가 현재의 DOM을 가리키고, 하고싶은 작업을 써주면된다(focus());
    nameInput.current.focus();
  };

  return (
    <div>
      {/* input의 name은 서버로 전달되는 이름을 말한다 */}
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        // 우리가 선택하고 싶은 돔에다가 설정을 해주고
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
