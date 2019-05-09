import React from 'react';
import './BigCard.css';

const bigCard = props => (
    <div className="BigCard">
        <label className="min-temp">Min Temp: 38&deg;</label>
        <label className="max-temp">Max Temp: 36&deg;</label>
        <br></br>
        <label className="title">London</label>
        <br></br>
        <img className="img-weather" 
        src="https://openweathermap.org/img/w/13n.png"></img>
        <label className="current-weather">45&deg;</label>
        <label className="desc">thunderstorm</label>
        <br></br>
        <label className="humidity">Humidity: 66%</label>
        <label className="wind-speed">Wind Speed: 4.5 m/s</label>
    </div>
)

export default bigCard;