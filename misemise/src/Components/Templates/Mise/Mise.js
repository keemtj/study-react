import React, { useState } from 'react';
// import Now from '../../Organisms/Now';
// import AirItem from '../../Organisms/AirItem';
import Axios from 'axios';

const Mise = () => {
  const [data, setDate] = useState(null);
  const onClick = async () => {
    try {
      const response = await Axios.get(
        'http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99',
      );
      setDate(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {/* <Now /> */}
      <button onClick={onClick}>미세먼지데이터</button>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
      {/* <AirItem /> */}
    </>
  );
};

export default Mise;
