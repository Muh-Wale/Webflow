import React, { useState }  from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import '/src/App.css'

const ChPayHead = () => {
    const [ nav, setNav ] = useState(false)

    return (
        <div className='max-w-[1640px] mx-auto MainBackgroundImage'>
            <div className='max-h-[600px] lg:h-[400px] px-5 md:px-14 lg:px-24'>
                <div className='max-w-[1300px] mx-auto pt-5'>
                    <nav className='flex justify-between'>
                        <div className='flex gap-5 items-center'>
                            <div onClick={() => setNav(!nav)}className='cursor-pointer block md:hidden'>
                                <AiOutlineMenu size={30} color='white'/>
                            </div>
                            <a href="/">
                                <img src="/src/Pic/Head.png" alt="/" />
                            </a>
                            <div className='ml-14 hidden lg:flex'>
                                <ul className='text-white flex gap-5'>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Projects</a></li>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Shop</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex items-center mr-5'>
                                <HiOutlineShoppingCart size={25} color='white'/>
                                <p className='text-white'>0</p>
                            </div>
                            <button className='text-white bg-[#FC5623] py-2 px-4 md:py-3 md:px-6 rounded hover:bg-white hover:text-[#FC5623] font-semibold hover:font-bold'>Our Services</button>
                        </div>
                    </nav>
                </div>
                <div className='max-w-[1300px] mx-auto py-10 md:py-24 lg:py-28 w-full h-full'>
                    <div className=' text-center pt-12'>
                        <h1 className='text-white font-semibold text-3xl'>Paypal Checkout</h1>
                    </div>
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

export default ChPayHead