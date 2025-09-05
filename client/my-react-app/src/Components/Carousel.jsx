import React, { useState } from 'react'
import CarouselItem from './CarouselItem'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0) 
  const items = [
    { id: "1",
      imgURL: "./Segun.jpeg",
      name: "Segun Adekoya",
      title: "MD/CRO",
      details: "Bsc., Mphil, University of Stellenbosch, Cape Town. Project Management Professional (PMP) from Project Management Institute(PMI USA). A professional with over 21 years diverse industrial experience from development finance, systems integration of IT, Security and Safety systems, project management, training and consulting. He has consistently led teams to plan, design and implement major projects in Nigeria, Ghana and South Africa.",


    },
    { id: "2",
      imgURL: "./Richard.jpeg",
      name: "Richard Kwadwo Asante",
      title: "Senior Electronics/Electrical Engineer",
      details: "BEng Electrical/Electronic, Advanced Tech. Diploma Telecoms Systems, Diploma Computer Engineering, BSS Technician/Rigger Certificate. Richard provides leadership and management support for project implementation, electronic security systems installation, integration and configuration, troubleshooting, maintenance and technical services. Richard has provided leadership on various projects in Ghana.",
        

    },
  { id:"3",
    imgURL: "./Prosper.jpeg",
    name: "Prosper Amevor",
    title: "Support Engineer",
    details: "Prosper Amevor is a graduate of Accra Polytechnic with vast experience in Installation, maintenance and servicing of Electronic security system like Access control, CCTV (Camera,NVR) and turnstiles.",
          

    },
  { id:"4",  
    imgURL: "./Abraham.jpeg",
    name: "Abraham Areo",
    title: "Management Executive",
    details: "BSc., Information Technology, Management Executive. A young and dynamic professional with fast rising profile in the ELV industry. Abraham had provided project management support in the areas of planning, customer relations, technical services and general project administration on a no of high profile projects across Ghana.",

    }
  
  ]
  
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    }else if (newIndex >= items.length ) {
      newIndex = items.length -1
    }
    setActiveIndex(newIndex);
  };

  
    return (
    <div className='carousel bg-white'>
        <div className='inner'
        style={{transform:`translate(-${activeIndex * 100}%)`}}>
          {items.map((item) => {
            return <CarouselItem key={item.id} item = {item} />
          })}
        
        </div>
<div className='carousel-button'> 
<button onClick ={()=> {
  updateIndex(activeIndex - 1);
}} 
className='arrow-buttons'>
 <span className="material-symbols-outlined">
arrow_back_ios
</span>
</button>
<div className='indicators'>
  {items.map((item,index)=> {
    return(
      <button onClick={() => {
        updateIndex(index)
      }} 
      className='indicator-button'>
  <span className = {`material-symbols-outlined ${index===activeIndex? "indicator-symbol-active": "indicator-symbol"}`}>
radio_button_checked
</span>
</button>
    )
  })}
  
</div>
<button onClick ={()=> {
  updateIndex(activeIndex + 1);
}} 
className='arrow-buttons'>
  <span className ="material-symbols-outlined">
arrow_forward_ios
</span>
</button>
</div>

    </div>
  )
}

export default Carousel