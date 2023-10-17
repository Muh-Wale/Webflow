import React from 'react'
import HtHead from './pages/HtHead'
import HtService from './pages/HtService'
import HtBody from './pages/HtBody'
import HtTemplate from './pages/HtTemplate'
import HtSubscription from './pages/HtSubscription'
import HtProject from './pages/HtProject'
import Footer from '../Footer/Footer'

const Htwo = () => {
    return (
        <div>
            <HtHead/>
            <HtService/>
            <HtBody/>
            <HtTemplate/>
            <HtSubscription/>
            <HtProject/>
            <Footer/>
        </div>
    )
}

export default Htwo