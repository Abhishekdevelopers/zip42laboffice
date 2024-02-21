import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Portfoliop = () => {
  return (
    <>
      <div className='container'>
    <Header/>
    <div className='Container-ourportfolio'>
      <div className='ourportfolio'>
        <h1 className='hourportfolio'>Our Portfolio</h1>
        <a  className="aourportfolio" href='#'>View All <img src='/image/Arrow 1.png' className="imgourportfolio" alt='View All' /></a>
     </div> 
    

     <div className='cardportfolio'>
     <div class="row">
     <div class="col-md-4">
    <div class="card">
      <div className='cardportfoliochild'>
        <div className='cardcolor'>
        <img src='/image/119x100 1.png' alt='119' className="cardimgportfolio" />
        </div>
      </div>
      </div>
     </div>
  <div class="col-md-4">
    <div class="card">
      <div className='cardportfoliochild'>
      <div className='cardcolor'>
      <img src='/image/Keon-Logo80-190 1.png' className="cardimgportfolio" alt='keon' />
      </div>
      </div>
      </div>
      </div>

      <div className='col-md-4'>
      <div className='cardportfoliochild'>
      <div className='cardcolor'>
      <img src='/image/logoBS 1.png' className="cardimgportfolio" alt='logo' />
      </div>
      </div>
      </div>
      </div>
     </div>

     <div className='cardportfolio'>
     <div class="row">
     <div class="col-md-4">
    <div class="card">
      <div className='cardportfoliochild'>
        <div className='cardcolor'>
        <img src='/image/logo-wellautomation-1 1.png' className="cardimgportfolio" alt='logo' />
        </div>
      </div>
      </div>
     </div>

     
  <div class="col-md-4">
    <div class="card">
      <div className='cardportfoliochild'>
      <div className='cardcolor'>
      <img src='/image/246x0w 1.png' className="cardimgportfolio" alt='246' />
      </div>
      </div>
      </div>
      </div>
    

      <div className='col-md-4'>
      <div className='cardportfoliochild'>
      <div className='cardcolor'>
      <img src='/image/OXY SERUM PNG 2 1.png' className="cardimgportfolio" alt='oxy' />
      </div>
      </div>
      </div>
      </div>
     </div>
      </div>
      <Footer/>
    </div> 
    </>
  )
}

export default Portfoliop
