import React, {useEffect} from 'react'
import SrSingleHead from './pags/SrSingleHead'
import Body from './pags/Body'
import Footer from '../Footer/Footer'

const ServiceSingle = () => {
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
            <SrSingleHead/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default ServiceSingle