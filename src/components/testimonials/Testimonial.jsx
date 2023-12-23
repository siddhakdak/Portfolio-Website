import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/coursera.png";
import AVTR2 from "../../assets/aws.png";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Coursera',
    review: 'Build a Node Server backend with Express',
  },
  {
    avatar: AVTR2,
    name: 'AWS',
    review: 'AWS Certifications',
  },
  {
    avatar: AVTR1,
    name: 'Coursera',
    review: 'Foundations of User Experience (UX) Design',
  },
  {
    avatar: AVTR1,
    name: 'Coursera',
    review: 'Software Engineering: Software Design and Project Management',
  }
  
]

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h2>Certifications</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>

        {
        data.map(({avatar,name,review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img className="img" src={avatar} alt="" />
            
          </div>
          <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}.</small>
        </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonial;
