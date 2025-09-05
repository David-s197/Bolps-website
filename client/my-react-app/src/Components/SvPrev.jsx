import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Preview from './Preview';


const Prvimg = [
    {
        id: "1",
        imgURL: "./panasonic-ip-camera.jpg" 
    },
    {
        id: "2",
        imgURL: "./cctv.webp"
    },
    {
        id: "3",
        imgURL: "./extinguisher.webp"
    },
    {
        id: "4",
        imgURL: "./cctv1.webp"
    },
    {
        id: "5",
        imgURL: "./fire-alarm-controlpanel.webp"
    },
    {
        id: "6",
        imgURL: "./fire-alarm-systems.jpeg"
    }

]


const SvPrev = () => {
    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};
  return (
    <div>
<Carousel
  responsive={responsive}
>
  {Prvimg.map((img) => {
    return <Preview key={img.id} img = {img} />
  })}
</Carousel>
</div>
  )
}

export default SvPrev