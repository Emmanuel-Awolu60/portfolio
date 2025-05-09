import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
  return (
    <>
      <main className="main-container continer banner ">
        <div className=" py-5 pt-40 w-11/12 mx-auto ">
          <div className="second-continer w-11/12 mx-auto flex justify-items-center items-center">
            <section className="right-banner w-1/2">
              <span>
                <h3 className="title-small ">HELLO</h3>
                <h1 className="mb-2 title">
                  <span className="mr-2">I'm</span>
                  <strong>Emmanuel AO</strong>
                </h1>

                <div className="typewriter title flex Typewriter">
                  <h1 className="mr-2">
                    <strong>a</strong>
                  </h1>
                  <span className="typewriterText">
                    <Typewriter
                      words={['', 'Software Developer']}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </div>
              </span>

              <p className="mt-10 mb-10">
                As a back-end developer, I specialize in building robust and
                scalable server-side systems that power seamless user
                experiences. I enjoy working on projects that require efficient
                data handling, secure APIs, and smooth int egration with
                front-end interfaces.
              </p>

              <span>
                <button className="btn-style btn-stylecolor1 text-white mr-4">
                  Hire Me
                </button>
                <button className="btn-style">Portfolio</button>
              </span>
            </section>

            <div className="left-banner w-1/2">
              {/* <img src="./src/assets/images/heroAo.jpg" alt="Logo" className='img-fluid w-4/5 ml-16' /> */}
              {/* <img src="./public/img/eaopic.jpg" alt="Logo" className='img-fluid w-4/5 ml-16' /> */}
              {/* <img src="/img/eaopic.jpg" alt="Logo" className="img-fluid w-4/5 ml-16" /> */}
              <img
                src="/img/eaopic.jpg"
                alt="Logo"
                className="img-fluid w-4/5 ml-16"
                onError={(e) => (e.currentTarget.src = '/img/fallback.jpg')}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
