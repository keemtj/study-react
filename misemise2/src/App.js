import React, { useState, useEffect } from 'react';
import { kakaoApi } from './Api/kakaoApi';
import { dustApi } from './Api/dustApi';
import LoadingPage from './LoadingPage';
import MiseMise from './MiseMise';

const App = () => {
  const [location, setLocation] = useState(null);
  const [dust, setDust] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dustFunc = async () => {
      setLoading(true);
      try {
        let dustData = await dustApi.get();
        const nowDust = dustData.data.RealtimeCityAir.row;
        setDust(nowDust);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    dustFunc();

    const kakaoFunc = async () => {
      setLoading(true);
      try {
        let kakaoData = await kakaoApi.get();
        const nowLocation =
          kakaoData.data.documents[0].address.region_2depth_name;
        setLocation(nowLocation);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    kakaoFunc();
  }, []);

  console.log('location ->', location);
  console.log('dust -> ', dust);

  if (loading) {
    return <LoadingPage />;
  }

  if (!location && !dust) {
    return null;
  }

  return <>{dust && location ? <MiseMise dust={dust} /> : <LoadingPage />}</>;
};

export default App;
