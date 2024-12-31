import React from 'react'
import { Route, Routes, } from "react-router-dom";
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import Navber from './components/Navber';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import My_Profile from './pages/My_Profile';
import Appointment from './pages/Appointment';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my_profile' element={<My_Profile />} />
        <Route path='/appointment' element={<Appointment />} />
        {/* <Route path='/login' element={<Login />} /> */}
      </Routes>
    </div>
  )
}

export default App