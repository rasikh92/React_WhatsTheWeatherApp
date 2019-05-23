import React from 'react';
import './List.css';

const list = props => (
    <ul className="ul">
        <li className="List" onClick={props.clicked}>
            {props.text}
        </li>
    </ul>
)

export default list;