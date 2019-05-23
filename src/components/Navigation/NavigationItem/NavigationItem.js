import React, {useState} from 'react';
import './NavigationItem.css';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink, withRouter} from 'react-router-dom';

const NavigationItem = (props) => {
        const [hovered, setHovered] = useState(false);
        const toggleHover = () => setHovered(!hovered);
        
return (<nav>
        {props.type === 'Home' ? 
        <NavLink to="/" style={{ textDecoration: 'none' }} exact>
                <button className={hovered ? ["NavigationItem default",props.daytype.toLowerCase()].join(' ') : "NavigationItem"} 
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                > 
                        <HomeIcon className="icon"></HomeIcon> {props.label} 
                </button>
        </NavLink>
        : props.type === 'Submit' ?
                <button className={hovered ? ["NavigationItem Button default",props.daytype.toLowerCase()].join(' ') : "NavigationItem Button"} 
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                > 
                        {props.label} 
                </button>
        :
        <NavLink to="/about" style={{ textDecoration: 'none' }}>
                <button className={hovered ? ["NavigationItem default",props.daytype.toLowerCase()].join(' ') : "NavigationItem"} 
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                >
                        {props.label} 
                </button>
        </NavLink>
        }
</nav>)
}

export default withRouter(NavigationItem);