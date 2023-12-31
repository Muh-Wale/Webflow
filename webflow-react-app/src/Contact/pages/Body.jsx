import React from 'react'
import img15 from '/src/Pic/15.png'
import img18 from '/src/Pic/18.png'
import img19 from '/src/Pic/19.png'
import img20 from '/src/Pic/20.png'


const Body = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24 bg-white'>
            <div className='py-6 md:py-20 max-w-[1300px] mx-auto block lg:grid grid-cols-5 gap-8'>
                <div className='col-span-2'>
                    <div className="relative">
                        <img src={img15} alt="Picture" className='rounded'/>
                        <div className="p-3 rounded bg-white absolute bottom-7 left-7">
                            <p className="font-semibold">Customer Service</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center col-span-3 pt-14 lg:pt-0'>
                    <div>
                        <h1 className='font-semibold text-2xl md:text-3xl lg:text-5xl'>Send Us a Message</h1>
                    </div>
                    <div className='block md:flex gap-5 py-7'>
                        <div className='w-full'>
                            <input type="text" name="" id=""  className='border border-[#E5E5E5] focus:outline-gray-300 p-4 w-full rounded' placeholder='Name'/>
                        </div>
                        <div className='w-full pt-5 md:pt-0'>
                            <input type="email" name="" id=""  className='border border-[#E5E5E5] focus:outline-gray-300 p-4 w-full rounded' placeholder='Email'/>
                        </div>
                    </div>
                    <div className='w-full'>
                        <textarea id="message" name="message" rows="4" cols="50" className='border p-5 border-[#E5E5E5] focus:outline-gray-300 w-full rounded h-[150px]' placeholder='Message'></textarea>
                    </div>
                    <div className='pt-5'>
                        <button className='text-white bg-[#FC5623] py-2 px-4 md:py-3 md:px-6 rounded hover:text-[#E5E5E5] font-semibold '>Our Services</button>
                    </div>
                </div>
            </div>
            <div className='py-5 mb-10 md:mb-0 md:py-16 max-w-[1300px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 lg:gap-14'>
                    <div className=' flex flex-col justify-center md:block pt-6 md:pt-0 max-w-[450px] md:max-w-fit'>
                        <div className=''>
                            <img src={img18} alt=""/>
                        </div>
                        <div className='py-3'><h1 className='font-semibold text-xl'>Call Us</h1></div>
                        <div><p className='leading-snug text-[#1C1A17] md:text-left'>We’re available 24/7 for your work inquiries on the following nr: <br /> (420) 428-8000</p></div>
                    </div>
                    <div className=' flex flex-col justify-center md:block pt-6 md:pt-0 max-w-[450px] md:max-w-fit'>
                        <div className=''>
                            <img src={img19} alt=""/>
                        </div>
                        <div className='py-3'><h1 className='font-semibold text-xl'>Visit Us</h1></div>
                        <div><p className='leading-snug text-[#1C1A17] md:text-left'>Visit us in our offices at: 1 First American Way, Santa Ana, CA, 92707</p></div>
                    </div>
                    <div className=' flex flex-col justify-center md:block pt-6 md:pt-0 max-w-[450px] md:max-w-fit'>
                        <div className=''>
                            <img src={img20} alt=""/>
                        </div>
                        <div className='py-3'><h1 className='font-semibold text-xl'>Contact Us</h1></div>
                        <div><p className='leading-snug text-[#1C1A17] md:text-left'>Alternatively, you can send us email to info@startui.wf and we’ll answer you shortly.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body