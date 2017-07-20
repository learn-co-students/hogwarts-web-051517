import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import HogBrowser from './components/HogBrowser'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <HogBrowser />
      </div>
    )
  }
}

export default App;
