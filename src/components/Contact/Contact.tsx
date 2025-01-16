import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div>
                <div>
                    <div>
                        <h4>Get in touch with Me</h4>
                        <h1>Are you ready to work together?</h1>
                        <p>Let's start a project! Hire Me.</p>
                    </div>

                    <div>
                        <p>I’m open to any communication! Feel free to contact me any convenient way! I’m always interested in hearing about new projects and opportunities.</p>
                        <span>
                            <p>+2347060957515</p>
                        </span>
                        <span>
                            <a href="">emmanelawolu8@gmail.com</a>
                        </span>
                        {/* <span></span> */}
                    </div>


                    <div className="container col-lg-7 mt-lg-0 mt-md-5 mt-4 HomePageContactForm">
                        <div className="max-w-">

                            <form action="" method="post">
                                <div className="twice-two">

                                    <input type="text" className="form-control"
                                        name="w3lName" id="w3lName"
                                        placeholder="Name" required>
                                    </input>
                                    <div>
                                        <input type="email" className="form-control"
                                            name="w3lSender" id="w3lSender"
                                            placeholder="Email" required>
                                        </input>
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
            </div>
        </>
    )
}

export default Contact