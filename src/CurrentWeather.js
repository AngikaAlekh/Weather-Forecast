// CurrentWeather.js
import React from 'react';
import './styles.css';

const CurrentWeather = ({ weatherData, isCelsius }) => {
  if (!weatherData) return null;

  
  const {
    temperature,
    minTemp,
    maxTemp,
    humidity,
    windSpeed,
    windDirection,
    description,
    icon,
  } = weatherData;

  const convertTemperature = (temp) => {
    return isCelsius ? temp : (temp * 9) / 5 + 32;
  };

  const getWindDirection = (degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round((degrees % 360) / 45);
    return directions[index % 8];
  };

  return (
    // <div className="current-weather-container">
    //   <h2>Current Weather</h2>
    // <div className="weather-details">
    // <div className="temperature">
    //   <p>Temperature: {convertTemperature(weatherData.temperature).toFixed(2)} {isCelsius ? '°C' : '°F'}</p>
    // </div>
    //   <p>Min Temperature: {convertTemperature(weatherData.minTemp).toFixed(2)} {isCelsius ? '°C' : '°F'}</p>
    //   <p>Max Temperature: {convertTemperature(weatherData.maxTemp).toFixed(2)} {isCelsius ? '°C' : '°F'}</p>
    //   <p>Humidity: {humidity}%</p>
    //   <p>Wind Speed: {windSpeed} m/s, Direction: {getWindDirection(weatherData.windDirection)}</p>
    //   <p>Description: {description}</p>
    //   <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather icon" />
    // </div>
    // </div>
  //   <div className="current-weather-container">
  //   <h2>Current Weather</h2>
  //   <div className="weather-details">
  //     <div className="temperature">
  //       <p>{convertTemperature(weatherData.temperature).toFixed(2)} {isCelsius ? '°C' : '°F'}</p>
  //     </div>
  //     <div className="temperature-range">
  //       <p>Min: {convertTemperature(weatherData.minTemp).toFixed(2)} {isCelsius ? '°C' : '°F'}</p>
  //       <p>Max: {convertTemperature(weatherData.maxTemp).toFixed(2)} {isCelsius ? '°C' : '°F'}</p>
  //     </div>
  //     <div className="humidity">
  //       <p>Humidity: {humidity}%</p>
  //     </div>
  //     <div className="wind">
  //       <p>Wind Speed: {windSpeed} m/s</p>
  //       <p>Wind Direction: {getWindDirection(weatherData.windDirection)}</p>
  //     </div>
  //     <div className="description">
  //       <p>{description}</p>
  //     </div>
  //     <div className="icon">
  //       <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather icon"  />
  //     </div>
  //   </div>
  // </div>

<div className="current-weather-container">
<h2>Current Weather</h2>
<div className="weather-details">
  <div className="temperature">
    <div>{convertTemperature(weatherData.temperature).toFixed(2)} {isCelsius ? '°C' : '°F'}</div>
  </div>
  <div className="temperature-range">
    <div>Min: {convertTemperature(weatherData.minTemp).toFixed(2)} {isCelsius ? '°C' : '°F'}</div>
    <div>Max: {convertTemperature(weatherData.maxTemp).toFixed(2)} {isCelsius ? '°C' : '°F'}</div>
    <div>Humidity: {humidity}%</div>
  </div>
  <div className="wind">
    <div>Wind Speed: {windSpeed} m/s </div>
    <div>Wind Direction: {getWindDirection(weatherData.windDirection)}</div>
  </div>
</div>
<div className="description-and-icon">
  <div className="description">Description: {description}</div>
  <div className="icon">
    <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather icon" />
  </div>
</div>
</div>

  );
};

export default CurrentWeather;
