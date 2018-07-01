import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pizza from './components/pizza'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pizza configurator</h1>
        </header>
        <Pizza />
      </div>
    );
  }
}

export default App;
