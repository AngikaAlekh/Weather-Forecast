// App.js
import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm.js';
import CurrentWeather from './CurrentWeather.js';
import Forecast from './Forecast';
import UnitToggle from './UnitToggle';

const API_KEY = '6b75d2d4e2fb1c4ac20ae682594be567';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${isCelsius ? 'metric' : 'imperial'}`
      );

      const { main, wind, weather } = response.data;
      setWeatherData({
        temperature: main.temp,
        minTemp: main.temp_min,
        maxTemp: main.temp_max,
        humidity: main.humidity,
        windSpeed: wind.speed,
        windDirection: wind.deg,
        description: weather[0].description,
        icon: weather[0].icon,
      });
      // setIsCelsius(true);
    } catch (error) {
      console.error('Error fetching current weather data:', error);
    }
  };

  const fetchForecastData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${isCelsius ? 'metric' : 'imperial'}`
      );

      const forecastList = response.data.list;

      const forecastData = forecastList.reduce((acc, item) => {
        const date = item.dt_txt.split(' ')[0];
        if (!acc[date]) {
          acc[date] = {
            date,
            avgTemp: item.main.temp,
            description: item.weather[0].description,
            icon: item.weather[0].icon,
          };
        } else {
          acc[date].avgTemp = (acc[date].avgTemp + item.main.temp) / 2;
        }
        return acc;
      }, {});

      setForecastData(Object.values(forecastData));
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  const handleSearch = (city) => {
    fetchWeatherData(city);
    fetchForecastData(city);
  };

  return (
    <div className="center-container">
      <div className="container">
        <WeatherForm onSearch={handleSearch} />
        {/* <UnitToggle onToggle={() => setIsCelsius((prev) => !prev)} isCelsius={isCelsius} /> */}
        <UnitToggle onToggle={setIsCelsius} isCelsius={isCelsius} />
        <CurrentWeather weatherData={weatherData} isCelsius={isCelsius} />
        <Forecast forecastData={forecastData} isCelsius={isCelsius} />
      </div>
    </div>
  );
};

export default App;
