import React from 'react';
import './Footer.css';
import Img from '../../assets/Octocat.png';

const footer = props => (
    <div className={props.class}>
        <label>&copy;2019 Rasikh92</label>
        <a href="https://github.com/rasikh92/React_GitUsersApp"
                target="blank">
            <img className="img" src={Img} alt="Github Link">
            </img>
        </a>
    </div>
)

export default footer;