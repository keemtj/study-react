// import React from 'react';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';

// const App = () => {
//   return (
//     // <MyComponent name="React" favoritNumber={1}>
//     //   리액트
//     // </MyComponent>
//     // <Counter />
//     // <Say />
//     // <EventPractice />
//   );
// };

import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
// import IterationSample from './IterationSample';
// import ScrollBox from './ScrollBox';
// import ValidationSample from './ValidationSample';

// // scrollbox ref활용 App
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
//         <button onClick={() => this.ScrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
