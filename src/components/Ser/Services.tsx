// Import necessary styles and libraries
import "./Services.css"
import { TbPencilCheck, TbDeviceAnalytics } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


// Import the reusable SlideContent component
import SlideContent from "./SlideContent";

const Services: React.FC = () => {
    // Handle button click action
    const handleButtonClick = (step: string) => alert(`Button clicked for step ${step}!`);

    // Service data
    const services = [
        {
            icon: <TbPencilCheck />,
            step: "01",
            title: "Tech Writer",
            description: "Crafting engaging, SEO-optimized content to simplify complex tech concepts.",
            buttonText: "Read More",
        },
        {
            icon: <FaLaptopCode />,
            step: "02",
            title: "Frontend Development",
            description: "Building interactive and responsive user interfaces using modern web technologies.",
            buttonText: "Explore",
        },
        {
            icon: <TbPencilCheck />,
            step: "03",
            title: "Backend Development",
            description: "Building robust, scalable server-side solutions to power seamless  experiences.",
            buttonText: "Contact Me",
        },
        {
            icon: <TbDeviceAnalytics />,
            step: "04",
            title: "Research & Analysis",
            description: "Driving insights through data research and analysis for informed decisions.",
            buttonText: "Read More",
        },
        {
            icon: <TbPencilCheck />,
            step: "05",
            title: "Consulting",
            description: "Providing tailored solutions to optimize your business processes and technology stack.",
            buttonText: "Contact Me",
        },
    ];

    return (
        <>
            <main className="main-container mt-10 w-11/12 mx-auto">
                <div className="mt-16 w-11/12 m-auto ">
                    <header className="flex justify-center items-center flex-col">
                        <h3 className="title-small">Service</h3>
                        <h1 className="text-4xl leading-9">What I do for you</h1>
                    </header>

                    <section className="mt-12">
                        <Swiper
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                1024: { slidesPerView: 3 }, // Large screens
                                640: { slidesPerView: 2 },  // Medium screens
                                0: { slidesPerView: 1 },    // Small screens
                            }}
                        >
                            {services.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <SlideContent
                                        icon={service.icon}
                                        step={service.step}
                                        title={service.title}
                                        description={service.description}
                                        buttonText={service.buttonText}
                                        onButtonClick={() => handleButtonClick(service.step)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Services;
