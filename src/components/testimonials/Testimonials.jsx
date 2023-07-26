import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar1.jpg';
import AVTR3 from '../../assets/avatar1.jpg';
import AVTR4 from '../../assets/avatar1.jpg';


import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data =[
{
  avatar:AVTR1,
  name:'Tina snow',
  review:'Lorem Ritik ipsum dolor, sit amet consectetur adipisicing elit. Sed quia possimus facere soluta nesciunt autem. Ad, possimus quos? Quae aperiam nesciunt quasi eligendi?'
},

{
  avatar:AVTR2,
  name:'Nana Ama Mcwales',
  review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quia possimus facere soluta nesciunt autem. Ad, possimus quos? Quae aperiam nesciunt quasi eligendi?'
},

{
  avatar:AVTR3,
  name:'Shatta Wale',
  review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quia possimus facere soluta nesciunt autem. Ad, possimus quos? Quae aperiam nesciunt quasi eligendi?'
},

{
  avatar:AVTR4,
  name:'Kwame Despite',
  review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quia possimus facere soluta nesciunt autem. Ad, possimus quos? Quae aperiam nesciunt quasi eligendi?'
},
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
      
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       
       onSlideChange={() => console.log('slide change')}>
      
       {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar} />
          </div>
          <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review} </small>
        </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  ) 
}

export default Testimonials