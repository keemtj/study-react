import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      // validated: this.state.password === '0000' ? true : false,
      validated: this.state.password === '0000',
    });
    // this.input은 input의 DOM요소를 말한다(callback 형식으로 ref를 달아줌)
    this.input.focus();
    this.setState({
      password: '',
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            // button이 clicked 상태인지 확인
            // click true => password check, click false => ''
            // validated로 input의 value가 '0000'(password가 true)이면 success
            // 아니면 failure(css로 표시)
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
          // callback function을 사용하여 ref(멤버 변수를 선언할 필요가 없다)
          ref={(ref) => (this.input = ref)}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
