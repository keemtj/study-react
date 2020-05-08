import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log('[e.target.name] => ', name);
    console.log('[e.target.value] =>', value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      ...inputs,
      [name]: '',
      // name: '',
      // nickname: '',
    });
  };

  return (
    <div>
      {/* input의 name은 서버로 전달되는 이름을 말한다 */}
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
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
}

export default InputSample;
