import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HService = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24 bg-[#FC5623]'>
            <div className='py-8 md:py-14 lg:py-20 max-w-[1300px] mx-auto grid  grid-cols-4 md:grid-cols-8 gap-2'>
                <div className='bg-white rounded px-2 md:px-3 py-4 md:py-8 text-center col-span-2'>
                    <div className='flex justify-center'>
                        <img src="/src/Pic/6.png" alt=""/>
                    </div>
                    <div className='py-2 lg:py-4'><h1 className='font-semibold text-xl'>Service One</h1></div>
                    <div><p className='leading-snug lg:leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, corrupti la mason.</p></div>
                    <div className='flex justify-center'>
                        <div className='flex gap-2 pt-2 lg:pt-5 w-fit items-center justify-center cursor-pointer'>
                            <Link to="/hometwo" className=' font-semibold text-lg'>Details</Link>
                            <BsArrowRight size={20}/>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded px-2 md:px-3 py-4 md:py-8 text-center col-span-2'>
                    <div className='flex justify-center'>
                        <img src="/src/Pic/7.png" alt=""/>
                    </div>
                    <div className='py-2 lg:py-4'><h1 className='font-semibold text-xl'>Service Two</h1></div>
                    <div><p className='leading-snug lg:leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, corrupti la mason.</p></div>
                    <div className='flex justify-center'>
                        <div className='flex gap-2 pt-2 lg:pt-5 w-fit items-center justify-center cursor-pointer'>
                            <Link to="/services" className=' font-semibold text-lg'>Details</Link>
                            <BsArrowRight size={20}/>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 flex flex-col justify-center pl-0 pt-6 md:pl-12 md:pt-0'>
                    <h1 className='text-4xl font-semibold text-white'>Real Guarantee For Your Safety</h1>
                    <p className='text-white py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ad autem, aliquid accusamus possimus similique aperiam nulla aut ipsum voluptatem totam maiores consectetur. Ducimus, quos quia!</p>
                    <div className='cursor-pointer'>
                        <Link to="/services" className='bg-white hover:text-white hover:bg-black py-2 px-4 md:py-2 md:px-5 rounded font-semibold'>Our Services</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HService