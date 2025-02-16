import "../Footer/Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className='w-full h-auto bg-gray-900 py-6'>
            <div className='mt-8 w-4/5 mx-auto footer-div flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
                <div className='text-white mb-4 md:mb-0'>
                    <p className='text-white text-sm sm:text-base'>
                        © Copyright 2025 Portfolio. Design by
                        <a href="https://linktr.ee/Emmanuel_Awolu" target='_blank' className='ml-2 text-blue-400 hover:underline'>Emmanuel Awolu Oluwapelumi.</a>
                    </p>
                </div>
                <div>
                    <ul className='flex justify-center md:justify-end space-x-4'>
                        <li>
                            <a href="https://github.com/Emmanuel-Awolu60" target="_blank" className='text-white text-xl hover:text-gray-400'>
                                <LuGithub />
                            </a>
                        </li>
                        <li>
                            <a href='https://x.com/dev__eao' target="_blank" className='text-white text-xl hover:text-gray-400'>
                                <FaXTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/emmanuel-awolu-463304254/" target="_blank" className='text-white text-xl hover:text-gray-400'>
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
