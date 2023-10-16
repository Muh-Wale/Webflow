import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Body = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24'>
            <div className='max-w-[1300px] py-10 md:py-20 mx-auto '>
                <div className=' block lg:grid grid-cols-7 gap-5'>
                    <div className=' col-span-3 pr-28 md:pr-48 lg:pr-14'>
                        <div className="relative">
                            <img src="/src/Pic/3.png" alt="Picture" className="w-full" />
                            <div className="px-3 py-1 rounded bg-white absolute top-2 right-2 z-10">
                                <p className="">New</p>
                            </div>
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                    <div className='col-span-4 flex flex-col justify-center mt-10 lg:mt-0'>
                        <div>
                            <h1 className=' text-3xl font-semibold'>Voltage Tester</h1>
                        </div>
                        <div className='mt-8'>
                            <span className='font-medium'>$99.00 USD</span>
                            <div className=' pt-6 pb-12 text-[#1C1A17]'>
                                <p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra.</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <div className='font-medium'>
                                QTY:
                            </div>
                            <div>
                                <input type="text" className='border border-gray-300 focus:outline-gray-500 rounded py-[10px] px-3 w-20'/>
                            </div>
                            <div>
                                <button type="button" className='text-white bg-[#FC5623] hover:text-[#1C1A17] py-3 px-9 rounded font-medium'>Add To Cart</button>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <button className='text-white bg-[#FC5623] py-4 hover:text-[#1C1A17] rounded w-full font-medium'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='mt-14'>
                    <div>
                        <h1 className='font-semibold texx-3xl'>More Products For You</h1>
                    </div>
                    <div className='pt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-12'>
                        <div>
                            <div className="">
                                <img src="/src/Pic/4.png" alt="Picture" className="w-full" />
                                <div className="px-3 py-1 rounded bg-white absolute top-2 right-3 z-10">
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
                                <img src="/src/Pic/5.png" alt="Picture" className="w-full" />
                                <div className="px-3 py-1 rounded bg-white absolute top-2 right-2 z-10">
                                    <p className="">New</p>
                                </div>
                                <div className="px-2 py-1 md:px-5 md:py-3 rounded bg-[#FC5623] absolute bottom-0 left-5 z-10 hover:scale-105 duration-200">
                                    <div className='flex gap-2 items-center text-white'>
                                        <a href="/" className='text-sm'>Details</a>
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
                                <img src="/src/Pic/41.png" alt="Picture" className="w-full" />
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
        </div>
    )
}

export default Body