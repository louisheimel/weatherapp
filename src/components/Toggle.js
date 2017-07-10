import React, { Component } from 'react';

class Toggle extends Component {
  render() {
    const styles = {
      'marginRight': '15px'
    }

    return (
      <div>
        <button style={styles} className="btn" onClick={() => this.props.isCelsius(false)}>Farenheit</button><button className="btn" onClick={() => this.props.isCelsius(true)}>Celsius</button>
      </div>
    );
  }
}

export default Toggle;
