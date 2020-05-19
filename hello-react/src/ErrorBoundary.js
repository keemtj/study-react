import React, { Component } from 'react';

// 에러 발생시 아무것도 없는 페이지를 보고 당황하지 않도록 에러 메시지를 띄워주는 컴포넌트
class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) return <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
