import React, { Component } from 'react';

import Board from './components/Board/Board';
import Panel from './components/Panel/Panel';

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
