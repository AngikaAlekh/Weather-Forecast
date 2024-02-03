// Forecast.js
import React from 'react';
import './styles.css';

const Forecast = ({ forecastData, isCelsius }) => {
  if (!forecastData) return null;
  
  const convertTemperature = (temp) => {
    return isCelsius ? temp : (temp * 9) / 5 + 32;
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>

         <div className="forecast-details">
        {forecastData.map((day) => (
          <div key={day.date} className="forecast-item">
            <div className="date">{formatDate(day.date)}</div>
            <div className="avg-temp">Average Temperature: {convertTemperature(day.avgTemp).toFixed(2)} {isCelsius ? '°C' : '°F'}</div>
            <div className="description">Description: {day.description}</div>
            <div className="icon">
              <img src={`http://openweathermap.org/img/w/${day.icon}.png`} alt="Weather icon" />
            </div>
          </div>
        ))}
      </div>

      {/* {forecastData.map((day) => (
        <div key={day.date}>
          <p>Date: {formatDate(day.date)}</p>
          <p>Average Temperature: {convertTemperature(day.avgTemp).toFixed(2)} {isCelsius ? '°C' : '°F'}</p>
          <p>Description: {day.description}</p>
          <img src={`http://openweathermap.org/img/w/${day.icon}.png`} alt="Weather icon" />
        </div>
      ))} */}
    </div>
  );
};

export default Forecast;
