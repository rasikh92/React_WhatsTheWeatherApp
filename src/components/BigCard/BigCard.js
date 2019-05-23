import React from 'react';
import './BigCard.css';

const bigCard = props => {
    return (<div className={props.class}>
        <label className="min-temp">Min Temp: {props.results.temp_min.toFixed(0)}&deg;</label>
        <label className="max-temp">Max Temp: {props.results.temp_max.toFixed(0)}&deg;</label>
        <br></br>
        <label className="title">{props.results.name}</label>
        <br></br>
        <img className="img-weather" 
        src={props.results.icon} alt="BigCard"></img>
        <label className="current-weather">{props.results.temp.toFixed(0)}&deg;</label>
        <label className="desc">{props.results.desc}</label>
        <br></br>
        <label className="humidity">Humidity: {props.results.humidity.toFixed(0)}%</label>
        <label className="wind-speed">Wind Speed: {props.results.wind_speed} m/s</label>
    </div>)
}

export default bigCard;