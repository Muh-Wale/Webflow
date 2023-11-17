import React, { useState }  from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom'
import '/src/App.css'

const HHead = () => {
    const [ nav, setNav ] = useState(false)

    return (
        <div className='max-w-[1640px] mx-auto BackgroundImage'>
            <div className='max-h-[600px] lg:h-[600px] px-5 md:px-14 lg:px-24'>
                <div className='max-w-[1300px] mx-auto pt-5'>
                    <nav className='flex justify-between'>
                        <div className='flex gap-5 items-center'>
                            <div onClick={() => setNav(!nav)}className='cussu cursor-pointer block md:hidden'>
                                <AiOutlineMenu size={30} color='white'/>
                            </div>
                            <a href="/">
                                <img src="/src/Pic/Head.png" />
                            </a>
                            <div className='ml-14 hidden lg:flex'>
                                <ul className='text-white flex gap-5 font-medium'>
                                    <Link to="/services" className=' hover:text-[#FC5623] duration-150'>Services</Link>
                                    <Link to="/projects" className=' hover:text-[#FC5623] duration-15'>Projects</Link>
                                    <Link to="/about" className=' hover:text-[#FC5623] duration-150'>About</Link>
                                    <Link to="/shop" className=' hover:text-[#FC5623] duration-150'>Shop</Link>
                                    <Link to="/blog" className=' hover:text-[#FC5623] duration-150'>Blog</Link>
                                    <Link to="/contact" className=' hover:text-[#FC5623] duration-150'>Contact</Link>
                                </ul>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex items-center mr-5'>
                                <HiOutlineShoppingCart size={25} color='white'/>
                                <p className='text-white'>0</p>
                            </div>
                            <Link to="/services" className='hidden md:block text-white bg-[#FC5623] py-2 px-4 md:py-3 md:px-6 rounded hover:bg-white hover:text-[#FC5623] font-semibold hover:font-bold'>Our Services</Link>
                        </div>
                    </nav>
                </div>
                <div className='max-w-[1300px] mx-auto py-10 md:py-16 lg:py-28 w-full h-full'>
                    <div className='text-white'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>We are premier Construction</h1>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>company in London</h1>
                    </div>
                    <p className='text-white py-8'>We are premier construction company in London</p>
                    <div className='pt-5 flex gap-1'>
                        <Link to="/services" className='text-[#FC5623] bg-white py-3 px-3 md:px-6 rounded font-semibold hover:bg-[#FC5623] hover:text-[white] hover:font-bold'>Our Services</Link>
                        <Link to="/services" className='py-3 text-white px-3 md:px-6 rounded font-semibold bg-transparent hover:text-[#FC5623] hover:font-bold'>Our Services</Link>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
                {/* Overlay */}
            {nav ? <div className="bg-black/80 hidden fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
                {/* Side Drawer Menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[100%] h-fit bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-fit bg-white z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='cuss absolute right-4 top-4 cursor-pointer'
                />
                <a>
                    <img src="/src/Pic/Head.png" alt="/" className='p-4' style={{ filter: 'brightness(0%)' }}/>
                </a>
                <nav className='flex justify-center shadow-2xl'>
                    <ul className='flex flex-col p-4 '>
                        <Link to="/services" className='text-xl py-4 flex font-semibold hover:text-[#FC5623] duration-150'>Services</Link>
                        <Link to="/projects" className='text-xl py-4 flex font-semibold hover:text-[#FC5623] duration-15'>Projects</Link>
                        <Link to="/about" className='text-xl py-4 flex font-semibold hover:text-[#FC5623] duration-150'>About</Link>
                        <Link to="/shop" className='text-xl py-4 flex font-semibold hover:text-[#FC5623] duration-150'>Shop</Link>
                        <Link to="/blog" className='text-xl py-4 flex font-semibold hover:text-[#FC5623] duration-150'>Blog</Link>
                        <Link to="/contact" className='text-xl py-4 flex font-semibold hover:text-[#FC5623] duration-150'>Contact</Link>
                    </ul>
                </nav>
            </div>
        </div>    
    )
}

export default HHead