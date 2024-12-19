// import React from 'react'
import "./About.css"
const About = () => {
    return (
        <div>
            <div className='about-banner flex mt-24 items-center w-11/12 m-0 mx-auto pb-5'>
                <div className='about-img-banner'>
                    <div>
                        {/* <img src="./src/assets/images/heroAo.jpg" alt="Logo" className='about-img w-11/12 h-full rounded-xl' /> */}
                        <img src="./public/img/eaopic.jpg" alt="Logo" className='img-fluid w-4/5 ml-16' />

                    </div>

                </div>

                <div>
                    <h1 className='title-small mb-4'>
                        Who am i?
                    </h1>

                    <h1 className='title-big'>
                        I'm Emmanuel AO, a web developer and visual tech writer.
                    </h1>

                    <p className='mt-10 mb-6'>
                        As a full-stack developer, I have a strong interest in developing user interfaces that are both intuitive yet efficient. I turn concepts into smooth digital experiences by balancing front-end inventiveness with back-end accuracy. Delivering functionality and innovation is the main goal of my work, and I make sure that every project provides users a thoroughly engaging, responsive, and faultless experience from beginning to end.
                    </p>

                    <button className='btn-style btn-stylecolor1'>
                        Download CV
                    </button>
                </div>
            </div>

            {/* //  resume sction */}
            <div className='resume-banner mt-20 pt-28 pb-28 mb-10'>
                <div className='w-11/12 m-0 mx-auto'>
                    <div>
                        <h1 className="title-small mb-4">
                            My  Resume
                        </h1>

                        <h1 className="title-big">
                            I Would Love to make your Ideas real
                        </h1>

                        <p className='mt-10 mb-10'>
                            I love graphic design and photography and have been working on my portfolio since 2016. You can download my resume in order to learn the details of my professional life as a designer and photographer. Contact me and we will discuss your projects!
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