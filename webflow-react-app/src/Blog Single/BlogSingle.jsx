import React from 'react'
import BsingleHead from './Page/BSingleHead.jsx'
import Body from './Page/Body.jsx'
import Blog from './Page/Blog.jsx'
import Footer from '../Footer/Footer'

const BlogSingle = () => {
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