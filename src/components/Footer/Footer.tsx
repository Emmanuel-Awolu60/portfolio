// import "./Footer.css"
import "../Footer/Footer.css"
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
const Footer = () => {
    return (
        <>
            <footer className='w-full h-20'>
                <div className='mt-16 w-4/5 m-auto footer-div flex justify-between items-center '>
                    <div className='text-white'>
                        <p className='text-white'>
                            © Copyright 2025 Portfolio. Design by
                            <a href="https://linktr.ee/Emmanuel_Awolu" target='_blank' className='ml-2'>Emmanuel Awolu Oluwapelumi.</a>
                        </p>
                    </div>
                    <div>
                        <li className='list-none'>
                            <p className='flex text-white'>
                                <a href="https://github.com/Emmanuel-Awolu60" target="_blank">
                                    <LuGithub />
                                </a>
                                <a href='https://x.com/dev__eao' className="ml-2 mr-2" target="_blank">
                                    <FaXTwitter />
                                </a>

                                <a href="https://www.linkedin.com/in/emmanuel-awolu-463304254/" target="_blank">
                                    <FaLinkedinIn />
                                </a>
                            </p>
                        </li>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
