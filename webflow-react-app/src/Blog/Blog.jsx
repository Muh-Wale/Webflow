import React, { useEffect } from 'react'
import BlogHead from './pages/BlogHead'
import Body from './pages/Body'
import Sponsors from '../Sponsors/Sponsors'
import Footer from '../Footer/Footer'


const Blog = () => {
    useEffect(() => {
        window.scroll(0, 0);
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
            <BlogHead/>
            <Body/>
            <Sponsors/>
            <Footer/>
        </div>
    )
}

export default Blog