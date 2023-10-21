import React, { useState }  from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import '/src/App.css'
import { Link } from 'react-router-dom';

const SrSingleHead = () => {
    const [ nav, setNav ] = useState(false)

    return (
        <div className='max-w-[1640px] mx-auto'>
            <div className='px-5 md:px-14 lg:px-24'>
                <div className='max-w-[1300px] mx-auto pt-5'>
                    <nav className='flex justify-between'>
                        <div className='flex gap-5 items-center'>
                            <div onClick={() => setNav(!nav)}className='cursor-pointer block md:hidden'>
                                <AiOutlineMenu size={30}/>
                            </div>
                            <a href="/" className='hidden md:block'>
                                <img src="/src/Pic/35.png" alt="/" />
                            </a>
                            <div className='ml-14 hidden lg:flex'>
                                <ul className='flex gap-5 font-medium'>
                                    <Link to="/services" className=' hover:text-[#FC5623] duration-150'>Services</Link>
                                    <Link to="/projects" className=' hover:text-[#FC5623] duration-150'>Projects</Link>
                                    <Link to="/about" className=' hover:text-[#FC5623] duration-150'>About</Link>
                                    <Link to="/shop" className=' hover:text-[#FC5623] duration-150'>Shop</Link>
                                    <Link to="/blog" className=' hover:text-[#FC5623] duration-150'>Blog</Link>
                                    <Link to="/contact" className=' hover:text-[#FC5623] duration-150'>Contact</Link>
                                </ul>
                            </div>
                        </div>
                        <div className='flex'>
                            <Link to="/checkout" className='flex items-center mr-5 cursor-pointer'>
                                <HiOutlineShoppingCart size={25}/>
                                <p className=''>0</p>
                            </Link>
                            <Link to="/services" className='text-white bg-[#FC5623] py-2 px-4 md:py-3 md:px-6 rounded hover:text-[#1C1A17] font-semibold'>Our Services</Link>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Mobile Menu */}
                {/* Overlay */}
            {nav ? <div className="bg-black/80 hidden fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
                {/* Side Drawer Menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <a>
                    <img src="/src/Pic/Head.png" alt="/" className='p-4' style={{ filter: 'brightness(0%)' }}/>
                </a>
                <nav>
                    <ul className='flex flex-col p-4 '>
                        <li className="text-xl py-4 flex">
                            Services
                        </li>
                        <li className="text-xl py-4 flex">
                            Projects
                        </li>
                        <li className="text-xl py-4 flex">
                            About
                        </li>
                        <li className="text-xl py-4 flex">
                            Shop
                        </li>
                        <li className="text-xl py-4 flex">
                            Blog
                        </li>
                        <li className="text-xl py-4 flex">
                            Contact
                        </li>
                    </ul>
                </nav>
            </div>
        </div>    
    )
}

export default SrSingleHead