import React, {useState, useEffect} from 'react';
import './Card.css';
import Axios from 'axios';

const Card = props => {
    const [results, setResults] = useState([]);

    const apiKey = '23ae9231000a3683d24bd17fbf104be3';
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q='+props.text+'&units=metric'+'&appid='+apiKey 
    let hour = props.hour;
    let date = props.date;

    if(props.hour > 21) {
        hour = 0;
        date = date+1;
    }

    useEffect(() => { 
        Axios.get(url).then(   
            response => {
            let list = [];
            let newList = [];
        if(results !== list) {
            list = response.data.list.filter(function (el) {
                return parseInt(el.dt_txt.substring(11,13)) >= hour &&
                parseInt(el.dt_txt.substring(8,10)) >=  date
            })

            let firstHour = list[0].dt_txt.substring(11,13)+":00:00";
            
            newList = list.filter(function (el) {
                return el.dt_txt.substring(11,19) === firstHour;
            })

            for(let list in newList) {
                //setup date
                let newDate = newList[list].dt_txt.split(/[- :]/);
                newDate = new Date(newDate[0], newDate[1]-1, newDate[2], newDate[3], newDate[4], newDate[5]);
                newList[list].dt_txt = newDate.toString().substring(0,10);
                //setup icon
                const url = "https://openweathermap.org/img/w/"+newList[list].weather[0].icon+".png";
                newList[list].weather[0].icon = url;
            }
            
            setResults(newList);
        }
        }).catch(err => {
            console.log(err);
        })},[])

    return (
        <ul>
            {results.map(result => {
                return (
                    <li className={props.class} key={result.dt}>
                    <div className="slider">
                        <label className="card-min-temp">Min Temp: {result.main.temp_min.toFixed(0)}&deg;</label>
                        <label className="card-max-temp">Max Temp: {result.main.temp_max.toFixed(0)}&deg;</label>
                        <br></br>
                        <br></br>
                        <label className="card-title">{result.dt_txt}</label>
                        <img className="card-img" src={result.weather[0].icon} alt="Card"></img>
                        <label className="card-current-weather">{result.main.temp.toFixed(0)}&deg;</label>
                        <label className="card-desc">{result.weather[0].description}</label>
                        <br></br>
                        <label className="card-humidity">Humidity: {result.main.humidity.toFixed(0)}%</label>
                        <label className="card-wind-speed">Wind Speed: {result.wind.speed} m/s</label>
                    </div>
                    </li>)
            })}
        </ul>
    )
}

export default Card;