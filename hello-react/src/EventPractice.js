// import React, { Component } from 'react';

// // class 컴포넌트
// class EventPractice extends Component {
//   state = {
//     username: '',
//     message: '',
//   };

//   // constructor(props) {
//   //   super(props);
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleClick = this.handleClick.bind(this);
//   // }
//   // // 새 메서드를 만들때마다 constructor를 수정해야 하기때문에
//   // // 바벨의 transform-class-properteis 문법을 사용하여
//   // // 화살표 함수 형태로 메서드를 정의
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// function 컴포넌트
import React, { useState } from 'react';

const EventPractice = () => {
  // inputs가 아닌 하나의 form으로 보고 state이름을 form으로 설정
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;

  // const handleChange = ({ target }) => {
  //   setForm({ ...form, [target.name]: target.value });
  // };
  // setForm에 들어갈 객체를 변수로 지정하고 setForm의 인수로 넣음
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>리액트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
