import React, { Component } from 'react';
import Dropdown from './Dropdown';
import logo from './logo.svg';
import './App.css';

const dropdownData = {
    title: 'Dropdown title',
    content: [
      {
        contentItem: 'Dropdown Content 1'
      },
      {
        contentItem: 'Dropdown Content 2'
      },
      {
        contentItem: 'Dropdown Content 3'
      },
    ]
  }


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Dropdown data={dropdownData} />
      </div>
    );
  }
}

export default App;
