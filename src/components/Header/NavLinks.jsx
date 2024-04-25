import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const MegaMenuWithSlide = () => {
    const [dropdownState, setDropdownState] = useState({
        giftsKit: false,
        bodyCare: false,
        shopByCategory: false,
        community: false,
    });

    const toggleDropdown = (key, open) => {
        setDropdownState((prevState) => ({
            ...prevState,
            [key]: open,
        }));
    };


    return (
        <nav id='fiveItem' className="my-5 nav-links-container">
            <div className="container mx-auto">
                <ul className="nav-links">
                    <li className="relative group">
                        <Link href="#" className="text-lg">BUY 5 AT ₹999</Link>
                        <span className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                    </li>

                    <li className="relative group">
                        <Link href="#" className="text-lg">BUY ONE GET ONE FREE!</Link>
                        <span className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link href="#" className="text-lg">SANFE GIFT SET WITH RENEE</Link>
                        <span className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                    </li>
                    {/* Gifts Kit Dropdown */}
                    <li
                        className="relative"
                        onMouseEnter={() => toggleDropdown('giftsKit', true)}
                        onMouseLeave={() => toggleDropdown('giftsKit', false)}
                    >
                        <button className="py-2 relative flex items-center">
                           Gift Kits
                            <span
                                className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 ${dropdownState.giftsKit ? 'w-full' : 'w-0'}`}
                            />
                            <IoIosArrowDown />
                        </button>
                        <div
                            className={`options absolute bg-white text-black mt-2 rounded shadow-lg w-64 transition-opacity duration-300 ${dropdownState.giftsKit ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        >
                            {dropdownState.giftsKit && (
                                <div className="p-4 flex">
                                    <div className="w-1/2">
                                        <h4 className="font-bold">Category 1</h4>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 1</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 2</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 3</a>
                                    </div>
                                    <div className="w-1/2">
                                        <h4 className="font-bold">Category 2</h4>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 4</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 5</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 6</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                    {/* body care Dropdown */}
                    <li
                        className="relative"
                        onMouseEnter={() => toggleDropdown('bodyCare', true)}
                        onMouseLeave={() => toggleDropdown('bodyCare', false)}
                    >
                        <button className="py-2 relative flex items-center">
                            Body Care
                            <span
                                className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 ${dropdownState.bodyCare ? 'w-full' : 'w-0'}`}
                            /><IoIosArrowDown />
                        </button>
                        <div
                            className={`options absolute bg-white text-black mt-2 rounded shadow-lg w-64 transition-opacity duration-300 ${dropdownState.bodyCare ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        >
                            {dropdownState.bodyCare && (
                                <div className="p-4 flex">
                                    <div className="w-1/2">
                                        <h4 className="font-bold">Category 1</h4>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 1</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 2</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 3</a>
                                    </div>
                                    <div className="w-1/2">
                                        <h4 className="font-bold">Category 2</h4>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 4</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 5</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 6</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                    
                    {/* shopByCategory Dropdown */}
                    <li
                        className="relative"
                        onMouseEnter={() => toggleDropdown('shopByCategory', true)}
                        onMouseLeave={() => toggleDropdown('shopByCategory', false)}
                    >
                        <button className=" py-2 relative flex items-center">
                        SHOP BY CATEGORY
                            <span
                                className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 ${dropdownState.shopByCategory ? 'w-full' : 'w-0'}`}
                            /> <IoIosArrowDown />
                        </button>
                        <div
                            className={`options absolute bg-white text-black mt-2 rounded shadow-lg w-64 transition-opacity duration-300 ${dropdownState.shopByCategory ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        >
                            {dropdownState.shopByCategory && (
                                <div className="p-4 flex">
                                    <div className="w-1/2">
                                        <h4 className="font-bold">Category 1</h4>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 1</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 2</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 3</a>
                                    </div>
                                    <div className="w-1/2">
                                        <h4 className="font-bold">Category 2</h4>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 4</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 5</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 6</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={() => toggleDropdown('community', true)}
                        onMouseLeave={() => toggleDropdown('community', false)}
                    >
                        <button className=" py-2 relative flex items-center">
                            COMMUNITY
                            <span
                                className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 ${dropdownState.community ? 'w-full' : 'w-0'}`}
                            /><IoIosArrowDown />
                        </button>
                        <div
                            className={`options absolute bg-white text-black mt-2 rounded shadow-lg w-64 transition-opacity duration-300 ${dropdownState.community ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        >
                            {dropdownState.community && (
                                <div className="p-4 flex">
                                    <div className="w-1/2">
                                        <h4 className="font-bold">Category 1</h4>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 1</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 2</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 3</a>
                                    </div>
                                    <div className="w-1/2">
                                        <h4 className="font-bold">Category 2</h4>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 4</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 5</a>
                                        <a href="#" className="block py-1 hover:bg-gray-100">Item 6</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MegaMenuWithSlide;