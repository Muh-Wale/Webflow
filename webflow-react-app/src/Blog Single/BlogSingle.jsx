import React, { useEffect } from 'react'
import BsingleHead from './Page/BSingleHead.jsx'
import Body from './Page/Body.jsx'
import Blog from './Page/Blog.jsx'
import Footer from '../Footer/Footer'
import { Scroll_To_Top } from '../utils/functions.jsx'

const BlogSingle = () => {
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
            <BsingleHead/>
            <Body/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default BlogSingle