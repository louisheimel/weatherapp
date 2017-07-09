import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + pos.coords.latitude + '&lon=' + pos.coords.longitude + '&APPID=cf82b1c6672f73b7b74056a6905fb14a'
      axios.get(url)
      .then(data => {
        console.log(data)
      })
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
      </div>
    );
  }
}

export default App;
