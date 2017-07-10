import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Toggle from './components/Toggle.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      celsius: '',
      farenheit: '',
      isCelsius: true,
      localWeather: '',
      weatherId: 0,
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
          isCelsius: this.state.isCelsius,
          weather: data.data.weather[0].description,
          weatherId: data.data.weather[0].id,
          cityName: data.data.name,
        })
      })
    })

  }

  celsiusTemp = (styles) => {
   return <p style={styles}>{this.state.celsius + ' ' + String.fromCharCode(176) + 'C'}</p>
  }

  farenheitTemp = (styles) => {
    return <p style={styles}>{this.state.farenheit + ' ' + String.fromCharCode(176) + 'F'}</p>
  }

  description = (styles) => {
    return <p style={styles}>{this.state.weather} <i className={"wi wi-owm-" + this.state.weatherId} title="Edit"></i> </p>;
  }

  isCelsius = (bool) => {
    this.setState({
      isCelsius: bool,
    })
  }

  render() {
    const styles = {
      h2: {
        fontSize: '40px',
      },
      temp: {
        fontSize: '20px',
      },
      desc: {
        fontSize: '20px',
      },
      citation: {
        marginTop: '20px'
      },
    }
    return (
      <div className="App">
        <h1>Weather App</h1>
        <h2 style={styles.h2}>{this.state.cityName}</h2>
        {this.state.isCelsius ? this.celsiusTemp(styles.temp) : this.farenheitTemp(styles.temp)}
        {this.description(styles.desc)}
        <Toggle isCelsius={this.isCelsius.bind(this)} />
        <p style={styles.citation}>Using Erik Flowers' Weather Icons: https://erikflowers.github.io/weather-icons/</p>
      </div>
    );
  }
}

export default App;
