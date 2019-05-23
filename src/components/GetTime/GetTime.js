import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { async } from 'q';
import Card from '../Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import {connect} from 'react-redux';

const GetTime = props => {
    const [hour, setHour] = useState('');
    const [date, setDate] = useState('');

    const coord = props.lat+','+props.lon;
    const cdate = new Date();
    const timestamp = (cdate.getTime()/1000) + (cdate.getTimezoneOffset()*60);
    //Google Timezone API Key
    const apiKey = 'AIzaSyCbHz8Khd-do7lncgtfIn_JL6rA_YfcJNw';
    const url = 'https://maps.googleapis.com/maps/api/timezone/json?location='
    +coord+'&timestamp='+timestamp+'&key='+apiKey;

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios(url);
            const offsets = (response.data.dstOffset * 1000) + (response.data.rawOffset * 1000);
            let localdate = new Date(timestamp*1000 + offsets);
            setHour(localdate.getHours());
            setDate(localdate.getDate());
            props.onHour(localdate.getHours());
            props.onTime(localdate.toTimeString().substring(0,8));
            
        }
        fetchData();
                
            }, [])
    
    
    return (hour !=='' && date !=='' ? 
    <Card class = {['Card',props.daytype.toLowerCase()].join(' ')} text = {props.text} hour = {hour} date={date} /> : <Spinner />)
}
const mapStateToProps = state => {
    return {
        daytype: state.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHour: (hour) => dispatch({type: 'HOUR', val: hour}),
        onTime: (time) => dispatch({type: 'TIME', val: time})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetTime);