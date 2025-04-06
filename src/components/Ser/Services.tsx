// Import necessary styles and libraries
import "./Services.css"
import { TbPencilCheck, TbDeviceAnalytics } from "react-icons/tb";
// import { FaLaptopCode } from "react-icons/fa";   

// Import the reusable SlideContent component
import SlideContent from "./SlideContent";

const Services: React.FC = () => {
    // Handle button click action
    const handleButtonClick = (step: string) => alert(`Button clicked for step ${step}!`);

    // Service data
     // {
        //     icon: <FaLaptopCode />,
        //     step: "02",
        //     title: "Frontend Development",
        //     description: "Building interactive and responsive user interfaces using modern web technologies.",
        //     buttonText: "Explore",
        // },
    const services = [
       
        {
            icon: <TbPencilCheck />,
            step: "03",
            title: "Backend Development",
            description: "Building robust, scalable server-side solutions to power seamless experiences.",
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
        <main className="main-container mt-10 w-11/12 mx-auto">
            <div className="mt-16 w-11/12 m-auto">
                <header className="flex justify-center items-center flex-col">
                    <h3 className="title-small">Service</h3>
                    <h1 className="text-4xl leading-9">What I do for you</h1>
                </header>

                <section className="mt-12">
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <SlideContent
                                key={index}
                                icon={service.icon}
                                step={service.step}
                                title={service.title}
                                description={service.description}
                                buttonText={service.buttonText}
                                onButtonClick={() => handleButtonClick(service.step)}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Services;
