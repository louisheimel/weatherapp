import React, { Component } from 'react';

class Toggle extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.isCelsius(false)}>Farenheit</button><button onClick={() => this.props.isCelsius(true)}>Celsius</button>
      </div>
    );
  }
}

export default Toggle;
