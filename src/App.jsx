
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Arti from './components/Arti/Arti'
import Donation from './components/Donation/Donation'
import Hero from './components/hero/Hero'

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/#about" element={<Hero/>}></Route>
          <Route path="#projects" element={<Home/>}></Route>
          <Route path="#contact" element={<Home/>}></Route>

          <Route path="/Arti" element={<Arti />}></Route>
          <Route path="/donation" element={<Donation />}></Route>


      </Routes>
  )
}

export default App
