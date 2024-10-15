import './App.css'
import Home from './components/Home/Home'
import Service from './components/Service/Service'
import Aboutus from './components/About/Aboutus'
import Contactus from './components/Contact/Contactus'
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="service" element={<Service/>} />
        <Route path="aboutus" element={<Aboutus/>} />
        <Route path="contactus" element={<Contactus/>} />
      </Routes>
    </>
  )
}

export default App
