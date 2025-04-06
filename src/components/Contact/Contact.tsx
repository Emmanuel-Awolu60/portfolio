import "./Contact.css"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Contact = () => {
    return (
        <>
            <main className="main-container mt-16 w-11/12 mx-auto mb-6">
                <header className="mb-12 mt-16 flex justify-center items-center flex-col text-center">
                    <h4 className="text-lg leading-9">Get in touch with Me</h4>
                    <h1 className="text-3xl sm:text-4xl leading-9 pb-2">Are you ready to work together?</h1>
                    {/* <p className="text-lg">Let's start a project! Hire Me.</p> */}
                </header>

                <div className="flex flex-col lg:flex-row mt-8 gap-8">
                    {/* Left Section */}
                    <div className="lg:w-1/2">
                        <p className="text-base sm:text-lg mb-6 leading-7">
                            I’m open to any communication! Feel free to contact <br />
                            me any convenient way! I’m always interested in <br />
                            hearing about new projects and opportunities.
                        </p>

                        <ul className="mt-4">
                            <li className="mb-3">
                                <div className="flex items-center text-xl sm:text-2xl">
                                    <span className="pr-2 text-green-500"><FaWhatsapp /></span>
                                    <a href="tel:+234-706-095-7515" className="hover:underline">+234-706-095-7515</a>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center text-xl sm:text-2xl">
                                    <span className="pr-2 text-blue-500"><MdOutlineMarkEmailRead /></span>
                                    <a href="mailto:emmanelawolu8@gmail.com" className="hover:underline">emmanelawolu8@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section (Form) */}
                    <div className="lg:w-1/2">
                        <form action="" method="post" className="space-y-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    placeholder="Name"
                                    className="form-control w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                                <input
                                    type="email"
                                    name="Sender"
                                    id="Sender"
                                    placeholder="Email"
                                    className="form-control w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                name="Subject"
                                id="w3lSubject"
                                placeholder="Subject"
                                className="form-control w-full p-3 border border-gray-300 rounded-md"
                                required
                            />

                            <textarea
                                name="Message"
                                id="Message"
                                placeholder="Message"
                                // rows="5"
                                className="form-control w-full p-3 border border-gray-300 rounded-md"
                                required
                            ></textarea>

                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="btn bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;
