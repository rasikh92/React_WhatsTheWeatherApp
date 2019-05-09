import React from 'react';
import './NavigationItem.css';
import HomeIcon from '@material-ui/icons/Home';

const navigationItem = (props) => (
<nav>
        {props.type === 'Home' ? 
        <button className="NavigationItem"> 
                <HomeIcon className="icon"> {props.label} </HomeIcon>
        </button>
        : props.type === 'Submit' ?
        <button className="NavigationItem Button"> 
                {props.label} 
        </button>
        :
        <button className="NavigationItem"> {props.label} 
        </button>
        }
</nav>
)

export default navigationItem;