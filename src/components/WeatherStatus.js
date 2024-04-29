import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherStatus.css'
import { FormattedMessage } from 'react-intl';

const URL = `https://api.openweathermap.org/data/2.5/weather?q=nairobi&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_APIKEY}`


export default function WeatherStatus () {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(URL).then((response) => {
          setData(response.data);
        });
      }, []);

    if (!data) return null;

    const icon = data.weather && data.weather[0] && data.weather[0].icon
    const weather_condition = data.weather && data.weather[0] && data.weather[0].main
    const temp = data.main?.temp
    
    return (
        <div className='weather-status'>
            <h2 className='city-name'>Nairobi</h2>
            { icon ? <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Condition" width={60} height={60} /> : null}
            { temp ? <p className='temperature'>{Math.trunc(temp)}<sup>°</sup>C</p> : null }
            { weather_condition ? <p className='weather-condition'><FormattedMessage id={`condition.${weather_condition}`.toLowerCase()}/></p> : null}
        </div>
    )
}