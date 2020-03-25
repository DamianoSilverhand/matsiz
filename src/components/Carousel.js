import React from 'react';
import { img01, img02, img03, img04, img05, img06, img07 } from '../assets';

function Carousel(){
	return(
		    <div className="container-fluid">
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
              </div>          
            </div>        
          </div>
        </div>
      </div>
)
}

export default Carousel
