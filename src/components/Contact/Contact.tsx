import "./Contact.css"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
const Contact = () => {
    return (
        <>
            <div className="">
                <header className="mb-12 mt-32 flex justify-center items-center flex-col">
                    <h4 className="text-xl title-small leading-9">Get in touch with Me</h4>
                    <h1 className="text-4xl leading-9 pb-2">Are you ready to work together?</h1>
                    <p className="title-small">Let's start a project! Hire Me.</p>
                </header>
                <div className=" w-11/12 mx-auto flex row mt-md-5 mt-5 pt-lg-3 justify-center">
                    <div className="columns-lg">
                        <p>I’m open to any communication! Feel free to contact
                            me any convenient way! I’m always interested in
                            hearing about new projects and opportunities.
                        </p>
                        <span className="flex">
                            <FaWhatsapp />
                            <p> +2347060957515</p>
                        </span>
                        <span className="flex self-center">
                            <MdOutlineMarkEmailRead />
                            <a href="">emmanelawolu8@gmail.com</a>
                        </span>
                        {/* <span></span> */}
                    </div>


                    <div className="container col-lg-7 mt-lg-0 mt-md-5 mt-4 HomePageContactForm">
                        <form action="" method="post">
                            <div className="">
                                <div className="twice-two flex">
                                    <div className="w-1/2">
                                        <input type="text" className="form-control"
                                            name="w3lName" id="w3lName"
                                            placeholder="Name" required>
                                        </input>
                                    </div>
                                    <div className="w-1/2">
                                        <input type="email" className="form-control"
                                            name="w3lSender" id="w3lSender"
                                            placeholder="Email" required>
                                        </input>
                                    </div>
                                </div>
                                <div className="twice">
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