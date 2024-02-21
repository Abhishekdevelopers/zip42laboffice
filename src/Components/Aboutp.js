import React from 'react'
import  Styles  from './Aboutp.module.css'
import Header from './Header'
import Footer from './Footer'
const About = () => {
  return (
    <div className='container'>
    <Header/>
    <div className='Container-ourservices'>
      <h1 className={Styles.texth}>Welcome to Abouts us</h1>
      <h2>Coming Soon...</h2>
      </div>
      <Footer/>
    </div>
  )
}

export default About
