import React, { useState } from 'react';
import axios from 'axios';
import './WeatherStatus.css'

const URL = `https://api.openweathermap.org/data/2.5/weather?q=nairobi&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_APIKEY}`


export default function WeatherStatus () {
    console.log('this is the env', process.env)
    const [city, setCity] = React.useState(null);

    React.useEffect(() => {
        axios.get(URL).then((response) => {
          setCity(response.data);
        });
      }, []);

    if (!city) return null;
    
    return (
        <div className='weather-status'>
            <h2 className='city-name'>{city.name}</h2>
            <p className='temperature'>{Math.trunc(city.main.temp)}<sup>°</sup>C</p>
            <p className='weather-condition'>{city.weather[0].main}</p>
            <p>Humidity: {city.main.humidity}</p>
        </div>
    )
}