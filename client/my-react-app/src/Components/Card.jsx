import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <h2 className='cardText'>{props.details}</h2>
      </div>
  )
}

export default Card