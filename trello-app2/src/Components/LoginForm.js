import React from 'react';

const LoginForm = ({ inputs, onChange, userCheck }) => {
  console.log(inputs);

  const loginBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    width: '30vw',
    minWidth: '200px',
    maxWidth: '300px',
    backgroundColor: 'rgb(17, 17, 17)',
    border: 'none',
    borderRadius: '1rem',
    padding: '1rem',
    color: 'rgb(148, 158, 168)',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontFamily: 'none',
  };

  const loginFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  };

  const loginInputStyle = {
    backgroundColor: 'rgb(17, 17, 17)',
    border: 'none',
    borderBottom: '1px solid rgb(148, 158, 168)',
    width: '92%',
    margin: '1rem 0 2rem 0',
    padding: '0.6rem',
    color: 'rgb(148, 158, 168)',
    fontSize: '1rem',
    outline: 'none',
  };

  const loginButtonStyle = {
    backgroundColor: 'rgb(148, 158, 168)',
    marginBottom: '0.2rem',
    padding: '0.2rem',
    border: 'none',
    borderRadius: '0.6rem',
    width: '100%',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontFamily: 'none',
    outline: 'none',
    cursor: 'pointer',
  };

  const loginMainTextStyle = {
    display: 'inline-block',
    marginBottom: '2rem',
    textAlign: 'center',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    fontFamily: 'none',
  };

  const loginSubTextStyle = {
    paddingLeft: '0.5rem',
  };

  return (
    <div style={loginBoxStyle}>
      <span style={loginMainTextStyle}>로그인</span>
      <form style={loginFormStyle}>
        <span style={loginSubTextStyle}>아이디</span>
        <input
          style={loginInputStyle}
          type="text"
          name="userId"
          onChange={onChange}
          value={inputs.userId}
        />
        <span style={loginSubTextStyle}>패스워드</span>
        <input
          style={loginInputStyle}
          type="password"
          name="userPw"
          onChange={onChange}
          value={inputs.userPw}
        />
        <button
          style={loginButtonStyle}
          type="submit"
          onClick={userCheck}
        >
          로그인하기
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
