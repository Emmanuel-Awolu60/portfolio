import "./Counter.css"
import { FaLaptopCode } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { LuPackageOpen } from "react-icons/lu";
import { RiEmotionHappyLine } from "react-icons/ri";
const Counter = () => {
    return (
        <section>
            <div className="flex ">
                <nav>
                    <nav>
                        <FaLaptopCode />
                    </nav>
                    <p>
                        Completed projects
                    </p>
                </nav>
                <nav>
                    <nav>
                        <FcProcess />
                    </nav>
                    <p>
                        Processes
                    </p>
                </nav>

                <nav>
                    <nav>
                        <LuPackageOpen />
                    </nav>
                    <p>Awards Received</p>
                </nav>
                <nav>
                    <nav><RiEmotionHappyLine /></nav>
                    <p>Happy Clients</p>
                </nav>
            </div>
        </section>
    )
}

export default Counter