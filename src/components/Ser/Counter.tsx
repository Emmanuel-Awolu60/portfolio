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
                    <CountUp start={8800} end={9000} duration={4} />
                    <h4>Completed projects</h4>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2">
                        <FcProcess />
                    </div>
                    <CountUp start={8800} end={9000} duration={6} />

                    <h4>Processes</h4>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2">
                        <LuPackageOpen />
                    </div>
                    <CountUp start={8800} end={9000} duration={4} />

                    <h4>Awards Received</h4>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2">
                        <RiEmotionHappyLine />
                    </div>
                    <CountUp start={8800} end={9000} duration={4} />

                    <h4>Happy Clients</h4>
                </nav>
            </div>
        </section>

    )
}

export default Counter