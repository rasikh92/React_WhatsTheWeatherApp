import React from 'react';
import './App.css';
import About from './containers/About/About';
import NavigationItem from './components/Navigation/NavigationItem/NavigationItem';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Search from './containers/Search/Search';
import Card from './components/Card/Card';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import BigCard from './components/BigCard/BigCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Jumbotron />
          <Search />
          <List />
          <BigCard />
          <Card />
          <Footer />
      </header>
    </div>
  );
}

export default App;
