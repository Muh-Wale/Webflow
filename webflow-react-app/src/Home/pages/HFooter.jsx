import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HFooter = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-8 md:px-14 lg:px-24 bg-[#211C15]'>
            <div className='py-8 md:py-14 lg:py-20 max-w-[1300px] mx-auto'>
                <div className='text-white py-12'>
                    <div className=''>
                        <img src="/src/Pic/12.png" alt="" style={{ filter: 'brightness(200%)' }}/>
                    </div>
                    <div className='py-2'><h1 className='font-semibold text-xl'>Download Our Brochure</h1></div>
                    <div className='flex gap-2 items-center'>
                        <a href="/" className='font-medium'>Get it Now</a>
                        <BsArrowRight size={20}/>
                    </div>
                </div>
                <div className='grid grid-flow-col place-content-between'>
                    <div>
                        <img src="/src/Pic/Head.png" alt="" />
                    </div>
                    <div className='flex gap-3'>
                        <img src="/src/Pic/16.png" alt="" />
                        <img src="/src/Pic/17.png" alt="" className='pl-0 md:pl-5'/>
                    </div>
                </div>
                <div className='text-white pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div className=''>
                        <h1 className='font-semibold text-lg'>Block Pages</h1>
                        <div className='flex gap-3 pt-4 text-sm font-medium'>
                            <div className='flex flex-col'>
                                <Link to="/services" className=' hover:text-[#FC5623] duration-100 pb-3'>Services</Link>
                                <Link to="/blog" className=' hover:text-[#FC5623] duration-100 pb-3'>Blog</Link>
                                <Link to="/contact" className=' hover:text-[#FC5623] duration-100 pb-3'>Contact</Link>
                            </div>
                            <div className='flex flex-col pl-2 md:pl-8'>
                                <Link to="/projects" className=' hover:text-[#FC5623] duration-100 pb-3'>Projects</Link>
                                <Link to="/about" className=' hover:text-[#FC5623] duration-100 pb-3'>About</Link>
                                <Link to="/shop" className=' hover:text-[#FC5623] duration-100 pb-3'>Shop</Link>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='font-semibold text-lg'>Shop Categories</h1>
                        <div className='pt-4 text-sm font-medium'>
                            <ul>
                                <li className='pb-3 hover:text-[#FC5623] duration-100 cursor-pointer'>Safety Equipment</li>
                                <li className='pb-3 hover:text-[#FC5623] duration-100 cursor-pointer'>Wrenches</li>
                                <li className='pb-3 hover:text-[#FC5623] duration-100 cursor-pointer'>Power Tools</li>
                            </ul>
                        </div>
                    </div>
                    <div className='pt-10 md:pt-0'>
                        <h1 className='font-semibold text-lg'>Template</h1>
                        <div className='pt-4 text-sm font-medium'>
                            <ul>
                                <li className='pb-3 hover:text-[#FC5623] duration-100 cursor-pointer'>Change Log</li>
                                <li className='pb-3 hover:text-[#FC5623] duration-100 cursor-pointer'>Licenses</li>
                                <li className='pb-3 hover:text-[#FC5623] duration-100 cursor-pointer'>Styleguide</li>
                            </ul>
                        </div>
                    </div>
                    <div className='pt-10 lg:pt-0'>
                        <h1 className='font-semibold text-lg'>Suscribe To A Newsletter</h1>
                        <div className='py-4 text-sm font-medium'>
                            <p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p>
                        </div>
                        <div className='block md:flex gap-2'>
                            <input type="email" className='py-2 rounded px-2 bg-[#2C2925] w-full md:w-fit' placeholder='Email'/>
                            <div className='md:pt-0 pt-3'>
                                <button className='bg-[#FC5623] text-white hover:bg-gray-200 hover:text-[#FC5623] py-2 px-3 rounded font-semibold focus:outline-none'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HFooter