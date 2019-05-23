import React, {Component} from 'react';
import './Home.css'
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Search from '../../containers/Search/Search';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';


class Home extends Component {
    render() {
        return (
        <React.Fragment>
            <Jumbotron class={['Jumbotron',this.props.daytype.toLowerCase()].join(' ')} time={this.props.time} />
            <Search class={['Search',this.props.daytype.toLowerCase()].join(' ')}/>
            <Footer class={['Footer',this.props.daytype.toLowerCase()].join(' ')}/>
        </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        daytype: state.text,
        time: state.time
    }
}

export default connect(mapStateToProps)(Home);