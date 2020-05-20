import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('1. deps가 없으면 렌더링이 완료될때마다 콘솔을 띄워줍니다');
  });

  useEffect(() => {
    console.log('2. 비어있는 deps[]를 넣어주면 처음에만 렌더링 됩니다');
  }, []);

  useEffect(() => {
    console.log(
      '3. 처음 렌더링이 완료되거나, deps에 넣어준 값이 업데이트 될때만 실행됩니다.',
      name,
    );
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>name: </b> {name}
        </div>
        <div>
          <b>nickname: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
