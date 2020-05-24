import React from 'react';
import { faSmile, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        background: 'yellowgreen',
        width: '70vh',
        height: '100vh',
      }}
    >
      <h1 style={{ color: 'white' }}>미세미세 & 날씨날씨</h1>
      <FontAwesomeIcon style={{ color: 'white' }} icon={faSmile} size="4x" />
      <FontAwesomeIcon style={{ color: 'white' }} icon={faSpinner} size="3x" />
    </div>
  );
};

export default LoadingPage;
