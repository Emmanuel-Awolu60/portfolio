// import React from 'react';
import "./Services.css";
import { TbPencilCheck } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

// Import the reusable SlideContent component
import SlideContent from './SlideContent';

const Services: React.FC = () => {
    const handleButtonClick = (step: string) => {
        alert(`Button clicked for step ${step}!`);
    };

    return (
        <section className="mt-10">
            <div className="mt-10 w-11/12 m-0 mx-auto sm:block">
                <div className="justify-item-center">
                    <h3 className="title-small">Service</h3>
                    <h1>What I do for you</h1>
                </div>

                <div className="top-top mt-12">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            // For screens larger than 1024px
                            1024: {
                                slidesPerView: 3,
                            },
                            // For screens between 640px and 1024px
                            640: {
                                slidesPerView: 2,
                            },
                            // For screens smaller than 640px
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <SlideContent
                                icon={<TbPencilCheck />}
                                step="01"
                                title="Tech Writer"
                                description="Crafting engaging, SEO-optimized content to simplify complex tech concepts."
                                buttonText="Read More"
                                onButtonClick={() => handleButtonClick("01")}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SlideContent
                                icon={<FaLaptopCode />}
                                step="02"
                                title="Frontend Development"
                                description="Building interactive and responsive user interfaces using modern web technologies."
                                buttonText="Explore"
                                onButtonClick={() => handleButtonClick("02")}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SlideContent
                                icon={<TbPencilCheck />}
                                step="03"
                                title="Backend Development"
                                description="Building robust, scalable server-side solutions to power seamless user experiences."
                                buttonText="Contact Me"
                                onButtonClick={() => handleButtonClick("03")}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SlideContent
                                icon={<TbDeviceAnalytics />}
                                step="04"
                                title="Research & Analysis"
                                description="Driving insights through data research and analysis for informed decisions."
                                buttonText="Read More"
                                onButtonClick={() => handleButtonClick("01")}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SlideContent
                                icon={<TbPencilCheck />}
                                step="02"
                                title="Frontend Development"
                                description="Building interactive and responsive user interfaces using modern web technologies."
                                buttonText="Explore"
                                onButtonClick={() => handleButtonClick("02")}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SlideContent
                                icon={<TbPencilCheck />}
                                step="03"
                                title="Consulting"
                                description="Providing tailored solutions to optimize your business processes and technology stack."
                                buttonText="Contact Me"
                                onButtonClick={() => handleButtonClick("03")}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Services;
