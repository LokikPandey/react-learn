import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';

const Services = () => {
  return (
    <div className='services'>
        <Carousel
        infiniteLoop={true} autoPlay={true} showStatus={false} showArrows={false} interval={2000}
        showThumbs={false} >
            <div>
                <img src={img1} alt='Item1'/>
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt='Item1'/>
                <p className='legend'>Cloud Computing</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services