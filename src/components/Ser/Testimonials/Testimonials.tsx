import "./Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Pagination } from 'swiper';


const Testimonials = () => {
    return (
        <>
            <div className="mt-40 w-11/12 mx-auto">
                <div className="flex justify-center items-center flex-col ">
                    <h3 className="title-small">Testimonials</h3>
                    <h1 className="text-4xl leading-9">What my clients think about Me   </h1>
                </div>

                <div className="mt-20 w-3/4 m-auto">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <blockquote>
                                <q>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque possimus ullam pariatur inventore corporis sed dolorum optio aliquid placeat dolore fuga, a officiis neque odio est reiciendis nostrum corrupti!!"
                                </q>
                            </blockquote>

                        </SwiperSlide>
                        <SwiperSlide>
                            <blockquote>
                                <q>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque possimus ullam pariatur inventore corporis sed dolorum optio aliquid placeat dolore fuga, a officiis neque odio est reiciendis nostrum corrupti!!"
                                </q>
                            </blockquote>
                        </SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </>
    )
}

export default Testimonials