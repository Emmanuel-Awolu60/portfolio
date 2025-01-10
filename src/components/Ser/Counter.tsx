import "./Counter.css"
import { FaLaptopCode } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { LuPackageOpen } from "react-icons/lu";
import { RiEmotionHappyLine } from "react-icons/ri";
import CountUp from "react-countup"

const Counter = () => {
    return (
        <section>
            <div className="flex acct-dev mt-20 pt-28 pb-28 mb-10 justify-around">
                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2">
                        <FaLaptopCode />
                    </div>
                    <div className="stats_info">
                        <CountUp start={500} end={700} duration={4} />
                        <span>+</span>
                    </div>
                    <h4>Completed projects</h4>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2">
                        <FcProcess />
                    </div>
                    <div className="stats_info">
                        <CountUp start={50} end={60} duration={5} />
                        <span>+</span>
                    </div>

                    <h4>Processes</h4>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2">
                        <LuPackageOpen />
                    </div>
                    <div className="stats_info">
                        <CountUp start={5} end={12} duration={6} />
                        <span>+</span>
                    </div>

                    <h4>Awards Received</h4>
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
        </section>

    )
}

export default Counter