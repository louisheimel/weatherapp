import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      celsius: '',
      farenheit: '',
      isCelsius: true,
      localWeather: '',
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + pos.coords.latitude + '&lon=' + pos.coords.longitude + '&APPID=cf82b1c6672f73b7b74056a6905fb14a'
      axios.get(url)
      .then(data => {
        console.log(data)
        this.setState({
          celsius: (data.data.main.temp - 273.15).toFixed(2),
          farenheit: ((9 / 5) * (data.data.main.temp - 273.15) + 32).toFixed(2),
          isCelsius: this.state.isCelsius
        })
      })
    })

  }

  celsiusTemp = () => {
   return <p>{this.state.celsius + ' ' + String.fromCharCode(176) + 'C'}</p>
  }

  farenheitTemp = () => {
    return <p>{this.state.farenheit + ' ' + String.fromCharCode(176) + 'C'}</p>
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        {this.state.isCelsius ? this.celsiusTemp() : this.farenheitTemp()}
      </div>
    );
  }
}

export default App;
