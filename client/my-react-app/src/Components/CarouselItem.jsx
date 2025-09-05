import React from 'react'

const CarouselItem = ({item}) => {
  return (

    <div className='carousel-item'>
      <div></div>
      <img className='carousel-img' src={item.imgURL} alt="" />
      <div className='carousel-des'>
      <h1 className='carousel-name'>{item.name}</h1>
      <h2 className='carousel-title'>{item.title}</h2>
      <div className='carousel-details'>{item.details}</div>
   </div>
    </div>
  )
}

export default CarouselItem