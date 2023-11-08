import React, { useEffect }  from 'react'
import HHead from './pages/HHead'
import HBody from './pages/HBody'
import HService from './pages/HService'
import HProject from './pages/HProject'
import HBService from './pages/HBService'
import HTeam from './pages/HTeam'
import HFooter from './pages/HFooter'


const Home = () => {
    // {useEffect(() => {
    //     document.body.style.overflow = "hidden";
    //     return () => {
    //     document.body.style.overflow = "auto";
    //     };
    // }, []);}
    useEffect(() => {
        const cussu = document.querySelector('.cussu');
        cussu.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
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
            <HHead/>
            <HBody/>
            <HService/>
            <HProject/>
            <HBService/>
            <HTeam/>
            <HFooter/>
        </div>
    )
}

export default Home