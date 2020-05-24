import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Loading = () => {
  const [air, setAir] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99',
        );
        setAir(response.data.RealtimeCityAir.row);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>대기중</div>;
  }

  if (!air) {
    return null;
  }

  return <div>로딩중...</div>;
};

export default Loading;
