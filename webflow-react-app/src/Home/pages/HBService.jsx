import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import img13 from '/src/Pic/13.png'
import img14 from '/src/Pic/11.png'
import img15 from '/src/Pic/12.png'

const HBService = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-8 md:px-14 lg:px-24 bg-[#211C15]'>
            <div className='py-8 md:py-14 lg:py-20 max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 lg:gap-12'>
                <div className='text-white pt-6 md:pt-0'>
                    <div className=''>
                        <img src={img13} alt=""/>
                    </div>
                    <div className='py-3'><h1 className='font-semibold text-xl'>Construction Service</h1></div>
                    <div><p className='leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel placeat modi eveniet optio amet omnis laborum beatae tempore similique.</p></div>
                    <div className='flex gap-2 pt-3 items-center'>
                        <Link to="/services" className='font-semibold text-lg'>Details</Link>
                        <BsArrowRight size={20} color='white'/>
                    </div>
                </div>
                <div className='text-white pt-6 md:pt-0'>
                    <div className=''>
                        <img src={img14} alt=""/>
                    </div>
                    <div className='py-3'><h1 className='font-semibold text-xl'>Construction Service</h1></div>
                    <div><p className='leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel placeat modi eveniet optio amet omnis laborum beatae tempore similique.</p></div>
                    <div className='flex gap-2 pt-3 items-center'>
                        <a href="/" className='font-semibold text-lg'>Details</a>
                        <BsArrowRight size={20} color='white'/>
                    </div>
                </div>
                <div className='text-white pt-6 md:pt-0'>
                    <div className=''>
                        <img src={img15} alt=""/>
                    </div>
                    <div className='py-3'><h1 className='font-semibold text-xl'>Construction Service</h1></div>
                    <div><p className='leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel placeat modi eveniet optio amet omnis laborum beatae tempore similique.</p></div>
                    <div className='flex gap-2 pt-3 items-center'>
                        <a href="/" className='font-semibold text-lg'>Details</a>
                        <BsArrowRight size={20} color='white'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HBService