import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Carousel from './components/Carousel.js';
import Footer from './components/Footer.js';
import Wishes from './components/Wishes.js';

function App() {
  return (
    <div className="Container">
	<Navbar/>
	<Carousel/>
	<Wishes/>
	<Footer/>
    </div>
  );
}

export default App;
