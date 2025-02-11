import Logo from '/assets/images/logo.svg';
import { navLists, subList } from '../utils';
import SearchIcon from '/assets/images/searchicon.webp';
import CartIcon from '/assets/images/carticon.webp';
import ProfileIcon from '/assets/images/profileicon.webp';
import { useState } from 'react';

const Navbar = () => {
    const [OverlayVisible, setOverlayVisible] = useState(false);

    return (
        <nav className="relative ">
            <div className={`absolute bg-gray-500  h-[1px] w-full top-full left-[40px] z-50 ${OverlayVisible? 'bg-opacity-50' : 'bg-opacity-0'}`}></div>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out ${OverlayVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            ></div>

            <header className="relative z-30 px-10 w-[100vw] bg-white ">
                <div className="px-5 py-4 flex flex-row justify-between items-center">
                    <div>
                        <img src={Logo} alt="Samsung Logo" />
                    </div>

                    <div
                        className="flex justify-center max-sm:hidden items-center"
                        onMouseEnter={() => setOverlayVisible(true)}
                        onMouseLeave={() => setOverlayVisible(false)}
                    >
                        <ul className="flex">
                            {navLists.map((nav, i) => (
                                <li key={i} className="relative group">
                                    <div
                                        className={`px-2 py-1 text-sm font-semibold cursor-pointer rounded-3xl hover:bg-black hover:text-white ${nav.dropdown === 1 ? 'drop' : 'nondrop'
                                            }`}
                                    >
                                        {nav.title}
                                    </div>

                                    {nav.dropdown === 1 && nav.elements && (
                                        <div
                                            className="absolute flex top-9 left-0 mt-2 bg-white z-20 shadow-md rounded-bl-2xl rounded-br-2xl max-h-0 max-w-0 overflow-hidden transition-all  origin-center duration-500 power2.inOut group-hover:max-h-[700px] group-hover:max-w-[1200px]"
                                            style={{ gridTemplateColumns: `repeat(${nav.columns},1fr)` }}
                                        >
                                            {nav.elements.map((el, index) => (
                                                <div key={index} className="flex max-w-fit">
                                                    {el.sols && el.sols.length > 0 && (
                                                        <ul className="flex flex-col  px-5 py-5">
                                                            <li className="text-sm font-semibold py-1">{el.heading}</li>
                                                            {el.sols.map((sol, solIndex) => (
                                                                <li key={solIndex} className="text-xs hover:font-semibold py-2 w-44">{sol}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sub List */}
                    <div className="flex justify-center max-sm:hidden items-center">
                        {subList.map((nav, i) => (
                            <div
                                key={i}
                                className="px-2 py-1 text-sm font-semibold cursor-pointer rounded-2xl hover:bg-black hover:text-white"
                            >
                                {nav}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <img className="h-[30px] hover:cursor-pointer" src={SearchIcon} alt="Search Icon" />
                        <img className="h-[30px] hover:cursor-pointer" src={CartIcon} alt="Cart Icon" />
                        <img className="h-[30px] hover:cursor-pointer" src={ProfileIcon} alt="Profile Icon" />
                    </div>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;


