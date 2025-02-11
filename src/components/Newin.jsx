import React, { useState } from "react";
import { Newhighlights } from "../utils";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./Newin.css"

const Newin = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    const [hihchoice, sethihchoice] = useState(1);
    const [direction, setDirection] = useState("left"); // Default direction

    const handleChange = (nextChoice) => {
        setDirection(nextChoice > hihchoice ? "right" : "left");
        sethihchoice(nextChoice);
    };


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnter1 = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
    };
    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };
    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };
    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };

    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };


    const content = {
        1: (
            <>
                <div className="flex justify-center h-[80vh]">
                    <div
                        className="overflow-hidden relative h-[680px] w-[44vw] m-3 rounded-3xl cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out ${isHovered ? "scale-105" : ""
                                }`}
                            src={"/assets/images/s25ultrat.webp"}
                            alt="Windfree"
                        />
                        <h1 className="absolute top-[80%] -translate-x-[50%] left-[50%] text-2xl font-semibold text-center">
                            Galaxy S25 Ultra <br/> Special Colour
                        </h1>
                        <p
                            id="pran"
                            className={`text-center absolute top-[90%] -translate-x-[50%] left-[50%] text-sm transition-all duration-300 ease-in-out ${isHovered
                                ? "opacity-0 -translate-y-[50%]"
                                : "opacity-100 translate-y-0"
                                }`}
                        >
                            Get 512 GB at the price of 256 GB(Save $21000)
                        </p>

                        <div className={`cursor-pointer absolute bottom-0 -translate-x-[50%] left-[50%] bg-black rounded-3xl border-black border-[1px] text-white w-fit px-4 py-2 hover:bg-white hover:text-black 
                            transition-all duration-300 ease-out ${isHovered
                                ? "opacity-100 -translate-y-[22px]"
                                : "opacity-0"
                            }
                            `}>
                            Pre-order
                        </div>

                    </div>

                    <div className="flex flex-wrap flex-row justify-center h-[680px] w-[44vw] mt-3">
                        <div className="overflow-hidden relative flex justify-center text-center h-[48%] w-[20vw] mr-3 mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered1 ? "scale-105" : ""
                                }`} src="assets/images/galaxytabs10.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-lg font-semibold ">
                                Galaxy Tab S10 Series
                            </h1>
                            <h1 className="absolute w-full bottom-[21%] text-lg font-semibold">
                                Upto $ 15000* bank discount
                            </h1>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered1
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center h-[48%] w-[20vw] ml-3 mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered2 ? "scale-105" : ""
                                }`} src="assets/images/galaxyzfold6.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-lg font-semibold font-poppins">
                                Galaxy Z Fold6
                            </h1>
                            <h1 className="absolute w-full bottom-[21%] text-lg font-semibold">
                                Own now at $ 6354*/mo.
                            </h1>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered2
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center h-[48%] w-[20vw] mr-3 mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered3 ? "scale-105" : ""
                                }`} src="assets/images/465lbespokeai.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-lg font-semibold font-poppins">
                                465 L BESPOKE AI
                            </h1>
                            <h1 className="absolute w-full bottom-[21%] text-lg font-semibold">
                                Avail benefits up to $ 10500*
                            </h1>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered3
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center h-[48%] w-[20vw] ml-3 mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered4 ? "scale-105" : ""
                                }`} src="assets/images/crystaluhd.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-lg font-semibold font-poppins">
                                Get Crystal UHD
                            </h1>
                            <h1 className="absolute w-full bottom-[21%] text-lg font-semibold">
                                Upto $ 3000* bank discount
                            </h1>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered4
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>


                    </div>
                </div>
            </>
        ),
        2: (
            <>
                <div className="flex justify-center h-[80vh]">
                    <div
                        className="overflow-hidden relative h-[680px] w-[44vw] m-3 rounded-3xl cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out ${isHovered ? "scale-105" : ""
                                }`}
                            src={"/assets/images/galaxya35.avif"}
                            alt="Galaxy A35"
                        />
                        <h1 className="absolute top-[80%] -translate-x-[50%] left-[50%] text-2xl font-semibold">
                            Galaxy A35 | A55 5G
                        </h1>
                        <h1 className="absolute top-[84.5%] -translate-x-[50%] left-[50%] text-2xl font-semibold">
                            Starting $ 25999*
                        </h1>
                        <p
                            id="pran"
                            className={`text-center absolute top-[91%] -translate-x-[50%] left-[50%] text-sm transition-all duration-300 ease-in-out ${isHovered
                                ? "opacity-0 -translate-y-[50%]"
                                : "opacity-100 translate-y-0"
                                }`}
                        >
                            Avail up to $ 6000* bank discount
                        </p>

                        <div className={`cursor-pointer absolute bottom-0 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered
                                ? "opacity-100 -translate-y-[23px]"
                                : "opacity-0"
                            }
                            `}>
                            Buy Now
                        </div>

                    </div>

                    <div className="flex flex-wrap flex-row justify-center h-[680px] w-[44vw] mt-3">
                        <div className="overflow-hidden relative flex justify-center text-center h-[48%] w-[20vw] mr-3 mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered1 ? "scale-105" : ""
                                }`} src="assets/images/galaxys24fe.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-lg font-semibold ">
                                Galaxy S24 FE
                            </h1>
                            <h1 className="absolute w-full bottom-[21%] text-lg font-semibold">
                                Starting $ 65999*
                            </h1>
                            <div className={`cusor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered1
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center h-[48%] w-[20vw] ml-3 mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered2 ? "scale-105" : ""
                                }`} src="assets/images/galaxyzflip6.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-lg font-semibold font-poppins">
                                Galaxy Z Flip6
                            </h1>
                            <h1 className="absolute w-full bottom-[21%] text-lg font-semibold">
                                Starting $ 4125/mo*
                            </h1>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered2
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center h-[48%] w-[20vw] mr-3 mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered3 ? "scale-105" : ""
                                }`} src="assets/images/galaxys24.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-lg font-semibold font-poppins">
                                Galaxy S24
                            </h1>
                            <h1 className="absolute w-full bottom-[21%] text-lg font-semibold">
                                Starting $ 61999*
                            </h1>
                            <div className={` curosr-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered3
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center h-[48%] w-[20vw] ml-3 mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered4 ? "scale-105" : ""
                                }`} src="assets/images/galaxya16.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-lg font-semibold font-poppins">
                                Galaxy A16
                            </h1>
                            <h1 className="absolute w-full bottom-[21%] text-lg font-semibold">
                                Starting $ 17149*
                            </h1>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered4
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>


                    </div>
                </div>
            </>
        ),
        3: (
            <></>
        ),
        4: (
            <></>
        ),
        5: (
            <></>
        ),
        6: (
            <></>
        ),
    }



    return (
        <div className="flex justify-center flex-col mb-10">
            <div className=" m-[30px] flex justify-center">
                {Newhighlights.map((hil, i) => (
                    <li key={i} onClick={() => handleChange(hil.id)} className="relative px-[20px] w-fit flex justify-center cursor-pointer">
                        <div id={hil.id} className="align-center font-semibold hover:text-gray-700 text-lg">
                            {hil.title}
                        </div>
                        <div className={`absolute bottom-[-10%] bg-black w-[80%] h-[2px] ${hihchoice === i + 1 ? "block" : "hidden"}`}></div>
                    </li>

                ))}
            </div>

            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={hihchoice}
                    timeout={400}
                    classNames={{
                        enter: `slide-enter-${direction}`,
                        enterActive: `slide-enter-active-${direction}`,
                        exit: `slide-exit-${direction === "left" ? "left" : "right"}`,
                        exitActive: `slide-exit-active-${direction === "left" ? "left" : "right"}`,
                    }}
                >
                    {content[hihchoice]}
                </CSSTransition>
            </SwitchTransition>

        </div>
    );
};

export default Newin;
