import React, { useState } from 'react';
import axios from 'axios';
import './WeatherStatus.css'

const URL = `https://api.openweathermap.org/data/2.5/weather?q=nairobi&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_APIKEY}`


export default function WeatherStatus () {
    console.log('this is the env', process.env)
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(URL).then((response) => {
          setData(response.data);
        });
      }, []);

    if (!data) return null;
    
    return (
        <div className='weather-status'>
            <h2 className='city-name'>{data.name}</h2>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather Condition" width={60} height={60} />
            <p className='temperature'>{Math.trunc(data.main.temp)}<sup>°</sup>C</p>
            <p className='weather-condition'>{data.weather[0].main}</p>
            <p>Humidity: {data.main.humidity}</p>
        </div>
    )
}