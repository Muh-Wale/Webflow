import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import img22 from '/src/Pic/22.png'

const Blog = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24'>
            <div className=' max-w-[1300px] mx-auto'>
                <div className='pt-14'>
                    <p className='text-3xl font-semibold'>More blog posts</p>
                </div>
                <div className='py-16 grid grid-cols-1 mx-auto md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-5 lg:gap-10'>
                    <div className=' max-w-[450px] border border-[#EEF1F3] relative'>
                        <div>
                            <img src={img22} alt="" className=' w-full'/>
                        </div>
                        
                        <div className=' p-3 md:p-5'>
                            <h1 className=' font-semibold text-lg'>Premier construction</h1>
                            <p className=' text-sm text-[#211C15] py-4'>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p>
                            <div className='flex w-fit gap-2 items-center justify-center text-white bg-[#FC5623] py-2 px-4 rounded hover:text-gray-300 font-semibold hover:font-bold'>
                                <a href="/" className=' font-normal md:font-semibold'>Details</a>
                                <BsArrowRight size={20}/>
                            </div> 
                        </div>
                    </div>
                    <div className=' max-w-[450px] border border-[#EEF1F3] relative'>
                        <div>
                            <img src={img22} alt="" className=' w-full'/>
                        </div>
                        
                        <div className=' p-3 md:p-5'>
                            <h1 className=' font-semibold text-lg'>Premier construction</h1>
                            <p className=' text-sm text-[#211C15] py-4'>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p>
                            <div className='flex w-fit gap-2 items-center justify-center text-white bg-[#FC5623] py-2 px-4 rounded hover:text-gray-300 font-semibold hover:font-bold'>
                                <a href="/" className=' font-normal md:font-semibold'>Details</a>
                                <BsArrowRight size={20}/>
                            </div> 
                        </div>
                    </div>
                    <div className=' max-w-[450px] border border-[#EEF1F3]'>
                        <div className='relative'>
                            <div>
                                <img src={img22} alt="" className=' w-full'/>
                            </div>
                            <div className="p-2 rounded bg-white absolute top-3 right-3">
                                <p className="font-medium">New</p>
                            </div>
                        </div>
                        
                        <div className=' p-3 md:p-5'>
                            <h1 className=' font-semibold text-lg'>Premier construction</h1>
                            <p className=' text-sm text-[#211C15] py-4'>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p>
                            <div className='flex w-fit gap-2 items-center justify-center text-white bg-[#FC5623] py-2 px-4 rounded hover:text-gray-300 font-semibold hover:font-bold'>
                                <a href="/" className=' font-normal md:font-semibold'>Details</a>
                                <BsArrowRight size={20}/>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog