import React from 'react'
import { TiTick } from 'react-icons/ti'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HBody = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24'>
            <div className='py-20 max-w-[1300px] mx-auto'>
                <div className='block lg:grid lg:grid-cols-4 w-full lg:gap-2 lg:static'>
                    <div className='lg:col-span-2 grid place-content-center'>
                        <img src="/src/Pic/2.png" alt="/" className='w-[460px] md:w-[500px] lg:w-fit'/>
                    </div>
                    <div className='w-full col-span-2 lg:flex justify-center md:block'>
                        <div 
                            className='flex flex-col justify-center w-[330px] md:w-[500px] md:max-w-full lg:max-w-fit items-center md:items-stretch mx-auto lg:mx-0 p-5 lg:p-0 bg-gray-50 lg:bg-inherit rounded relative z-10 top-[-20px] md:static'
                        >
                            <div>
                                <h1 className='text-xl sm:text-2xl md:text-4xl font-semibold'>Everything to solve your</h1>
                                <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>construction problem</h1>
                            </div>
                            <p className='text-[#1C1A17] py-6'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ex cupiditate illo laudantium reprehenderit maxime soluta eveniet ratione blanditiis doloremque, aperiam deserunt repellendus?
                            </p>
                            <div>
                                <div className='flex gap-1 items-center'>
                                    <TiTick size={30} color='#FDB135'/>
                                    <p className='font-semibold text-lg'>Lorem ipsum dolor sit.</p>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <TiTick size={30} color='#FDB135'/>
                                    <p className='font-semibold text-lg'>Lorem ipsum dolor.</p>
                                </div>
                            </div>
                            <div className='pt-7 cursor-pointer'>
                                <Link to="/services" className='text-white bg-[#FC5623] py-2 px-4 md:py-2 md:px-5 rounded font-semibold hover:text-[#1C1A17]'>Our Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1300px] mx-auto'>
                <h1 className='text-3xl font-semibold'>Block Products</h1>
                <div className='py-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-12'>
                    <div>
                        <div className="relative">
                            <img src="/src/Pic/4.png" alt="Picture" className="w-full" />
                            <div className="px-3 py-1 rounded bg-white absolute top-2 right-2 z-10">
                                <p className="">New</p>
                            </div>
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src="/src/Pic/3.png" alt="Picture" className="w-full" />
                            <div className="px-3 py-1 rounded bg-white absolute top-2 right-3 z-10">
                                <p className="">New</p>
                            </div>
                            <div className="px-2 py-1 md:px-5 md:py-3 rounded bg-[#FC5623] absolute bottom-0 left-5 z-10 hover:scale-105 duration-200">
                                <div className='flex gap-2 items-center text-white'>
                                    <Link to="/shopsingle" className='text-sm'>Details</Link>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src="/src/Pic/5.png" alt="Picture" className="w-full" />
                            <div className="px-3 py-1 rounded bg-white absolute top-2 right-2 z-10">
                                <p className="">New</p>
                            </div>
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HBody