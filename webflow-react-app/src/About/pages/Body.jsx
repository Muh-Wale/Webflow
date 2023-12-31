import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import two from '/src/Pic/2.png'
import img15 from '/src/Pic/15.png'
import img18 from '/src/Pic/18.png'
import img19 from '/src/Pic/19.png'
import img20 from '/src/Pic/20.png'

const Body = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24 border-b-2 border-[#EEF1F3]'>
            <div className='py-20 max-w-[1300px] mx-auto'>
                <div className='block lg:grid lg:grid-cols-4 w-full lg:gap-2 lg:static'>
                    <div className='lg:col-span-2 grid place-content-center'>
                        <img src={two} alt="/" className='w-[460px] md:w-[500px] lg:w-fit'/>
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
                            <div className='pt-7 cursor-pointer'>
                                <Link to="/services" className='text-white bg-[#FC5623] py-2 px-4 md:py-2 md:px-5 rounded font-semibold hover:text-[#1C1A17]'>Our Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1300px] mx-auto py-10'>
                <h1 className='text-3xl font-semibold'>Our Members</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 lg:gap-12'>
                    <div className='grid place-content-center md:block px-3 md:px-0'>
                        <div className="relative">
                            <img src={img15} alt="Picture" />
                            <div className="p-3 rounded bg-white absolute bottom-7 left-7 z-10">
                                <p className="font-semibold">CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid place-content-center md:block px-3 md:px-0'>
                        <div className='relative'>
                            <img src={img15} alt="Picture"/>
                            <div className="p-3 rounded bg-white absolute bottom-7 left-7 z-10">
                                <p className="font-semibold">Project Manager</p>
                            </div>
                        </div>
                        <p className='font-semibold py-2 text-lg'>Jess Musk</p>
                    </div>
                    <div className='grid place-content-center md:block px-3 md:px-0'>
                        <div className='relative'>
                            <img src={img15} alt="Picture"/>
                            <div className="p-3 rounded bg-white absolute bottom-7 left-7 z-10">
                                <p className="font-semibold">Architect</p>
                            </div>
                        </div>
                        <p className='font-semibold py-2 text-lg'>Tomaas Hirschi</p>
                    </div>
                </div>
            </div>
            <div className='max-w-[1640px] mx-auto '>
                <div className='py-8 md:py-14 max-w-[1300px] mx-auto'>
                    <div className='flex justify-between pb-14'>
                        <h1 className='text-3xl font-semibold'>
                            The Blog Priorities
                        </h1>
                        <div>
                            <Link to="/services" className='text-white bg-[#FC5623] py-2 px-4 md:py-2 md:px-5 rounded font-semibold hover:text-[#1C1A17]'>Our Services</Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-14'>
                        <div className='pt-6 md:pt-0'>
                            <div className=''>
                                <img src={img18} alt=""/>
                            </div>
                            <div className='py-3'><h1 className='font-semibold text-xl'>Construction Service</h1></div>
                            <div><p className='leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel placeat modi eveniet optio amet omnis laborum beatae tempore similique.</p></div>
                            <div className='flex gap-2 pt-3 items-center hover:text-[#FC5623] font-semibold hover:font-bold duration-75 w-fit cursor-pointer'>
                                <a href="/services" className='font-semibold text-lg'>Details</a>
                                <BsArrowRight size={20}/>
                            </div>
                        </div>
                        <div className='pt-6 md:pt-0'>
                            <div className=''>
                                <img src={img19} alt=""/>
                            </div>
                            <div className='py-3'><h1 className='font-semibold text-xl'>Construction Service</h1></div>
                            <div><p className='leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel placeat modi eveniet optio amet omnis laborum beatae tempore similique.</p></div>
                            <div className='flex gap-2 pt-3 items-center hover:text-[#FC5623] font-semibold hover:font-bold duration-75 w-fit cursor-pointer'>
                                <a href="/services" className='font-semibold text-lg'>Details</a>
                                <BsArrowRight size={20}/>
                            </div>
                        </div>
                        <div className='pt-6 md:pt-0'>
                            <div className=''>
                                <img src={img20} alt=""/>
                            </div>
                            <div className='py-3'><h1 className='font-semibold text-xl'>Construction Service</h1></div>
                            <div><p className='leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel placeat modi eveniet optio amet omnis laborum beatae tempore similique.</p></div>
                            <div className='flex gap-2 pt-3 items-center hover:text-[#FC5623] font-semibold hover:font-bold duration-75 w-fit cursor-pointer'>
                                <a href="/services" className='font-semibold text-lg'>Details</a>
                                <BsArrowRight size={20}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Body