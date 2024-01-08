import React from 'react'
import { Link } from 'react-router-dom'
import eight from '/src/Pic/8.png'
import nine from '/src/Pic/9.png'
import ten from '/src/Pic/10.png'

const HProject = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24'>
            <div className='max-w-[1300px] mx-auto py-14'>
                <h1 className='text-3xl font-semibold'>Latest Projects</h1>
                <div className='py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12'>
                    <div className='hover:scale-105 duration-300'>
                        <div className="relative">
                            <img src={eight} alt="Picture" className="w-full" />
                            <Link to="/projectsingle" className="px-3 py-4 md:py-6 rounded bg-white absolute bottom-7 left-[8%] z-10 text-center w-5/6 hover:scale-105 duration-300">
                                <p className="font-semibold">Hotel Construction</p>
                                <span className='text-[#FC5623] font-medium'>Construction</span>
                            </Link> 
                        </div>
                    </div>
                    <div className='hover:scale-105 duration-300'>
                        <div className="relative">
                            <img src={nine} alt="Picture" className="w-full" />
                            <Link to="/projectsingle" className="px-3 py-4 md:py-6 rounded bg-white absolute bottom-7 left-[8%] z-10 text-center w-5/6 hover:scale-105 duration-300">
                                <p className="font-semibold">Hotel Construction</p>
                                <span className='text-[#FC5623] font-medium'>Construction</span>
                            </Link> 
                        </div>
                    </div>
                    <div className='hover:scale-105 duration-300'>
                        <div className="relative">
                            <img src={ten} alt="Picture" className="w-full" />
                            <Link to="/projectsingle" className="px-3 py-4 md:py-6 rounded bg-white absolute bottom-7 left-[8%] z-10 text-center w-5/6 hover:scale-105 duration-300">
                                <p className="font-semibold">Hotel Construction</p>
                                <span className='text-[#FC5623] font-medium'>Construction</span>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HProject