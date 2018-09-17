import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from '../components/charts'
import _ from 'lodash';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

  rendrWeather(cityData) {
    if(!cityData){ return <tr className="ERROR"><span>WRONG CITY NAME</span></tr>}

    const name = cityData.city.name;
    const temp = _.map(cityData.list.map( weather => weather.main.temp ), (temp) => temp -273.15);
    const pressure = cityData.list.map( weather => weather.main.pressure);
    const humidity = cityData.list.map( weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord // const lat = cityData.city.coord.lat; +++ const lon = cityData.city.coord.lon;
     
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Charts data={temp} color="orange" unit="°C"/></td>
        <td><Charts data={pressure} color="green" unit="hPa"/></td>
        <td><Charts data={humidity} color="black" unit="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.rendrWeather)}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
