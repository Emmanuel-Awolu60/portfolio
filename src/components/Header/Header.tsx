import React, { useState } from "react";
import "./Header.css";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Header: React.FC = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    // Toggle the menu open/close state
    const toggleMenu = () => setMenuOpened((prev) => !prev);

    return (
        <>
            <main className="main-container header fixed w-full bg-white items-center grid h-24 shadow-md">
                <div className="header-text flex justify-between items-center w-11/12 m-0 mx-auto">
                    {/* Logo */}
                    <nav className="name flex text-3xl items-center">
                        <FaCode className="facode" />
                        <h2 className="pl-1">Emmanuel AO</h2>
                    </nav>

                    {/* Moon Icon */}
                    <div className="moon-icon text-2xl cursor-pointer lg:hidden">
                        <IoMoonOutline />
                    </div>

                    {/* Hamburger Icon */}
                    <div
                        className="hamburger-icon text-2xl cursor-pointer lg:hidden"
                        onClick={toggleMenu}
                    >
                        {menuOpened ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Navigation Items */}
                    <nav
                        className={`menu absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 ${menuOpened ? "transform translate-y-0" : "transform -translate-y-full"
                            } lg:relative lg:transform-none lg:w-auto lg:shadow-none`}
                    >
                        <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
                            <li>
                                <a href="#" className="p-3 lg:pr-5">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="p-3 lg:pr-5">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="p-3 lg:pr-5">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="p-3 lg:pr-5">
                                    Portfolio
                                </a>
                            </li>
                            <li className="flex items-center p-3 lg:pr-5">
                                <a href="#" className="pr-1">
                                    Blog
                                </a>
                                <IoIosArrowDown />
                            </li>
                            <li>
                                <a href="#" className="p-3">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </>
    );
};

export default Header;
