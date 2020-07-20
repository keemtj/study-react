import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';

console.log(Component);

const st = classNames.bind(style);

class App extends Component {
  // TODO: class 공부하기
  // class field에 string 할당
  // class field에 function 할당
  // class field에 Arrow function 할당

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도');
  };

  handleIdChange = () => {
    console.log('사용자 아이디 입력중');
  };

  handlePwChange = () => {
    console.log('사용자 패스워드 입력중');
  };

  render() {
    return (
      <div className={st('wrap')}>
        <h1>로그인</h1>
        <form
          className={st('formStyle')}
          onSubmit={this.handleSubmit}
        >
          <div>
            <h2>ID: </h2>
            <input
              type="text"
              className={st('inputStyle')}
              onChange={this.handleIdChange}
            />
          </div>
          <div>
            <h2>PASS: </h2>
            <input
              type="password"
              className={st('inputStyle')}
              onChange={this.handlePwChange}
            />
          </div>
          <br />
          <button
            className={st('buttonStyle')}
            type="submit"
          >
            로그인하기
          </button>
          <button
            type="button"
            onClick={this.handleSubmit}
            name="hello"
            value="s"
          >
            click
          </button>
        </form>
      </div>
    );
  }
}

export default App;
