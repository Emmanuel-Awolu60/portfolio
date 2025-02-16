import "./Counter.css";
import { FaLaptopCode, FaAward } from "react-icons/fa";
import { RiEmotionHappyLine } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import CountUp from "react-countup";

const Counter = () => {
    return (
        <main className="main-container acct-dev px-6 sm:px-10 md:px-20 lg:px-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-28 pb-28 mb-10 text-center">
                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2 text-blue-500">
                        <FaLaptopCode />
                    </div>
                    <div className="stats_info text-xl font-bold">
                        <CountUp start={500} end={700} duration={4} />
                        <span>+</span>
                    </div>
                    <h4 className="text-sm sm:text-base">Projects Done</h4>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2 text-green-500">
                        <VscServerProcess />
                    </div>
                    <div className="stats_info text-xl font-bold">
                        <CountUp start={50} end={60} duration={5} />
                        <span>+</span>
                    </div>
                    <h4 className="text-sm sm:text-base">Satisfied Clients</h4>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2 text-yellow-500">
                        <FaAward />
                    </div>
                    <div className="stats_info text-xl font-bold">
                        <CountUp start={5} end={12} duration={6} />
                        <span>+</span>
                    </div>
                    <h4 className="text-sm sm:text-base">Awards</h4>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2 text-red-500">
                        <RiEmotionHappyLine />
                    </div>
                    <div className="stats_info text-xl font-bold">
                        <CountUp start={600} end={906} duration={4} />
                        <span>+</span>
                    </div>
                    <h4 className="text-sm sm:text-base">Happy Clients</h4>
                </nav>
            </div>
        </main>
    );
};

export default Counter;
