import React, { useState } from "react";
import "./Counter.css";
import { FaLaptopCode } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { LuPackageOpen } from "react-icons/lu";
import { RiEmotionHappyLine } from "react-icons/ri";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
// import data from "/utils/accordion.js";
import "../../utils/accordion.tsx"

const Counter = () => {
    return (
        <section>
            <Accordion
                className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
            >
                {data.map((item, i) => {
                    const [className, setClassName] = useState(null);

                    return (
                        <AccordionItem
                            className={`accordionItem ${className}`}
                            key={i}
                            uuid={i}
                        >
                            <AccordionItemHeading>
                                <AccordionItemButton className="flexCenter accordionItemButton">
                                    <AccordionItemState>
                                        {({ expanded }) =>
                                            expanded
                                                ? setClassName("expanded")
                                                : setClassName("collapsed")
                                        }
                                    </AccordionItemState>
                                    {item.title}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="flex acct-dev mt-20 pt-28 pb-28 mb-10 justify-around">
                                    <nav className="flex flex-col items-center">
                                        <div className="text-4xl mb-2">
                                            <FaLaptopCode />
                                        </div>
                                        <h4>Completed projects</h4>
                                    </nav>

                                    <nav className="flex flex-col items-center">
                                        <div className="text-4xl mb-2">
                                            <FcProcess />
                                        </div>
                                        <h4>Processes</h4>
                                    </nav>

                                    <nav className="flex flex-col items-center">
                                        <div className="text-4xl mb-2">
                                            <LuPackageOpen />
                                        </div>
                                        <h4>Awards Received</h4>
                                    </nav>

                                    <nav className="flex flex-col items-center">
                                        <div className="text-4xl mb-2">
                                            <RiEmotionHappyLine />
                                        </div>
                                        <h4>Happy Clients</h4>
                                    </nav>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </section>
    );
};

export default Counter;
