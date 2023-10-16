import React from 'react'

const HTeam = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24'>
            <div className='py-20 px-7'>
                <div className=' text-center'>
                    <div className=' flex justify-center'>
                        <img src="/src/Pic/14.png" alt="#" className=' rounded-full'/>
                    </div>
                    <div className='py-10'>
                        <p className='font font-semibold text-lg leading-normal md:leading-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, iure odio. <span className='hidden md:block'><br /></span>Ullam animi aspernatur minima impedit? Ipsa totam ratione tempora <span className='hidden md:block'><br /></span>sed, impedit ipsam harum! Enim?</p>
                    </div>
                    <div>
                        <p className='font-medium'>Todd Kreisher</p>
                        <span className='text-gray-500 text-xs'>Gym Owner</span>
                    </div>
                </div>
            </div>
            <div className='max-w-[1300px] mx-auto py-14'>
                <h1 className='text-3xl font-semibold'>Our Members</h1>
                <div className='py-16 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 lg:gap-12'>
                    <div className='grid place-content-center md:block px-3 md:px-0'>
                        <div className="relative">
                            <img src="/src/Pic/15.png" alt="Picture" />
                            <div className="p-3 rounded bg-white absolute bottom-7 left-7 z-10">
                                <p className="font-semibold">CEO</p>
                            </div>
                        </div>
                        <p className='font-semibold py-2 text-lg'>Alberto Infantino</p>
                    </div>
                    <div className='grid place-content-center md:block px-3 md:px-0'>
                        <div className='relative'>
                            <img src="/src/Pic/15.png" alt="Picture"/>
                            <div className="p-3 rounded bg-white absolute bottom-7 left-7 z-10">
                                <p className="font-semibold">Project Manager</p>
                            </div>
                        </div>
                        <p className='font-semibold py-2 text-lg'>Jess Musk</p>
                    </div>
                    <div className='grid place-content-center md:block px-3 md:px-0'>
                        <div className='relative'>
                            <img src="/src/Pic/15.png" alt="Picture"/>
                            <div className="p-3 rounded bg-white absolute bottom-7 left-7 z-10">
                                <p className="font-semibold">Architect</p>
                            </div>
                        </div>
                        <p className='font-semibold py-2 text-lg'>Tomaas Hirschi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HTeam