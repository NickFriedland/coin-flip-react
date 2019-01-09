import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlipCoin from './FlipCoin';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Let's Flip a Coin!</h1>
        <FlipCoin />
      </div>
    );
  }
}

export default App;
