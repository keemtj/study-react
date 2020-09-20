import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
// import myLogger from './middleware/myLogger';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
// history모듈: router 설치할때 자동으로 같이 받아짐
import { createBrowserHistory } from 'history';
// saga 불러오기
import createSagaMiddleware from 'redux-saga';

// createSagaMiddleware 호출한 값 할당
const sagaMiddleware = createSagaMiddleware();
const customHistory = createBrowserHistory();

// store에 saga 적용
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      // apply saga
      // thunk, saga의 순서는 상관없다
      sagaMiddleware,
      ReduxThunk.withExtraArgument({ history: customHistory }),
      logger,
    ),
  ),
  // logger와 redux-thunk를 같이 사용하게 될 떄에는 logger를 맨 뒤에 놓아야 한다.
  // 그렇지 않으면 logger에서 함수도 액션으로 간주해서 프린트 해준다
  // devtools를 사용하기때문에 logger를 사용하는 의미가 없기는 하다
);

// run함수 호출: rootSaga를 param으로 넣어준다
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  // <BrowserRouter>
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  // </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
