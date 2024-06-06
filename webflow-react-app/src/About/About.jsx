import React, { useEffect } from 'react'
import AboutHead from './pages/AboutHead'
import Body from './pages/Body'
import Footer from '../Footer/Footer'
import Sponsors from '../Sponsors/Sponsors'
import { Scroll_To_Top } from '../utils/functions'

const About = () => {
  useEffect(() => {
    Scroll_To_Top();
}, [])

  useEffect(() => {
    const cussu = document.querySelector('.cussu');
    const cuss = document.querySelector('.cuss')
    cussu.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
    });
    cuss.addEventListener('click', () => {
      document.body.style.overflow = 'auto';
    });
    return () => {
    cussu.removeEventListener('click', () => {
      document.body.style.overflow = 'hidden';
    });
    document.body.style.overflow = 'auto';
    };
  }, []);

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