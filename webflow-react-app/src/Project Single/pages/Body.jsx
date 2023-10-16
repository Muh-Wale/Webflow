import React from 'react'

const Body = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24 '>
            <div className='max-w-[1300px] mx-auto py-20'>
                <div className='block md:grid grid-cols-2 gap-5'>
                    <div className=''>
                        <div>
                            <img src="/src/Pic/32.png" alt=""/>
                        </div>
                        <div className='pt-0 md:py-8 hidden md:block'>
                            <img src="/src/Pic/32.png" alt=""/>
                        </div>
                        <div className=' hidden md:block lg:hidden'>
                            <img src="/src/Pic/32.png" alt=""/>
                        </div>
                    </div>
                    <div className='text-[#1C1A17] flex flex-col justify-center pt-10 md:pt-0'>
                        <div>
                            <h1 className='text-4xl font-semibold'>Construction Project</h1>
                            <p className=' text-sm text-[#FC5623]'>Construction</p>
                        </div>
                        <div className=' text-[#1C1A17] py-4 md:py-7 text-sm'>
                            <p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex.Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex.Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo.</p>
                            <p className='pt-3'>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex.Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex.Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex.</p>
                        </div>
                        <div className='pt-3 md:pt-5'>
                            <div>
                                <p className='font-semibold text-xl'>Created</p>
                                <span className='text-sm'>January 2020</span>
                            </div>
                            <div className='py-3'>
                                <p className='font-semibold text-xl'>Client</p>
                                <span className='text-sm'>Webflow Inc.</span>
                            </div>
                            <div>
                                <p className='font-semibold text-xl'>Location</p>
                                <span className='text-sm'>Santa Ana, California</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1300px] mx-auto py-14'>
                <div>
                    <h1 className='text-3xl font-semibold'>More Projects</h1> 
                </div>
                <div className='py-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-12'>
                    <div className='hover:scale-105 duration-300'>
                        <div className="relative">
                            <img src="/src/Pic/8.png" alt="Picture" className="w-full" />
                            <div className="px-1 md:px-3 py-4 md:py-6 rounded bg-white absolute bottom-7 left-[8%] z-10 text-center w-5/6 hover:scale-105 duration-300">
                                <p className="font-semibold">Hotel Construction</p>
                                <span className='text-[#FC5623] font-medium'>Construction</span>
                            </div>
                        </div>
                    </div>
                    <div className='hover:scale-105 duration-300'>
                        <div className="relative">
                            <img src="/src/Pic/9.png" alt="Picture" className="w-full" />
                            <div className="px-1 md:px-3 py-4 md:py-6 rounded bg-white absolute bottom-7 left-[8%] z-10 text-center w-5/6 hover:scale-105 duration-300">
                                <p className="font-semibold">Hotel Construction</p>
                                <span className='text-[#FC5623] font-medium'>Construction</span>
                            </div>
                        </div>
                    </div>
                    <div className='hover:scale-105 duration-300'>
                        <div className="relative">
                            <img src="/src/Pic/10.png" alt="Picture" className="w-full" />
                            <div className="px-1 md:px-3 py-4 md:py-6 rounded bg-white absolute bottom-7 left-[8%] z-10 text-center w-5/6 hover:scale-105 duration-300">
                                <p className="font-semibold">Hotel Construction</p>
                                <span className='text-[#FC5623] font-medium'>Construction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body