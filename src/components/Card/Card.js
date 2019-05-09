import React from 'react';
import './Card.css';

const card = props => (
    <ul>
        <li className="Card">
            <label className="min-temp">Min Temp: 30&deg;</label>
            <label className="card-max-temp">Max Temp: 40&deg;</label>
            <br></br>
            <br></br>
            <label className="card-title">Wed 22, May</label>
            <img className="card-img" src="https://openweathermap.org/img/w/10d.png"></img>
            <label className="card-current-weather">27&deg;</label>
            <label className="card-desc">moderate rain</label>
            <br></br>
            <label className="card-humidity">Humidity: 93%</label>
            <label className="card-wind-speed">Wind Speed: 3.46 m/s</label>
        </li>
        <li className="Card">
            
        </li>
        <li className="Card">
        </li>
        <li className="Card">
        </li>
        <li className="Card">
        </li>
    </ul>
)

export default card;