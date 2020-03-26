import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar.js';

function Wishes(){
	return (
	    <div className="container blaze">
	    <Navbar/>
	    <div className="row">
	      <div className="col">
	        <nav aria-label="breadcrumb">
	        <ol className="breadcrumb">
	        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
	        <li className="breadcrumb-item active" aria-current="page">Birthday Wishes</li>
	        </ol>
	        </nav>
	        </div>
	       </div>
	      <div className="row">
	        <div className="col">
	          <div className="alert alert-info alert-dismissible fade show" role="alert">
	           <p> From All Of Us, With Love! </p><br/>
	           <p>Enjoy Your Day Magu</p>
	              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
	                <span aria-hidden="true">&times;</span>
	              </button>
	            </div>
	        </div>
	      </div>
	      <div className="row">
	        <div className="col">
	        <h2 className="align">Tracy and Sitabile</h2>
	          <div className="embed-responsive embed-responsive-16by9">
	            <iframe 
	              className="embed-responsive-item"
	              src="https://www.youtube.com/embed/bkxulmUqa0U" 
	              frameborder="0" 
	              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	              allowfullscreen>
	            </iframe>
	          </div>
	        </div>
	      </div>
	      <div className="row">
	        <div className="col">
	          <h3 className="align">Mum Matimba</h3>
	          <p>We wish you a very wonderful birthday, you deserve it for being such an amazing Mum</p>
	        </div>
	      </div>
	       <hr className="horizontal"/>
              <div className="row">
                <div className="col">
                <h2 className ="align">Temwa and Jeremiah</h2>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/UVSfUsGgYDY"
                      title="Mother and Son"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                      allowfullscreen>
                    </iframe>
                  </div>
                </div>
	         </div>
             <div className="row">
                <div className="col">
                  <h3 className="align">Adorable Sister</h3>
                  <p>On this day God Blessed me with a sister from another Mother and I want to wish her the best in life </p>
                </div>
              </div>
              <hr className="horizontal"/>
             <div className="row">
                <div className="col">
                <h2 className ="align">Ngabina and Temwa</h2>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/6In3Ce4KWrY"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                      allowfullscreen>
                    </iframe>
                  </div>
                </div>
              </div>
               <div className="row">
                <div className="col">
                  <h3 className="align">To Our Lovely Sister</h3 >
                  <p>A year older, a year wiser, may your be blessed with more than enough of all that you need </p>
                </div>
              </div>
               <hr className="horizontal"/>
             <div className="row">
              <div className="col">
              <h2 className ="align">Damiano</h2>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/ymVKIAHEDLY"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>
             <div className="row">
              <div className="col">
                <h3 className="align">My Obyagu</h3>
                <p>Happy Birthday Banyina Luyando, Words cant express how wonderful you are my beautiful one. I wish you a joyous birthday and many more to come.</p>
                <br/>
           <p className="align"><span  role="img" aria-label="wrapped-heart" style={{ fontSize :20 + 'px'}}>❤</span>Pure and Simple<span  role="img" aria-label="wrapped-heart" style={{ fontSize :20 + 'px'}}>❤</span></p>
              </div>
            </div>
	    </div>
	);
}
export default Wishes;
