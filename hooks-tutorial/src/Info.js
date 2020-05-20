import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('1. effect');
    console.log(name);
    return () => {
      console.log('1. cleanup!');
      console.log(
        '1. 뒷정리 함수가 호출되면 업데이트 되기 직전 값만 보여줍니다',
        name === '' ? '""' : `"${name}"`,
      );
    };
  });

  useEffect(() => {
    console.log('2. 빈 deps 포함할 때 effect');
    console.log(name);
    return () => {
      console.log('2. 빈 deps 포함할 때 cleanup!');
      console.log(
        `2. 빈 deps를 포함하면 렌더링이 처음 한번만 일어나므로 value가 업데이트 되어도 cleanup시 업데이트 되기 직전 값인 name: '${name} '만 보여줍니다`,
        // name === '' ? '""' : `"${name}"`,
      );
    };
  }, []);

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
