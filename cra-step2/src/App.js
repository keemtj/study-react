import React, { Component } from 'react';
import './App.css';

class App extends Component {
  idChange = (e) => {
    e.preventDefault();
    console.log('사용자 아이디 입력중');
  };

  pwChange = () => {
    console.log('사용자 패스워드 입력중');
  };

  handleClick = () => {
    console.log('로그인시도');
  };

  render() {
    return (
      <div className="login-body">
        <h1>로그인</h1>
        <div>
          <form className="Wrapper">
            <span>ID: </span>
            <input type="text" onChange={this.idChange} />
            <span>PASS: </span>
            <input type="password" onChange={this.pwChange} />
            <button type="button" onClick={this.handleClick}>
              로그인하기
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
