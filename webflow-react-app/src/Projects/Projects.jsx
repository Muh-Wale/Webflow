import React, { useEffect } from 'react'
import ProjectHead from './pages/ProjectHead'
import Body from './pages/Body'
import Footer from '../Footer/Footer'

const Projects = () => {
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
            <ProjectHead/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Projects