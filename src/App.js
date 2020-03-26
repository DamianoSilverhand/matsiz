import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js';
import Carousel from './components/Carousel.js';
import Footer from './components/Footer.js';
import Wishes from './components/Wishes.js';

function App() {
  return (
  <Switch>
        <Route exact path="/" component={Carousel} />
        <Route path="/wishes" component={Wishes} />
      </Switch>
  );
}

export default App;
