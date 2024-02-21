import React from 'react'
import Header from './Header'
import Ourservices from './Ourservices'
import OurPortfolio from './OurPortfolio'
import Testimonial from './Testimonial'
import Choose from './Choose'
import Client from './Client'
import Footer from './Footer'
import Team from './Team'
const Home = () => {
  return (
    <div className='container'>
    <Header/>
    <Ourservices/>
   <OurPortfolio/>
    <Testimonial/>
   
    <Choose/>
      
    <Team/>
    <Client/>
    <Footer/> 
    </div>
  )
}

export default Home
