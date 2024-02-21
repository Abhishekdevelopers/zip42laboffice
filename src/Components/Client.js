import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay:true,
      speed: 400,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            autoplay:true,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            autoplay:true,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className='container'>
        <div className="boxcontainer">
        <div className='oursliderheaderclient'>
        <h1 className='hslider'>Our Valuable Clients</h1>
     </div>
     <div className="sildermainboxclient">
        <Slider {...settings}>

          <div >
            <div className='boxclient'>
             <img className="imgclient"
        src='/image/1 20.png' alt='img' />
       
        </div>
          </div>
          <div>
            <div className='boxclient'>
             <img className="imgclient"
        src='/image/oie_30114953RGwTsKp1 1.png' alt='img' />
        </div>
          </div>
          <div>
            <div className='boxclient'>
             <img className="imgclient"
        src='/image/Untitled-11111 1.png' alt='img' />
        </div>
          </div>
          <div>
            <div className='boxclient'>
             <img className="imgclient"
        src='/image/12-1 1.png' alt='img' />
        </div>
          </div>
          <div>
            <div className='boxclient'>
             <img className="imgclient"
        src='/image/10-1 1.png' alt='img' />
        </div>
          </div>
          <div>
            <div className='boxclient'>
             <img className="imgclient"
        src='/image/Untitled-111 12.png' alt='img' />
        </div>
          </div>
          <div>
            <div className='boxclient'>
             <img className="imgclient"
        src='/image/9 1.png' alt='img' />
        </div>
          </div>
        </Slider>
        </div>
        </div>
      </div>
    );
  }
}