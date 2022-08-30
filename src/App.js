import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => {this.scrollBox=ref}}/>
        {/* 컴포넌트가 처음 렌더링될 때 this.scrollBox 값이 undefined이므로 
        this.scrollBox.scrollToBottom 값을 읽어 오는 과정에서 오류가 발생한다. 
        따라서, 화살표 함수 문법을 사용하여 새로운 함수를 만들고
        그 내부에서 this.scrollBox.scrollToBottom 메서드를 실행하면, 
        버튼을 누를 때 this.scrollBox.scrollToBottom 값을 읽어 와서 실행하므로 오류가 발생하지 않는다.
        */}
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
      );
  }
}

export default App;