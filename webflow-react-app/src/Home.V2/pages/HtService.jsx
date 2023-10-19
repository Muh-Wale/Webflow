import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const HtService = () => {
    return (
        <div className='max-w-[1640px] mx-auto'>
            <div className=' md:bg-[#E5E5E5] bg-none max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pt-10 md:pt-0 pb-12 max-w-[1300px] mx-auto md:relative static z-10 md:top-[-70px] top-0'>
                    <div className=' '>
                        <div className='p-3 md:p-6 lg:p-10 bg-white hover:shadow-lg shadow-md md:shadow-none  max-w-[400px] rounded mx-auto md:mx-0'>
                            <div className=''>
                                <img src="/src/Pic/18.png" alt=""/>
                            </div>
                            <div className='py-3'><h1 className='font-semibold text-xl'>Construction Service</h1></div>
                            <div className='flex gap-2 pt-3 items-center'>
                                <a href="/" className='font-semibold text-lg'>Details</a>
                                <BsArrowRight size={20}/>
                            </div>
                        </div>
                    </div>
                    <div className=' '>
                        <div className='p-3 md:p-6 lg:p-10 bg-white hover:shadow-lg shadow-md md:shadow-none max-w-[400px] md:max-w-[400px] rounded mx-auto md:mx-0'>
                            <div className=''>
                                <img src="/src/Pic/19.png" alt=""/>
                            </div>
                            <div className='py-3'><h1 className='font-semibold text-xl'>Construction Service</h1></div>
                            <div className='flex gap-2 pt-3 items-center'>
                                <a href="/" className='font-semibold text-lg'>Details</a>
                                <BsArrowRight size={20}/>
                            </div>
                        </div>
                    </div>
                    <div className=' '>
                        <div className='p-3 md:p-6 lg:p-10 bg-white hover:shadow-lg shadow-md md:shadow-none max-w-[400px] md:max-w-[400px] rounded mx-auto md:mx-0'>
                            <div className=''>
                                <img src="/src/Pic/20.png" alt=""/>
                            </div>
                            <div className='py-3'><h1 className='font-semibold text-xl'>Construction Service</h1></div>
                            <div className='flex gap-2 pt-3 items-center'>
                                <a href="/" className='font-semibold text-lg'>Details</a>
                                <BsArrowRight size={20} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='max-w-[1640px] mx-auto px-3 md:px-14 lg:px-24 my-10'>
                <div className='max-w-[1300px] mx-auto py-5 flex justify-between gap-0 md:gap-5 border-[#E5E5E5] border-b-4'>
                    <div className='flex justify-center w-full font-semibold text-xl hover:text-[#FC5623] duration-200'>Service One</div>
                    <div className='flex justify-center w-full font-semibold text-xl hover:text-[#FC5623] duration-200'>Service Two</div>
                    <div className='flex justify-center w-full font-semibold text-xl hover:text-[#FC5623] duration-200'>Service Three</div>
                </div>
            </div>
        </div>
    )
}

export default HtService