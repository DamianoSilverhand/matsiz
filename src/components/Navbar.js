import React from 'react';
import '../App.css';
import {logo} from '../assets'

function Navbar(){
	return (
		  <div className="bg-dark">
		    <div className="container">
		      <div className="row">
		        <nav className="col navbar navbar-expand-lg navbar-dark">
		          <a className="navbar-brand mb-0 h1" href="index.html"><img src={logo} width="40" height="30" alt="site logo"/> Happy Birthday Matimba</a>
		          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		            <span className="navbar-toggler-icon"></span>
		          </button>
		          <div id="navbarContent" className="collapse navbar-collapse">
		            <ul className="navbar-nav ml-auto">
		              <li className="nav-item">
		                <a className="nav-link" href="index.html">Home</a>
		              </li>
		              <li className="nav-item active">
		                <a className="nav-link" href="lessons.html">Lessons</a>
		              </li>
		            </ul>
		          </div>
		        </nav>
		      </div>
		    </div>    
		  </div>
	);
}

export default Navbar;