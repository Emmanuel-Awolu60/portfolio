import "./Counter.css"
import { FaLaptopCode } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { LuPackageOpen } from "react-icons/lu";
import { RiEmotionHappyLine } from "react-icons/ri";
const Counter = () => {
    return (
        <section>
            <div className="flex acct-dev mt-20 pt-28 pb-28 mb-10 justify-around">
                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2">
                        <FaLaptopCode />
                    </div>
                    <p>Completed projects</p>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2">
                        <FcProcess />
                    </div>
                    <p>Processes</p>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2">
                        <LuPackageOpen />
                    </div>
                    <p>Awards Received</p>
                </nav>

                <nav className="flex flex-col items-center">
                    <div className="text-4xl mb-2">
                        <RiEmotionHappyLine />
                    </div>
                    <p>Happy Clients</p>
                </nav>
            </div>
        </section>

    )
}

export default Counter