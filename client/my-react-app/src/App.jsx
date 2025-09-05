import { useState } from 'react'
import Home from './Pages/Home'
import Services from './Pages/Services.jsx'
import ContactUs from './Pages/ContactUs.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route index element ={<Home/>}/>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/services" element = {<Services/>}/>
        <Route path = "/contactus" element = {<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  
      
  )
};

export default App
