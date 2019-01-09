import React, { Component } from 'react';

class Coin extends Component {
  render() {
    const size = {
      width: '200px',
      height: '200px'
    };
    return (
      <div>
        <img style={size} src={this.props.url} alt="cannot find the img" />
      </div>
    );
  }
}

export default Coin;
