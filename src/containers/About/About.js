import React, {Component} from 'react';
import './About.css';
import NavigationItem from '../../components/Navigation/NavigationItem/NavigationItem';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';

class About extends Component {
    render() {
        return (
        <React.Fragment>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <NavigationItem daytype={this.props.daytype} label="Home" type="Home" />

            <div className={this.props.class}>
                <p>This app is designed to display current local weather
                as well as provide with search option to locate any other
                location. It uses an OpenWeatherMap API to display current 
                and 5-day forecast.</p>
            </div>

            <Footer class={['Footer',this.props.daytype.toLowerCase()].join(' ')}/>
        </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        daytype: state.text
    }
}

export default connect(mapStateToProps)(About);