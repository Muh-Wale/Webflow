import React, { useEffect } from 'react'
import HtHead from './pages/HtHead'
import HtService from './pages/HtService'
import HtBody from './pages/HtBody'
import HtTemplate from './pages/HtTemplate'
import HtSubscription from './pages/HtSubscription'
import HtProject from './pages/HtProject'
import Footer from '../Footer/Footer'

const Htwo = () => {
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
            <HtHead/>
            <HtService/>
            <HtBody/>
            <HtTemplate/>
            <HtSubscription/>
            <HtProject/>
            <Footer/>
        </div>
    )
}

export default Htwo