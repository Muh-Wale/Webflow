import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import img4 from '/src/Pic/4.png'
import img3 from '/src/Pic/3.png'
import img5 from '/src/Pic/5.png'
import img41 from '/src/Pic/41.png'
import img38 from '/src/Pic/38.png'
import img42 from '/src/Pic/42.png'
import img39 from '/src/Pic/39.png'
import img40 from '/src/Pic/40.png'

const Body = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24'>
            <div className='max-w-[1300px] py-10 md:py-20 mx-auto'>
                <div className='block md:flex justify-between py-5'>
                    <div>
                        <h1 className='text-3xl font-semibold'>All Products</h1>
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
                            <img src={img4} alt="Picture" className="w-full" />
                            {/* {<div className="px-3 py-1 rounded bg-white absolute top-2 right-2 z-10">
                                <p className="">New</p>
                            </div>} */}
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={img3} alt="Picture" className="w-full" />
                            <div className="px-3 py-1 rounded bg-white absolute top-2 right-3 z-10">
                                <p className="">New</p>
                            </div>
                            <div className="px-2 py-1 md:px-5 md:py-3 rounded bg-[#FC5623] absolute bottom-0 left-5 z-10 hover:scale-105 duration-200">
                                <div className='flex gap-2 items-center text-white'>
                                    <Link to="/shopsingle" className='text-sm'>Details</Link>
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
                            <img src={img5} alt="Picture" className="w-full" />
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
                            <img src={img41} alt="Picture" className="w-full" />
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
                            <img src={img38} alt="Picture" className="w-full" />
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src={img42} alt="Picture" className="w-full" />
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src={img39} alt="Picture" className="w-full" />
                        </div>
                        <div className='font-semibold py-2'>
                            <p>Power hammer tool</p>
                            <p>$99 USD</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src={img40} alt="Picture" className="w-full" />
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