import "./Contact.css"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
const Contact = () => {
    return (
        <>
            <div className="mt-16 w-11/12 m-auto">
                <header className="mb-12 mt-16 w-11/12 m-auto flex justify-center items-center flex-col">
                    <h4 className="text-xl title-small leading-9">Get in touch with Me</h4>
                    <h1 className="text-4xl leading-9 pb-2">Are you ready to work together?</h1>
                    <p className="title-small">Let's start a project! Hire Me.</p>
                </header>


                <div className=" w-11/12 mx-auto flex row mt-md-5 mt-8 pt-lg-3 justify-center">
                    <div className="columns-lg w-4/5">
                        <p className="text-xl mb-9 leading-7">
                            I’m open to any communication! Feel free to contact <br />
                            me any convenient way! I’m always interested in <br />
                            hearing about new projects and opportunities.
                        </p>

                        <ul className="address mt-md-5 mt-4">
                            <li className="mb-3">
                                <p>
                                    <h1 className="flex items-center text-2xl">
                                        <span className="pr-2"><FaWhatsapp /></span>
                                        <a href="tel:+234-706-095-7515" className="con">+234-706-095-7515</a>
                                    </h1>
                                </p>
                            </li>

                            <li>
                                <p>
                                    <h1 className="flex items-center text-2xl">
                                        <span className="pr-2"><MdOutlineMarkEmailRead /></span>
                                        <a href="mailto" className="con">emmanelawolu8@gmail.com</a>
                                    </h1>

                                </p>
                            </li>
                        </ul>
                        <span className="flex self-center">

                        </span>
                        {/* <span></span> */}
                    </div>


                    <div className="w-4/5 container col-lg-7 mt-lg-0 mt-md-5 mt-4 HomePageContactForm bo">
                        <form action="" method="post">
                            <div className="">
                                <div className="twice-two flex gap-5 mb-6">
                                    <div className="w-1/2">
                                        <input type="text" className="form-control"
                                            name="Name" id="Name"
                                            placeholder="Name" required>
                                        </input>
                                    </div>
                                    <div className="w-1/2">
                                        <input type="email" className="form-control"
                                            name="Sender" id="Sender"
                                            placeholder="Email" required>
                                        </input>
                                    </div>
                                </div>
                                <div className="twice mb-6">
                                    <input type="text" className="form-control"
                                        name="w3lSubject" id="w3lSubject"
                                        placeholder="Subject"
                                        required>
                                    </input>
                                </div>
                                <textarea name="w3lMessage"
                                    className="form-control" id="w3lMessage"
                                    placeholder="Message"
                                    required>
                                </textarea>

                                <div className="text-right">
                                    <button type="submit" className="btn btn-secondary btn-style mt-4">
                                        Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact