import React from 'react'
import Card from './Card'
import details from './details'

function createCard(details){
return<Card key ={details.id} details = {details.dets} />
}

const CardHolder = () => {

    
  return (
  
    <div className='cardholder'>
       {details.map(createCard)}
        
        </div>
  )
}

export default CardHolder