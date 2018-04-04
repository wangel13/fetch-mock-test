import React, { Component } from 'react';
import fetchMock from 'fetch-mock';
import logo from './logo.svg';
import './App.css';

const getMockState = (id) => ({
  id,
  code       : `state${id}`,
  name       : `State ${id}`,
})

const getMockStates = () => {
  const states = []

  for (let i = 1; i <= 20; i++) {
    states.push(getMockState(i))
  }

  return states
}

fetchMock.get((url) => url.includes(`/api/states?`), getMockStates()).spy()

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
