import React from 'react';
import './Search.css';
import NavigationItem from '../../components/Navigation/NavigationItem/NavigationItem';

const search = props => (
    <div className="Search">
        <input placeholder="Enter a city name"></input>
        <NavigationItem label="Submit" type="Submit"/>
        <div className="about">
            <NavigationItem label="About Me"/>
        </div>
    </div>
)

export default search;