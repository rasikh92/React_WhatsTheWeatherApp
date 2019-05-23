import React from 'react';
import './Jumbotron.css';

const jumbotron = props => (
    <div className={props.class}>
        <label className="Text">WhatsTheWeatherApp</label>
        {props.time !== "" ?
        <label><strong>Current Local Time is: {props.time}</strong></label>
        : null}
    </div>
)

export default jumbotron;