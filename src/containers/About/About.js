import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <p>This app is designed to display current local weather
                as well as provide with search option to locate any other
                location. It uses an OpenWeatherMap API to display current,
                hourly, and 5-day forecast.</p>
            </div>
        )
    }
}

export default About;