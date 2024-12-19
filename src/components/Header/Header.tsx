import React, { useState } from "react";
import './Header.css';
import { FaCode } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger menu icons

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    // Toggle the menu open/close state
    const toggleMenu = () => setMenuOpened((prev) => !prev);

    return (
        <>
            <div className='header fixed w-full bg-white items-center grid'>
                <div className='header-text flex justify-between items-center w-11/12 m-0 mx-auto'>
                    {/* Logo */}
                    <nav className='name flex text-3xl items-center'>
                        <FaCode />
                        <h2 className='pl-1'>Emmanuel AO</h2>
                    </nav>

                    {/* Hamburger Icon */}
                    <div className='hamburger-icon text-2xl cursor-pointer lg:hidden' onClick={toggleMenu}>
                        {menuOpened ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Navigation Items */}
                    <nav className={`menu flex ${menuOpened ? "menu-open" : "menu-closed"} lg:flex`}>
                        <ul className='flex lg:flex-row lg:items-center lg:gap-6'>
                            <li><a href="" className='pr-5'>Home</a></li>
                            <li><a href="" className='pr-5'>About</a></li>
                            <li><a href="" className='pr-5'>Services</a></li>
                            <li><a href="" className='pr-5'>Portfolio</a></li>
                            <li className="flex items-center">
                                <a href="" className="pr-1">Blog</a>
                                <IoIosArrowDown />
                            </li>
                            <li><a href="" className=''>Contact</a></li>
                            <li><a href="" className=''><IoMoonOutline /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
