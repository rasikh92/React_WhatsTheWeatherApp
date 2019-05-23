import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import About from './containers/About/About';

const App = props => {
  return (
    <div className="App">
      <header className={["App-header",props.daytype].join(' ')}> 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" render = {() => <About class={['About',props.daytype.toLowerCase()].join(' ')}/>} />
          </Switch>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    daytype: state.text
  }
}

export default withRouter(connect(mapStateToProps)(App));
