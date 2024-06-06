import React, { useEffect } from 'react'
import ServiceHead from './pages/ServiceHead'
import Body from './pages/Body'
import Footer from '../Footer/Footer'
import { Scroll_To_Top } from '../utils/functions'

const Services = () => {
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
            <ServiceHead/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Services