import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Main from './Main';




class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
          <Main/>
      </div>
    );
  }
}

export default App;
