import "./Counter.css"
import { FaLaptopCode } from "react-icons/fa";
// import { LuPackageOpen } from "react-icons/lu";
import { RiEmotionHappyLine } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { FaAward } from "react-icons/fa";
import CountUp from "react-countup"

const Counter = () => {
    return (
        <>
            <main className="main-container acct-dev ">
                <div className="flex acct-dev2 mt-20 pt-28 pb-28 mb-10 justify-around">
                    <nav className="flex flex-col items-center">
                        <div className="text-4xl mb-2">
                            <FaLaptopCode />
                        </div>
                        <div className="stats_info">
                            <CountUp start={500} end={700} duration={4} />
                            <span>+</span>
                        </div>
                        <h4>Projects Done</h4>
                    </nav>

                    <nav className="flex flex-col items-center">
                        <div className="text-4xl mb-2">
                            {/* <FcProcess /> */} <VscServerProcess />
                        </div>
                        <div className="stats_info">
                            <CountUp start={50} end={60} duration={5} />
                            <span>+</span>
                        </div>

                        <h4>Satisfied Clients</h4>
                    </nav>

                    <nav className="flex flex-col items-center">
                        <div className="text-4xl mb-2">
                            {/* <LuPackageOpen /> */}
                            <FaAward />
                        </div>
                        <div className="stats_info">
                            <CountUp start={5} end={12} duration={6} />
                            <span>+</span>
                        </div>

                        <h4>Awards</h4>
                    </nav>

                    <nav className="flex flex-col items-center">
                        <div className="text-4xl mb-2">
                            <RiEmotionHappyLine />
                        </div>
                        <div className="stats_info">
                            <CountUp start={600} end={906} duration={4} />
                            <span>+</span>
                        </div>

                        <h4>Happy Clients</h4>
                    </nav>
                </div>
            </main>
        </>
    )
}

export default Counter