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
import ScrollBox from './ScrollBox';
// import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
