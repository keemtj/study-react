import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <form className="login-form">
      <div>LOGIN</div>
      <label htmlFor="id">ID</label>
      <input id="id" type="text" placeholder="Plrease, Enter your ID." />
      <label htmlFor="password">PASSWORD</label>
      <input
        id="password"
        type="password"
        placeholder="Please, Enter your password"
      />
      <button>Trello Start</button>
    </form>
  );
};

export default Login;
