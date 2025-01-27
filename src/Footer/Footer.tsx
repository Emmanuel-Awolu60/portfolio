import React from 'react'
import "./Footer.css"
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
const Footer = () => {
    return (
        <footer className='w-full h-20'>
            <div className='mt-16 w-11/12 m-auto footer-div flex'>

                <div className='text-white'>
                    <p className='text-white'>
                        © Copyright 2025 Portfolio. Design by Emmanuel Awolu Oluwapelumi
                    </p>
                </div>

                <div>
                    <li className='list-none'>
                        <p className='flex text-white'>
                            <a href="">
                                <FaLinkedinIn />
                            </a>
                            <a className="ml-2">
                                <FaXTwitter />
                            </a>
                            <a href="https://github.com/Emmanuel-Awolu60">
                                <LuGithub />
                            </a>
                        </p>
                    </li>
                </div>

            </div>
        </footer>
    )
}

export default Footer
