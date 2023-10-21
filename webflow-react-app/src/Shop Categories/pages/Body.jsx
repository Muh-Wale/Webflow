
import { BsArrowRight } from 'react-icons/bs'

const Body = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24'>
            <div className='max-w-[1300px] py-10 md:py-20 mx-auto'>
                <div className='block md:flex justify-between'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Pliers</h1>
                    </div>
                    <div>
                        <ul className=' flex md:justify-between md:items-center gap-5 flex-wrap md:gap-5 font-medium mt-5 md:mt-0'>
                            <li><a href="" className=' hover:text-[#FC5623]'>All Products</a></li>
                            <li><a href="" className=' hover:text-[#FC5623]'>Pliers</a></li>
                            <li><a href="" className=' hover:text-[#FC5623]'>Drilling Tools</a></li>
                            <li><a href="" className=' hover:text-[#FC5623]'>Electronics</a></li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-1 mx-auto md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-5 lg:gap-10'>
                    <div>
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
                    <div>
                        <div className="relative">
                            <img src="/src/Pic/4.png" alt="Picture" className="w-full" />
                            <div className="px-3 py-1 rounded bg-white absolute top-2 right-3 z-10">
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
                            <img src="/src/Pic/5.png" alt="Picture" className="w-full" />
                            <div className="px-3 py-1 rounded bg-white absolute top-2 right-2 z-10">
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
                    <div>
                        <div className="">
                            <img src="/src/Pic/38.png" alt="Picture" className="w-full" />
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src="/src/Pic/42.png" alt="Picture" className="w-full" />
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src="/src/Pic/39.png" alt="Picture" className="w-full" />
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src="/src/Pic/40.png" alt="Picture" className="w-full" />
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body