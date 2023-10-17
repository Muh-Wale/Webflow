import React from 'react'

const Body = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-16'>
            <div className='py-20 max-w-[1300px] mx-auto'>
                <div className='block lg:grid grid-cols-11 gap-5'>
                    <div className=' col-span-8'>
                        <div className='border-2 border-[#EEF1F3] focus:outline-[#EEF1F3] rounded'>
                            <div className=' font-medium p-3 md:p-5 border-b-2 border-[#EEF1F3]'>
                                <p>Customer Information</p>
                            </div>
                            <div className=' font-medium p-3 md:p-5'>
                                <div className='grid grid-cols-2'>
                                    <span>Email</span>
                                    <div className=''>
                                        <p>Info@Blockplate.com</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 pt-2'>
                                    <p>Shipping Adress</p>
                                    <div>
                                        <p>
                                        John Richarlisson<br />
                                        1 First American Way<br />
                                        Santa Ana<br />
                                        CA, 92707<br />
                                        USA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-2 mt-3 border-[#EEF1F3] focus:outline-[#EEF1F3] rounded'>
                            <div className=' font-medium p-3 md:p-5 border-b-2 border-[#EEF1F3]'>
                                <p>Shipping Method</p>
                            </div>
                            <div className=' font-medium p-3 md:p-5 flex justify-between'>
                                <div className=''>
                                    <span>Standard</span>
                                </div>
                                <p>$5.00 USD</p>
                            </div>
                        </div>
                        <div className='border-2 mt-3 border-[#EEF1F3] focus:outline-[#EEF1F3] rounded'>
                            <div className=' font-medium p-3 md:p-5 border-b-2 border-[#EEF1F3]'>
                                <p>Payment Information</p>
                            </div>
                            <div className=' font-medium p-3 md:p-5'>
                                <div className='grid grid-cols-2'>
                                    <span>Payment Info</span>
                                    <div className=''>
                                        <p>VISA 4242<br />01/23</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 pt-2'>
                                    <p>Shipping Adress</p>
                                    <div>
                                        <p>
                                        John Richarlisson<br />
                                        1 First American Way<br />
                                        Santa Ana<br />
                                        CA, 92707<br />
                                        USA
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='mt-3 border-2 border-[#EEF1F3] focus:outline-[#EEF1F3] rounded'>
                            <div className=' font-medium p-3 md:p-5 border-b-2 border-[#EEF1F3]'>
                                <p>Items In Order</p>
                            </div>
                            <div className='p-3 md:p-5 font-medium border-b-2 border-[#EEF1F3]'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-3 md:p-5 items-center'>
                                        <div>
                                            <img src="/src/Pic/44.png" alt="" />
                                        </div>
                                        <div>
                                            <p>Voltage Tester</p>
                                            <p className='mt-1'>Quantity: <span>1</span></p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>$99 USD</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 md:p-5 font-medium'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-3 md:p-5 items-center'>
                                        <div>
                                            <img src="/src/Pic/45.png" alt="" />
                                        </div>
                                        <div>
                                            <p>Digital Multimeter</p>
                                            <p className='mt-1'>Quantity: <span>1</span></p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>$99 USD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 border-[#EEF1F3] mt-8 lg:mt-0 focus:outline-[#EEF1F3] rounded col-span-3 h-fit'>
                        <div className=' flex justify-between font-medium p-3 md:p-5 border-b-2 border-[#EEF1F3]'>
                            <p>Order Summary</p>
                        </div>
                        <div className=' flex justify-between font-medium p-3 md:p-5'>
                            <p>Subtotal</p>
                            <p>$124.00 USD</p>
                        </div>
                        <div className=' flex justify-between font-medium px-3 md:px-5 pb-5'>
                            <p>Total</p>
                            <p>$124.00 USD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body