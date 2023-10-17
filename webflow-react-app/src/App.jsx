import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { BrowserRouter, Routes, Poute } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from './Home/Home'
import HomeTwo from './Home.V2/HomeTwo'
import About from './About/About'
import Blog from './Blog/Blog'
import Services from '.Services/Services'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'


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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
