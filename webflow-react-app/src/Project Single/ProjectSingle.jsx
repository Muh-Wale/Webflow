import React, {useEffect} from 'react'
import PSingleHead from './pages/PSingleHead'
import Body from './pages/Body'
import Footer from '../Footer/Footer'

const ProjectSingle = () => {
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
            <PSingleHead/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default ProjectSingle