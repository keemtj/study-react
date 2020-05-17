// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 함수형 컴포넌트

// const MyComponent = ({ name, favoritNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children}
//       입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoritNumber}입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoritNumber: PropTypes.number.isRequired,
// };

// 클래스형 컴포넌트
class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };

  static propTypes = {
    name: PropTypes.string,
    favoritNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoritNumber, children } = this.props;
    return (
      <div>
        Hi, i'm {name}. <br />
        children is {children}.
        <br />
        My favorite number is {favoritNumber}.
      </div>
    );
  }
}

export default MyComponent;
