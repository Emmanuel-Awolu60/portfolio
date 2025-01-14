// import React from 'react'
import "./About.module.css"
const About = () => {
    return (
        <div>
            <div className='about-banner flex mt-24 items-center w-11/12 m-0 mx-auto pb-5'>
                <div className='about-img-banner left-banner ' >
                    <div className="">
                        {/* <img src="./src/assets/images/heroAo.jpg" alt="Logo" className='about-img w-11/12 h-full rounded-xl' /> */}
                        {/* <img src="./public/img/eaopic.jpg" alt="Logo" className='img-fluid w-4/5 ml-16' /> */}
                        {/* <img src="/img/eaopic.jpg" alt="Logo" className="img-fluid w-4/5 ml-16" /> */}
                        <img
                            src="/img/eaopic.jpg"
                            alt="Logo"
                            className="img-fluid w-4/5 h-full ml-16 about-img"
                            onError={(e) => (e.currentTarget.src = "/img/fallback.jpg")}
                        />
                    </div>

                </div>

                <div className="right-banner">
                    <h1 className='title-small mb-2'>
                        Who am i?
                    </h1>

                    <h1 className='title-big'>
                        I'm Emmanuel AO, a web developer and visual tech writer.
                    </h1>

                    <p className='mt-6 mb-4'>
                        As a full-stack developer, I have a strong interest in developing user interfaces that are both intuitive yet efficient. I turn concepts into smooth digital experiences by balancing front-end inventiveness with back-end accuracy. Delivering functionality and innovation is the main goal of my work, and I make sure that every project provides users a thoroughly engaging, responsive, and faultless experience from beginning to end.
                    </p>

                    <button className='btn-style btn-stylecolor1'>
                        Download CV
                    </button>
                </div>
            </div>

            {/* //  resume sction */}
            <div className='resume-banner mt-20 pt-28 pb-28 mb-10 w-11/12 mx-auto'>
                <div className='w-11/12 m-0 mx-auto'>
                    <div>
                        <h1 className="title-small mb-4">
                            My  Resume
                        </h1>

                        <h1 className="title-big">
                            I Would Love to make your Ideas real
                        </h1>

                        <p className='mt-10 mb-10'>
                            Since 2016, I have been creating and improving my portfolio because I have a strong interest in web development. To learn more about the specifics of my career path as a developer, you can download my resume. Let's get in touch to talk about your projects and how I can help you achieve your vision!
                        </p>

                        <button className='btn-style btn-stylecolor1'>
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About