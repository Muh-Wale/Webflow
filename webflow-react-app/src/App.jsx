import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { BrowserRouter, Routes, Poute } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from './Home/Home'
import HomeTwo from './Home.V2/HomeTwo'
import About from './About/About'
import Blog from './Blog/Blog'
import Services from './Services/Services'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import BlogSingle from './Blog Single/BlogSingle'
import ProjectSingle from './Project Single/ProjectSingle'
import ServiceSingle from './Service Single/ServiceSingle'
import Shop from './Shop/Shop'
import ShopCategories from './Shop Categories/ShopCategories'
import ShopSingle from './Shop Single/ShopSingle'
import Checkout from './Checkout/Checkout'
import CheckoutPaypal from './Checkout Paypal/CheckoutPaypal'
import OrderConfirmation from './Order Confirmation/OrderConfirmation'
import Error from './Error/Error'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/hometwo" element={<HomeTwo/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blogsingle" element={<BlogSingle/>}/>
          <Route path="/ProjectSingle" element={<ProjectSingle/>}/>
          <Route path="/servicesingle" element={<ServiceSingle/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/shopcategories" element={<ShopCategories/>}/>
          <Route path="/shopsingle" element={<ShopSingle/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/checkoutpaypal" element={<CheckoutPaypal/>}/>
          <Route path="/orderconfirmation" element={<OrderConfirmation/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
