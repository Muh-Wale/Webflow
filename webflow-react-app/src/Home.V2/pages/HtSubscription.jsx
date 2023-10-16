import React from 'react'
import { TiTick } from 'react-icons/ti'

const HtSubscription = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24'>
            <div className='py-20 max-w-[1300px] mx-auto grid grid-cols-3'>
                <div className=' p-5 flex flex-col text-center max-w-[400px] border border-[#EEF1F3]'>
                    <h1 className='font-semibold text-lg'>Standard</h1>
                    <h1 className=' font-medium py-2'><span className='font-bold text-4xl'>$99</span>/year</h1>
                    <p className='text-[#1C1A17] text-lg py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className=' flex flex-col items-center'>
                        <div className='flex gap-1 items-center pb-1'>
                            <TiTick size={30} color='#FDB135'/>
                            <p className='font-semibold text-lg'>Lorem ipsum dolor amet.</p>
                        </div>
                        <div className='flex gap-1 items-center pb-1'>
                            <TiTick size={30} color='#FDB135'/>
                            <p className='font-semibold text-lg'>Lorem ipsum dolor.</p>
                        </div>
                    </div>
                    <div className='pt-10'>
                        <button 
                            className='text-[#FC5623] bg-white py-4 w-full border-2 border-[#FC5623] rounded font-semibold hover:bg-[#FC5623] hover:text-[white] hover:font-bold'>
                            Purchase Plan
                        </button>
                    </div>
                </div>
                <div className=' p-5 flex flex-col text-center max-w-[400px] border border-[#EEF1F3]'>
                    <div className='pb-10'>
                        <p className='py-3 w-full rounded font-semibold bg-[#EEF1F3]'>Most Popular Plan</p>
                    </div>
                    <h1 className='font-semibold text-lg'>Premium</h1>
                    <h1 className=' font-medium py-2'><span className='font-bold text-4xl'>$399</span>/year</h1>
                    <p className='text-[#1C1A17] text-lg py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className=' flex flex-col items-center'>
                        <div className='flex gap-1 items-center pb-1'>
                            <TiTick size={30} color='#FDB135'/>
                            <p className='font-semibold text-lg'>Lorem ipsum dolor amet.</p>
                        </div>
                        <div className='flex gap-1 items-center pb-1'>
                            <TiTick size={30} color='#FDB135'/>
                            <p className='font-semibold text-lg'>Lorem ipsum dolor.</p>
                        </div>
                    </div>
                    <div className='pt-10'>
                        <button 
                            className='text-[#FC5623] bg-white py-4 w-full border-2 border-[#FC5623] rounded font-semibold hover:bg-[#FC5623] hover:text-[white] hover:font-bold'>
                            Purchase Plan
                        </button>
                    </div>
                </div>
                <div className=' p-5 flex flex-col text-center max-w-[400px] border border-[#EEF1F3]'>
                    <h1 className='font-semibold text-lg'>Exclusive</h1>
                    <h1 className=' font-medium py-2'><span className='font-bold text-4xl'>$999</span>/year</h1>
                    <p className='text-[#1C1A17] text-lg py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className=' flex flex-col items-center'>
                        <div className='flex gap-1 items-center pb-1'>
                            <TiTick size={30} color='#FDB135'/>
                            <p className='font-semibold text-lg'>Lorem ipsum dolor amet.</p>
                        </div>
                        <div className='flex gap-1 items-center pb-1'>
                            <TiTick size={30} color='#FDB135'/>
                            <p className='font-semibold text-lg'>Lorem ipsum dolor.</p>
                        </div>
                    </div>
                    <div className='pt-10'>
                        <button 
                            className='text-[#FC5623] bg-white py-4 w-full border-2 border-[#FC5623] rounded font-semibold hover:bg-[#FC5623] hover:text-[white] hover:font-bold'>
                            Purchase Plan
                        </button>
                    </div>
                </div>
            </div>
            <div className='p-6 md:p-12 lg:p-20 max-w-[1300px] mx-auto  block md:flex justify-between bg-[#211C15]'>
                <div className='text-center md:text-justify'>
                    <h1 className='font-bold text-lg text-white md:text-2xl lg:text-3xl'>Subscribe to the Block</h1>
                    <h1 className='font-bold text-lg text-white md:text-2xl lg:text-3xl'>weekly newsletter</h1>
                </div>
                <div className='flex gap-2 justify-center items-center pt-7 lg:pt-0'>
                    <input type="email" className='py-2 rounded px-2 bg-[#2C2925] w-full md:w-fit' placeholder='Email'/>
                    <div>
                        <button className='bg-[#FC5623] text-white hover:bg-gray-200 hover:text-[#FC5623] py-2 px-3 rounded font-semibold focus:outline-none'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HtSubscription