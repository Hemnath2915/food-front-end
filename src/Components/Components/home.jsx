import React from 'react'
import ImageColumn from './ImageColumn'
import Slideshow from './imagesliders'
import Register from './register'
import NavBar from './NavBar'
import About from './about'
import Services from './services'
import Contact from './contact'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Slideshow/>
        <ImageColumn/>
        <About/>
        <Services/>
        <Contact/>
        {/* <Register/>  */}
    </div>
  )
}
