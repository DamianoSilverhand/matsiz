import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12 } from '../assets';

function Carousel(){
let backG = {
        backgroundImage: "url(" + img09 + ")",

};
	return(
		    <div className="container" style={backG}>
		    <Navbar/>
        <div className="row">
          <div className="col mb-4 mb-lg-0">          
            <div id="carouselExampleIndicators"  className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
	     	            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="9" ></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
			  </ol>
              <div className="carousel-inner">
                <div className=" imgcar carousel-item active" >
                  <img src={img01} className=" d-block w-100" alt="pzi maiden" />
                </div>
                <div className="carousel-item imgcar" >
                  <img src={img02} className="d-block w-100" alt="pzi maiden2" />
                </div>
                <div className="carousel-item" >
                  <img src={img03} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
                <div className="carousel-item" >
                  <img src={img04} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
                <div className="carousel-item" >
                  <img src={img05} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
               <div className="carousel-item" >
                  <img src={img06} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
                <div className="carousel-item" >
                  <img src={img02} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
               <div className="carousel-item" >
                  <img src={img07} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
               <div className="carousel-item" >
                  <img src={img08} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
                <div className="carousel-item" >
                  <img src={img09} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
               <div className="carousel-item" >
                  <img src={img10} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
                <div className="carousel-item" >
                  <img src={img11} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
               <div className="carousel-item" >
                  <img src={img12} className="imgcar d-block w-100" alt="pzi maiden2" />
                </div>
              </div>          
            </div>        
          </div>
        </div>
        <Footer/>
      </div>
)
}

export default Carousel
