import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Search from './components/Search.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Search />
      </div>
    );
  }
}

export default App;
