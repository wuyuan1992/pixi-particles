import React, { Component } from 'react';
import{
  Board,
  Panel
} from './layout';

class App extends Component {
  render() {
    return (
      <div className="App flex">
        <div className="flex flex-8">
          <Board />
        </div>
        <div className="flex flex-4">
          <Panel />
        </div>
      </div>
    );
  }
}

export default App;
