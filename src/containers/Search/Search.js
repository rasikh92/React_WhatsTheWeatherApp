import React, {Component} from 'react';
import './Search.css';
import NavigationItem from '../../components/Navigation/NavigationItem/NavigationItem';
import List from '../../components/List/List';
import Axios from 'axios';
import _ from 'lodash';
import BigCard from '../../components/BigCard/BigCard';
import Card from '../../components/Card/Card';
import cityTimezones from 'city-timezones';
import GetTime from '../../components/GetTime/GetTime';
import {connect} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { async } from 'q';

class Search extends Component {
    state = {
        text: "",
        results: {},
        touched: false,
        submit: false,
        firstrun: false
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            const apiKey = '23ae9231000a3683d24bd17fbf104be3';
            const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+
            position.coords.latitude+'&lon='+position.coords.longitude+'&units=metric'+'&appid='+apiKey 
            this.fetchData(url,true);
            //console.log(position.coords.latitude,position.coords.longitude);
        })
    }
    componentWillMount() {
        this.run = _.debounce((url) => {this.fetchData(url)}, 1000);
    }
    fetchData = (url,firstrun) => {
        let results = {};
        Axios.get(url).then(
            response => {
                results = {
                    lat: response.data.coord.lat,
                    lon: response.data.coord.lon,
                    temp_min: response.data.main.temp_min,
                    temp_max: response.data.main.temp_max,
                    name: response.data.name,
                    icon: 'https://openweathermap.org/img/w/'+
                            response.data.weather[0].icon+'.png',
                    temp: response.data.main.temp,
                    desc: response.data.weather[0].description,
                    humidity: response.data.main.humidity,
                    wind_speed: response.data.wind.speed
                }
                this.setState({results: results});
                this.setState({text: results.name, touched: true, submit: false, firstrun: firstrun});
            }
        ).catch(err => {
            if(err.toString().includes("404")) {
                alert("The location could not be found! Please try again.");
            }
            else {
                alert(err);
            }
        })
    }   
    onChangedHandler = (event) => {
        event.preventDefault();
        event.persist();
        this.setState({firstrun: false, touched: false});
        if(event.target.value !== "" || !this.state.touched) {
            //const date = new Date(0);
            //const time = date.getHours();
            //console.log(time);
            //const time = cityTimezones.lookupViaCity('Bangkok');
            //const t = date.toLocaleString('en-AU', {hour: '2-digit',   hour12: false, timeZone: time[0].timezone })
            //console.log(t);
            //console.log(time[0].timezone);
        
        const apiKey = '23ae9231000a3683d24bd17fbf104be3';
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+event.target.value+'&units=metric'+'&appid='+apiKey 
        this.run(url, false);
        }
        
        //this.setState({text: event.target.value});
        
    }

    onTouchedHandler = () => {
        this.setState({touched: true, submit: true});
    }

    onSubmitHandler = () => {
        this.setState({submit: true});
    }

    render() {
        return (
        <React.Fragment>
            <div className={this.props.class}>
                <input placeholder="Enter a city name" onChange={this.onChangedHandler}></input>
                <NavigationItem label="Submit" daytype={this.props.daytype} type="Submit" clicked={this.onSubmitHandler}/>
                <div className="about" type="About">
                    <NavigationItem daytype={this.props.daytype} label="About Me"/>
                </div>
            </div>
            {this.state.text !== "" && !this.state.touched && !this.state.firstrun || 
            this.state.text !== "" && !this.state.submit && !this.state.firstrun ? 
            <List text={this.state.text} clicked={this.onTouchedHandler}/> : null}
            {this.state.submit && this.state.touched || 
                this.state.firstrun && this.state.touched ? <BigCard class={['BigCard',this.props.daytype.toLowerCase()].join(' ')} results={this.state.results}/> : null}
            {this.state.touched && this.state.submit || 
                this.state.firstrun && this.state.touched ? <GetTime lat={this.state.results.lat} lon={this.state.results.lon} text={this.state.text}/> : null}
        </React.Fragment>
        )
    }
} 

const mapStateToProps = state => {
    return {
        daytype: state.text
    }
}

export default connect(mapStateToProps)(Search);