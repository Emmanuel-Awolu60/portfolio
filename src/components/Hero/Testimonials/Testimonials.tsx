// import React from 'react'
import "./Testimonials.css"
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


const Testimonials = () => {
    return (
        <>
            <div className="mt-40 w-4/5 m-auto">
                <div className="flex justify-center items-center flex-col ">
                    <h3 className="title-small">Testimonials</h3>
                    <h1 className="text-4xl leading-9">What my clients think about Me   </h1>
                </div>

                <div className="mt-20 w-3/4 m-auto">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </>
    )
}

export default Testimonials