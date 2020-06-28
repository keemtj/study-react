import React from 'react';
import './Login.scss';

const Login = ({ inputs, onChange, onClick }) => {
  return (
    <form className="login-form" onSubmit={onClick}>
      <div>LOGIN</div>
      <label htmlFor="id">ID</label>
      <input
        id="id"
        type="text"
        placeholder="Plrease, Enter your ID."
        name="id"
        value={inputs.id}
        onChange={onChange}
      />
      <label htmlFor="password">PASSWORD</label>
      <input
        id="password"
        type="password"
        placeholder="Please, Enter your password"
        name="password"
        value={inputs.password}
        onChange={onChange}
      />
      <button type="submit">Trello Start</button>
    </form>
  );
};

export default Login;
