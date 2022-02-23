import React from "react"
import "./testimonial.scss"
import { testimonialsData } from './../../data/TestimonialsData'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    return (
        <section id="testimonial">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {testimonialsData.map(({id,name,image,review}) => {
                    return(
                        <SwiperSlide key={id} className="testimonial">
                            <div className="client__avatar">
                                <img src={image} alt={name} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">
                                {review}
                            </small>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default Testimonial
