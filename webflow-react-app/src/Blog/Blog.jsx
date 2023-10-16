import React from 'react'
import BlogHead from './pages/BlogHead'
import Body from './pages/Body'
import Sponsors from '../Sponsors/Sponsors'
import Footer from '../Footer/Footer'


const Blog = () => {
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