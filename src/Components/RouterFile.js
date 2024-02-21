import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Ourservicesp from './Ourservicesp'
import About from './Aboutp'
import DigitalMarketing from './DigitalMarketing'
import Portfoliop from './Portfoliop'
import { Route, Routes } from 'react-router-dom'

const RouterFile = () => {
  return (
    <div>
    <Routes>
    
        <Route path='/' element={<Home/>}/>
        
        <Route path="/Ourservices" element={<Ourservicesp/>}/>
        
        <Route path='/Digitalmarketing' element={<DigitalMarketing/>}/>

        <Route path="/portfolio" element={<Portfoliop/>}/>
        
        <Route path='/about' element={<About/>}/>
        
        <Route path='/contact' element={<Contact/>}/> 

    </Routes>
    </div>
  )
}

export default RouterFile
