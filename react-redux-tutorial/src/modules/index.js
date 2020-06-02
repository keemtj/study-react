import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
// index.js로 파일이름을 설정하게 되면
// import rootReducer from './modules';
// 디렉터리 이름까지만 입력하여 불러올 수 있다
