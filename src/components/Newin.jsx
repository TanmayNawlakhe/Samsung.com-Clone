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
                <div className="flex flex-col sm:flex-row justify-center h-fit w-[100vw] sm:h-[80vh]">
                    <div
                        className="overflow-hidden relative h-[200px] sm:h-[680px] w-[95vw] sm:w-[44vw] m-3 rounded-3xl cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out `}
                            src={window.innerWidth< 768 ? "//images.samsung.com/is/image/samsung/assets/in/home/250212/624x352_Big_Tile_Paradigm.jpg?$624_352_JPG$" : "/assets/images/s25ultrat.webp"}
                            alt="Windfree"
                        />


                        <div className="absolute sm:sticky top-[5%] sm:top-[80%] h-[130px] w-[40vw] sm:w-full sm:h-[120px] sm:left-[50%] left-[53%] text-start sm:-translate-x-[50] flex flex-col justify-center items-start sm:items-center ">
                        <h1 className="absolute top-0 text-lg sm:text-2xl font-semibold text-start">
                            Galaxy S25 Ultra <br/> Special Colour
                        </h1>
                        <p
                            id="pran"
                            className={`text-start absolute top-[65%] text-sm transition-all duration-300 ease-in-out ${isHovered
                                ? "opacity-0 -translate-y-[75%]"
                                : "opacity-100 translate-y-0"
                                }`}
                        >
                            Get 512 GB at the price of 256 GB(Save $21000)
                        </p>

                        <div className={`cursor-pointer absolute -bottom-4  bg-black rounded-3xl border-black border-[1px] text-white w-fit px-4 py-2 hover:bg-white hover:text-black 
                            transition-all duration-300 ease-out ${isHovered
                                ? "opacity-100 -translate-y-[22px]"
                                : "opacity-0"
                            }
                            `}>
                            Pre-order
                        </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap flex-row justify-center h-[680px] w-full sm:w-[44vw] sm:mt-3">
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-2  sm:mr-3 mb-2 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered1 ? "scale-105" : ""
                                }`} src="assets/images/galaxytabs10.avif" />
                            <h1 className="absolute w-full bottom-[29%] text-base  sm:text-lg font-semibold ">
                                Galaxy Tab S10 Series
                            </h1>
                            <h1 className="absolute w-full px-4 sm:px-0 bottom-[13%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-2 sm:ml-3 mb-2 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered2 ? "scale-105" : ""
                                }`} src="assets/images/galaxyzfold6.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                Galaxy Z Fold6
                            </h1>
                            <p className="absolute w-full bottom-[20%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
                                Own now at $ 6354*/mo.
                            </p>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered2
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-2 sm:mr-3 mt-2 sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered3 ? "scale-105" : ""
                                }`} src="assets/images/465lbespokeai.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                465 L BESPOKE AI
                            </h1>
                            <h1 className="absolute w-full bottom-[12%]  sm:bottom-[21%] text-sm px-3 sm:px-0 sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-2 sm:ml-3 mt-2  sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered4 ? "scale-105" : ""
                                }`} src="assets/images/crystaluhd.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold ">
                                Get Crystal UHD
                            </h1>
                            <h1 className="absolute w-full px-3 sm:px-0 bottom-[15%]  sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
                <div className="flex flex-col sm:flex-row justify-center h-fit w-[100vw] sm:h-[80vh]">
                    <div
                        className="overflow-hidden relative h-[200px] sm:h-[680px] w-[100vw] sm:w-[44vw] m-3 rounded-3xl cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out `}
                            src={window.innerWidth< 768 ? "//images.samsung.com/is/image/samsung/assets/in/home/250212/624x352_Big_Tile_Paradigm.jpg?$624_352_JPG$" : "/assets/images/s25ultrat.webp"}
                            alt="Windfree"
                        />


                        <div className="absolute sm:sticky top-[5%] sm:top-[80%] h-[130px] w-[40vw] sm:w-full sm:h-[120px] sm:left-[50%] left-[53%] text-start sm:-translate-x-[50] flex flex-col justify-center items-start sm:items-center ">
                        <h1 className="absolute top-0 text-lg sm:text-2xl font-semibold text-start">
                            Galaxy S25 Ultra <br/> Special Colour
                        </h1>
                        <p
                            id="pran"
                            className={`text-start absolute top-[65%] text-sm transition-all duration-300 ease-in-out ${isHovered
                                ? "opacity-0 -translate-y-[75%]"
                                : "opacity-100 translate-y-0"
                                }`}
                        >
                            Get 512 GB at the price of 256 GB(Save $21000)
                        </p>

                        <div className={`cursor-pointer absolute -bottom-4  bg-black rounded-3xl border-black border-[1px] text-white w-fit px-4 py-2 hover:bg-white hover:text-black 
                            transition-all duration-300 ease-out ${isHovered
                                ? "opacity-100 -translate-y-[22px]"
                                : "opacity-0"
                            }
                            `}>
                            Pre-order
                        </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap flex-row justify-center h-[680px] w-full sm:w-[44vw] sm:mt-3">
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-1  sm:mr-3 mb-1 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered1 ? "scale-105" : ""
                                }`} src="assets/images/galaxytabs10.avif" />
                            <h1 className="absolute w-full bottom-[29%] text-base  sm:text-lg font-semibold ">
                                Galaxy Tab S10 Series
                            </h1>
                            <h1 className="absolute w-full px-4 sm:px-0 bottom-[13%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-1 sm:ml-3 mb-1 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered2 ? "scale-105" : ""
                                }`} src="assets/images/galaxyzfold6.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                Galaxy Z Fold6
                            </h1>
                            <p className="absolute w-full bottom-[20%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
                                Own now at $ 6354*/mo.
                            </p>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered2
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-1 sm:mr-3 mt-1 sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered3 ? "scale-105" : ""
                                }`} src="assets/images/465lbespokeai.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                465 L BESPOKE AI
                            </h1>
                            <h1 className="absolute w-full bottom-[12%]  sm:bottom-[21%] text-sm px-3 sm:px-0 sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-1 sm:ml-3 mt-1  sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered4 ? "scale-105" : ""
                                }`} src="assets/images/crystaluhd.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold ">
                                Get Crystal UHD
                            </h1>
                            <h1 className="absolute w-full px-3 sm:px-0 bottom-[15%]  sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
        3: (
            <>
                <div className="flex flex-col sm:flex-row justify-center h-fit w-[100vw] sm:h-[80vh]">
                    <div
                        className="overflow-hidden relative h-[200px] sm:h-[680px] w-[100vw] sm:w-[44vw] m-3 rounded-3xl cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out `}
                            src={window.innerWidth< 768 ? "//images.samsung.com/is/image/samsung/assets/in/home/250212/624x352_Big_Tile_Paradigm.jpg?$624_352_JPG$" : "/assets/images/s25ultrat.webp"}
                            alt="Windfree"
                        />


                        <div className="absolute sm:sticky top-[5%] sm:top-[80%] h-[130px] w-[40vw] sm:w-full sm:h-[120px] sm:left-[50%] left-[53%] text-start sm:-translate-x-[50] flex flex-col justify-center items-start sm:items-center ">
                        <h1 className="absolute top-0 text-lg sm:text-2xl font-semibold text-start">
                            Galaxy S25 Ultra <br/> Special Colour
                        </h1>
                        <p
                            id="pran"
                            className={`text-start absolute top-[65%] text-sm transition-all duration-300 ease-in-out ${isHovered
                                ? "opacity-0 -translate-y-[75%]"
                                : "opacity-100 translate-y-0"
                                }`}
                        >
                            Get 512 GB at the price of 256 GB(Save $21000)
                        </p>

                        <div className={`cursor-pointer absolute -bottom-4  bg-black rounded-3xl border-black border-[1px] text-white w-fit px-4 py-2 hover:bg-white hover:text-black 
                            transition-all duration-300 ease-out ${isHovered
                                ? "opacity-100 -translate-y-[22px]"
                                : "opacity-0"
                            }
                            `}>
                            Pre-order
                        </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap flex-row justify-center h-[680px] w-full sm:w-[44vw] sm:mt-3">
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-1  sm:mr-3 mb-1 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered1 ? "scale-105" : ""
                                }`} src="assets/images/galaxytabs10.avif" />
                            <h1 className="absolute w-full bottom-[29%] text-base  sm:text-lg font-semibold ">
                                Galaxy Tab S10 Series
                            </h1>
                            <h1 className="absolute w-full px-4 sm:px-0 bottom-[13%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-1 sm:ml-3 mb-1 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered2 ? "scale-105" : ""
                                }`} src="assets/images/galaxyzfold6.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                Galaxy Z Fold6
                            </h1>
                            <p className="absolute w-full bottom-[20%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
                                Own now at $ 6354*/mo.
                            </p>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered2
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-1 sm:mr-3 mt-1 sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered3 ? "scale-105" : ""
                                }`} src="assets/images/465lbespokeai.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                465 L BESPOKE AI
                            </h1>
                            <h1 className="absolute w-full bottom-[12%]  sm:bottom-[21%] text-sm px-3 sm:px-0 sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-1 sm:ml-3 mt-1  sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered4 ? "scale-105" : ""
                                }`} src="assets/images/crystaluhd.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold ">
                                Get Crystal UHD
                            </h1>
                            <h1 className="absolute w-full px-3 sm:px-0 bottom-[15%]  sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
        4:(
            <>
                <div className="flex flex-col sm:flex-row justify-center h-fit w-[100vw] sm:h-[80vh]">
                    <div
                        className="overflow-hidden relative h-[200px] sm:h-[680px] w-[100vw] sm:w-[44vw] m-3 rounded-3xl cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out `}
                            src={window.innerWidth< 768 ? "//images.samsung.com/is/image/samsung/assets/in/home/250212/624x352_Big_Tile_Paradigm.jpg?$624_352_JPG$" : "/assets/images/s25ultrat.webp"}
                            alt="Windfree"
                        />


                        <div className="absolute sm:sticky top-[5%] sm:top-[80%] h-[130px] w-[40vw] sm:w-full sm:h-[120px] sm:left-[50%] left-[53%] text-start sm:-translate-x-[50] flex flex-col justify-center items-start sm:items-center ">
                        <h1 className="absolute top-0 text-lg sm:text-2xl font-semibold text-start">
                            Galaxy S25 Ultra <br/> Special Colour
                        </h1>
                        <p
                            id="pran"
                            className={`text-start absolute top-[65%] text-sm transition-all duration-300 ease-in-out ${isHovered
                                ? "opacity-0 -translate-y-[75%]"
                                : "opacity-100 translate-y-0"
                                }`}
                        >
                            Get 512 GB at the price of 256 GB(Save $21000)
                        </p>

                        <div className={`cursor-pointer absolute -bottom-4  bg-black rounded-3xl border-black border-[1px] text-white w-fit px-4 py-2 hover:bg-white hover:text-black 
                            transition-all duration-300 ease-out ${isHovered
                                ? "opacity-100 -translate-y-[22px]"
                                : "opacity-0"
                            }
                            `}>
                            Pre-order
                        </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap flex-row justify-center h-[680px] w-full sm:w-[44vw] sm:mt-3">
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-1  sm:mr-3 mb-1 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered1 ? "scale-105" : ""
                                }`} src="assets/images/galaxytabs10.avif" />
                            <h1 className="absolute w-full bottom-[29%] text-base  sm:text-lg font-semibold ">
                                Galaxy Tab S10 Series
                            </h1>
                            <h1 className="absolute w-full px-4 sm:px-0 bottom-[13%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-1 sm:ml-3 mb-1 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered2 ? "scale-105" : ""
                                }`} src="assets/images/galaxyzfold6.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                Galaxy Z Fold6
                            </h1>
                            <p className="absolute w-full bottom-[20%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
                                Own now at $ 6354*/mo.
                            </p>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered2
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-1 sm:mr-3 mt-1 sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered3 ? "scale-105" : ""
                                }`} src="assets/images/465lbespokeai.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                465 L BESPOKE AI
                            </h1>
                            <h1 className="absolute w-full bottom-[12%]  sm:bottom-[21%] text-sm px-3 sm:px-0 sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-1 sm:ml-3 mt-1  sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered4 ? "scale-105" : ""
                                }`} src="assets/images/crystaluhd.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold ">
                                Get Crystal UHD
                            </h1>
                            <h1 className="absolute w-full px-3 sm:px-0 bottom-[15%]  sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
        5:(
            <>
                <div className="flex flex-col sm:flex-row justify-center h-fit w-[100vw] sm:h-[80vh]">
                    <div
                        className="overflow-hidden relative h-[200px] sm:h-[680px] w-[100vw] sm:w-[44vw] m-3 rounded-3xl cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out `}
                            src={window.innerWidth< 768 ? "//images.samsung.com/is/image/samsung/assets/in/home/250212/624x352_Big_Tile_Paradigm.jpg?$624_352_JPG$" : "/assets/images/s25ultrat.webp"}
                            alt="Windfree"
                        />


                        <div className="absolute sm:sticky top-[5%] sm:top-[80%] h-[130px] w-[40vw] sm:w-full sm:h-[120px] sm:left-[50%] left-[53%] text-start sm:-translate-x-[50] flex flex-col justify-center items-start sm:items-center ">
                        <h1 className="absolute top-0 text-lg sm:text-2xl font-semibold text-start">
                            Galaxy S25 Ultra <br/> Special Colour
                        </h1>
                        <p
                            id="pran"
                            className={`text-start absolute top-[65%] text-sm transition-all duration-300 ease-in-out ${isHovered
                                ? "opacity-0 -translate-y-[75%]"
                                : "opacity-100 translate-y-0"
                                }`}
                        >
                            Get 512 GB at the price of 256 GB(Save $21000)
                        </p>

                        <div className={`cursor-pointer absolute -bottom-4  bg-black rounded-3xl border-black border-[1px] text-white w-fit px-4 py-2 hover:bg-white hover:text-black 
                            transition-all duration-300 ease-out ${isHovered
                                ? "opacity-100 -translate-y-[22px]"
                                : "opacity-0"
                            }
                            `}>
                            Pre-order
                        </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap flex-row justify-center h-[680px] w-full sm:w-[44vw] sm:mt-3">
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-1  sm:mr-3 mb-1 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered1 ? "scale-105" : ""
                                }`} src="assets/images/galaxytabs10.avif" />
                            <h1 className="absolute w-full bottom-[29%] text-base  sm:text-lg font-semibold ">
                                Galaxy Tab S10 Series
                            </h1>
                            <h1 className="absolute w-full px-4 sm:px-0 bottom-[13%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-1 sm:ml-3 mb-1 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered2 ? "scale-105" : ""
                                }`} src="assets/images/galaxyzfold6.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                Galaxy Z Fold6
                            </h1>
                            <p className="absolute w-full bottom-[20%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
                                Own now at $ 6354*/mo.
                            </p>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered2
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-1 sm:mr-3 mt-1 sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered3 ? "scale-105" : ""
                                }`} src="assets/images/465lbespokeai.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                465 L BESPOKE AI
                            </h1>
                            <h1 className="absolute w-full bottom-[12%]  sm:bottom-[21%] text-sm px-3 sm:px-0 sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-1 sm:ml-3 mt-1  sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered4 ? "scale-105" : ""
                                }`} src="assets/images/crystaluhd.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold ">
                                Get Crystal UHD
                            </h1>
                            <h1 className="absolute w-full px-3 sm:px-0 bottom-[15%]  sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
        6:(
            <>
                <div className="flex flex-col sm:flex-row justify-center h-fit w-[100vw] sm:h-[80vh]">
                    <div
                        className="overflow-hidden relative h-[200px] sm:h-[680px] w-[100vw] sm:w-[44vw] m-3 rounded-3xl cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out `}
                            src={window.innerWidth< 768 ? "//images.samsung.com/is/image/samsung/assets/in/home/250212/624x352_Big_Tile_Paradigm.jpg?$624_352_JPG$" : "/assets/images/s25ultrat.webp"}
                            alt="Windfree"
                        />


                        <div className="absolute sm:sticky top-[5%] sm:top-[80%] h-[130px] w-[40vw] sm:w-full sm:h-[120px] sm:left-[50%] left-[53%] text-start sm:-translate-x-[50] flex flex-col justify-center items-start sm:items-center ">
                        <h1 className="absolute top-0 text-lg sm:text-2xl font-semibold text-start">
                            Galaxy S25 Ultra <br/> Special Colour
                        </h1>
                        <p
                            id="pran"
                            className={`text-start absolute top-[65%] text-sm transition-all duration-300 ease-in-out ${isHovered
                                ? "opacity-0 -translate-y-[75%]"
                                : "opacity-100 translate-y-0"
                                }`}
                        >
                            Get 512 GB at the price of 256 GB(Save $21000)
                        </p>

                        <div className={`cursor-pointer absolute -bottom-4  bg-black rounded-3xl border-black border-[1px] text-white w-fit px-4 py-2 hover:bg-white hover:text-black 
                            transition-all duration-300 ease-out ${isHovered
                                ? "opacity-100 -translate-y-[22px]"
                                : "opacity-0"
                            }
                            `}>
                            Pre-order
                        </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap flex-row justify-center h-[680px] w-full sm:w-[44vw] sm:mt-3">
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-1  sm:mr-3 mb-1 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered1 ? "scale-105" : ""
                                }`} src="assets/images/galaxytabs10.avif" />
                            <h1 className="absolute w-full bottom-[29%] text-base  sm:text-lg font-semibold ">
                                Galaxy Tab S10 Series
                            </h1>
                            <h1 className="absolute w-full px-4 sm:px-0 bottom-[13%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-1 sm:ml-3 mb-1 sm:mb-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered2 ? "scale-105" : ""
                                }`} src="assets/images/galaxyzfold6.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                Galaxy Z Fold6
                            </h1>
                            <p className="absolute w-full bottom-[20%] sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
                                Own now at $ 6354*/mo.
                            </p>
                            <div className={`cursor-pointer absolute bottom-1 -translate-x-[50%] left-[50%] bg-black rounded-3xl text-white w-fit px-4 py-2
                            transition-all duration-300 ease-out ${isHovered2
                                    ? "opacity-100 -translate-y-[17px]"
                                    : "opacity-0"
                                }
                            `}>
                                Buy Now
                            </div>
                        </div>
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] mr-1 sm:mr-3 mt-1 sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered3 ? "scale-105" : ""
                                }`} src="assets/images/465lbespokeai.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold">
                                465 L BESPOKE AI
                            </h1>
                            <h1 className="absolute w-full bottom-[12%]  sm:bottom-[21%] text-sm px-3 sm:px-0 sm:text-lg sm:font-semibold">
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
                        <div className="overflow-hidden relative flex justify-center text-center sm:h-[48%] sm:w-[20vw] w-[45vw] ml-1 sm:ml-3 mt-1  sm:mt-3 bg-slate-300 rounded-3xl"
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                        >
                            <img className={`transition-tranform duration-300 ease-in-out ${isHovered4 ? "scale-105" : ""
                                }`} src="assets/images/crystaluhd.avif" />
                            <h1 className="absolute w-full bottom-[29%]  text-base sm:text-lg font-semibold ">
                                Get Crystal UHD
                            </h1>
                            <h1 className="absolute w-full px-3 sm:px-0 bottom-[15%]  sm:bottom-[21%] text-sm sm:text-lg sm:font-semibold">
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
    }



    return (
        <div className="flex justify-center flex-col mb-10">
            <div className=" sm:m-[30px] flex sm:pt-0 pt-5 justify-start sm:justify-center h-[65px] sm:h-[30px] w-[100vw] overflow-x-scroll no-scrollbar ">
                {Newhighlights.map((hil, i) => (
                    <li key={i} onClick={() => handleChange(hil.id)} className="relative px-[20px]  w-fit flex justify-center cursor-pointer">
                        <div id={hil.id} className="align-center font-semibold w-fit hover:text-gray-700  text-base sm:text-lg">
                            {hil.title}
                        </div>
                        <div className={`absolute bottom-0  bg-black w-[80%] h-[2px] ${hihchoice === i + 1 ? "block" : "hidden"}`}></div>
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
