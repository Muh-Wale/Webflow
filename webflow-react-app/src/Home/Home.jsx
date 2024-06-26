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