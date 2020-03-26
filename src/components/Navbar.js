import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import {logo} from '../assets'

function Navbar(){
	return (
		  <div className="bg-dark">
		    <div className="container-fluid mb-4">
		      <div className="row">
		        <nav className="col navbar navbar-expand-lg navbar-dark">
		          <Link to="/" className="navbar-brand mb-0" ><img src={logo} style={{ width:40, height:30, borderaRadius: 50 + "%"}}  alt="site logo"/><span role="img" aria-label="wrapped-heart">💝</span>Happy Birthday Matimba<span role="img" aria-label="wrapped-heart">💝</span></Link>
		          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		            <span className="navbar-toggler-icon"></span>
		          </button>
		          <div id="navbarContent" className="collapse navbar-collapse">
		            <ul className="navbar-nav ml-auto">
		              <li className="nav-item align">
		                <Link  className="nav-link" to="/">Home</Link>
		              </li>
		              <li className="nav-item align">
		                <Link to = "/wishes" className="nav-link" >Birthday Wishes</Link>
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