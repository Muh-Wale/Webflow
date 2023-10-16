import React from 'react'
import AboutHead from './pages/AboutHead'
import Body from './pages/Body'
import Footer from '../Footer/Footer'
import Sponsors from '../Sponsors/Sponsors'

const About = () => {
  return (
    <div>
      <AboutHead/>
      <Body/>
      <Sponsors/>
      <Footer/>
    </div>
  )
}

export default About