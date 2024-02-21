import React,{useState} from 'react' //1
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import {GiHamburgerMenu} from 'react-icons/gi';

function Header(){
  const [showMediaIcons, setShowMediaIcons] = useState(false);  // 2
  return (
    
    <>
      <div>
        <div className='nav-bar'>
        <div className='logo'>
            <img src='/zip42lab-wthite 1.png' alt='logo' className='logoimg' />
        </div>
          <div className='main-nav'>
            <ul className='nav-link'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Ourservices">Our Services</Link></li>
                <li><Link to="/digitalmarketing">Digital Marketing</Link></li>
                <li><Link to="/portfolio">Portfolio</Link> </li>
                <li ><Link to="/about">About Us</Link></li>
                <li> <Link to="/contact">Contact Us</Link></li>
            </ul>
            <a href='#' className='aheader'> <img src='/image/search.png' alt='search' /> Search</a>
            </div>
            <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
          <li className="mobileli"><Link to="/">Home</Link></li>
                <li className="mobileli"><Link to="/Ourservices">Our Services</Link></li>
                <li className="mobileli"><Link to="/digitalmarketing">Digital Marketing</Link></li>
                <li className="mobileli"><Link to="/portfolio">Portfolio</Link> </li>
                <li className="mobileli"><Link to="about">About Us</Link></li>
                <li className="mobileli"> <Link to="contact">Contact Us</Link></li>
          </ul>
             
            </div>

            {/* hamburger menu  3*/}

            <div className='hamburger-menu'>
              <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)} className='hamburger-menua'>
                <GiHamburgerMenu/>
              </a> 
              {/* <i class="fa-solid fa-bars" style="color: #fcfcfc;"></i> */}
            </div>


            </div>
            <div className='headerbar'>
            <div className='header-text'>
            <div className='col-md-6 headertext'>
              <h1>Elevate your <sapm className="hcolor">Digital </sapm>
              <sapm className="hcolor">Products</sapm> with us <img src="/image/Line 1.png" alt='line' className='lineimg'></img><FontAwesomeIcon icon={faQuoteLeft} className='quoticon'/></h1>
              <p>App and Web Development for your business. 
We believe in the power of designs.
</p>
         <button className='head-btn'>ENQUIRE NOW</button>
            </div>
            <div className='col-md-6' >
              <img className='header-img' src='/image/man-proud-himself 1.png' alt='header' />
            </div>
            </div>
            </div>
      </div>
    </>
  )
}

export default Header
