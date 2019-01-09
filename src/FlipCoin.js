import React, { Component } from 'react';
import Coin from './Coin';
import Heads from './coin-heads.png';
import Tails from './coin-tails.png';

class FlipCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numHeads: 0,
      numTails: 0,
      coinState: 0
    };
    this.flipCoin = this.flipCoin.bind(this);
  }
  // the two imgs addresses
  static defaultProps = {
    urls: [Heads, Tails]
  };

  // callback function for flip

  flipCoin() {
    this.setState(
      {
        coinState: Math.floor(Math.random() * 2)
      },
      this.countOutcome
    );
  }

  countOutcome() {
    this.setState(curState => {
      return curState.coinState
        ? { numTails: curState.numTails + 1 }
        : { numHeads: curState.numHeads + 1 };
    });
  }
  // random select 0 or 1 for coin
  // count head or tail for the

  render() {
    return (
      <div>
        <Coin url={this.props.urls[this.state.coinState]} />
        <button onClick={this.flipCoin} />
        <p>
          Out of {this.state.numHeads + this.state.numTails} flips, there have
          been {this.state.numHeads} heads and {this.state.numTails} tails
        </p>
      </div>
    );
  }
}

export default FlipCoin;
