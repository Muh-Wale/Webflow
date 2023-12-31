import React from 'react'
import Union from '/src/Pic/Union.png'

const Sponsors = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-5 md:px-14 lg:px-24'>
            <div className='py-8 max-w-[1300px] mx-auto grid grid-cols-3 md:grid-cols-5 gap-5'>
                <div><img src={Union} alt="" /></div>
                <div><img src={Union} alt="" /></div>
                <div><img src={Union} alt="" /></div>
                <div><img src={Union} alt="" /></div>
                <div><img src={Union} alt="" /></div>
            </div>
        </div>
    )
}

export default Sponsors