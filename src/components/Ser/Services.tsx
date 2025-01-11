// Import necessary styles and libraries
import "./Services.css";
import { TbPencilCheck, TbDeviceAnalytics } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";

// Import the reusable SlideContent component
import SlideContent from "./SlideContent";

const Services: React.FC = () => {
    const handleButtonClick = (step: string) => {
        alert(`Button clicked for step ${step}!`);
    };

    const services = [
        {
            icon: <TbPencilCheck />,
            step: "01",
            title: "Tech Writer",
            description: "Crafting engaging, SEO-optimized content to simplify complex tech concepts.",
            buttonText: "Read More",
        },
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
            description: "Building robust, scalable server-side solutions to power seamless user experiences.",
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
        <section className="mt-10">
            <div className="mt-16 w-11/12 m-0 mx-auto">
                <div className="flex justify-center items-center flex-col">
                    <h3 className="title-small">Service</h3>
                    <h1 className="text-4xl leading-9">What I do for you</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <SlideContent
                                icon={service.icon}
                                step={service.step}
                                title={service.title}
                                description={service.description}
                                buttonText={service.buttonText}
                                onButtonClick={() => handleButtonClick(service.step)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
