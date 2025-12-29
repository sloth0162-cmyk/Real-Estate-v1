import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Footer from './component/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
  
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/About" element = {<About/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
