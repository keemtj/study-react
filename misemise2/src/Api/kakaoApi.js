import axios from 'axios';
import { long, lat } from '../Location';

export const kakaoApi = {
  get: () =>
    axios.get(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${long}&y=${lat}&input_coord=WGS84`,
      {
        headers: {
          Authorization: `KakaoAK API_KEY`,
        },
      },
    ),
};
