import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Benin");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2950bee37da9701ae7d405d5da459928`);
      setWeather(response.data);
      setError("");
    } catch (error) {
      setError("Ville non trouvée");
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Météo Actuelle</h2>

      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Ville"
          className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-violet-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-violet-600 transition-colors duration-300"
          onClick={() => fetchWeatherData(city)}
        >
          Rechercher
        </button>
      </div>

      {weather ? (
        <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-xl font-semibold mb-2">{weather.name}</h3>
          <p className="mb-1">Description: {weather.weather[0].description}</p>
          <p className="mb-1">Température: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
          <p className="mb-1">Humidité: {weather.main.humidity}%</p>
          <p className="mb-1">Vent: {weather.wind.speed} m/s</p>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>Chargement...</p>
      )}
    </motion.div>
  );
};

export default WeatherWidget;
