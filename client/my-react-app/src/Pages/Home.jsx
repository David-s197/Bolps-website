import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import CardHolder from '../Components/CardHolder'
import Partners from '../Components/Partners'
import SvPrev from '../Components/SvPrev'

const Home = () => {
  return (
    <div>
         <Header />
      <Hero/>
      <div className='headings'>
          <h2>About Us</h2>
          </div>
      <div className='h-[600px] bg-orange-50'>
        <CardHolder/>
      </div>
      <SvPrev/>
      <div className='headings'>
        <h2>Meet our Team</h2>
      </div>
      <div className=' flex-col flex-center bg-gradient-to-b from-gray-300 to-gray-500'><Carousel/></div>
    <Partners />
    <Footer />
    </div>
  )
}

export default Home