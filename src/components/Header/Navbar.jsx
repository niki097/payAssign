import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { IoClose } from "react-icons/io5";
import Topnav from './Topnav';
import MegaMenuWithSlide from './NavLinks';
import searchIcon from '../../assets/imgs/search-icon.svg';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

function Navbar() {
   
    const [activeLink, setActiveLink] = useState('');
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const location = useLocation();
 

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);


    const toggleSideDrawer = () => {
        setShowSideDrawer(!showSideDrawer);
    };

    // const closeSideDrawer = () => {
    //     setShowSideDrawer(false);
    // };

    const handleCloseSidebar=()=>{
        setShowSideDrawer(false);
    }
    return (
        <>
        <Topnav/>
        <div className="nav-container">
        <div className="navbar w-full bg-white navbar sticky top-0 z-10">
                <div className="navbar-start">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleSideDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <span>  <img src={searchIcon} alt="Search" className="search-icon" /></span>
                </div>
                <div className="navbar-center hidden lg:flex">
                <img src="//sanfe.in/cdn/shop/files/sanfe_logo_1_1.png?v=1641456006&width=130 130w, //sanfe.in/cdn/shop/files/sanfe_logo_1_1.png?v=1641456006&width=260 260w" alt="" />
                    {/* Add your navigation links here */}
                </div>
                <div className="navbar-end pl-2">
                <ul className="menu menu-horizontal px-1">
                        <li><Link to='/bestseller' className={activeLink === '/Best Sellers' ? 'active' : ''}><MdOutlineShoppingBag/></Link></li>
                        <li><Link to='/newarrivals' className={activeLink === '/New arrivals' ? 'active' : ''}><FaRegUser/></Link></li>
                    </ul>
                </div>
            </div>
            <MegaMenuWithSlide/>
        </div>
          
            {/* Side drawer */}
            <div className={`side-drawer bg-white text-black w-64 h-screen fixed top-0 left-0 transition duration-300 ease-in-out z-20 ${showSideDrawer ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="px-4 py-2">
                  <button onClick={handleCloseSidebar}> <IoClose/></button> 
                    <ul className="menu mt-6">
                        {/* Add your side drawer navigation links here */}
                        <li><Link to="/pooja" className="">Flat 50% off</Link></li>
                        <li>
                            <details>
                                <summary>Body Care</summary>
                                <ul className="p-2">
                                    <li><Link to="/Bodyscrub">Body scrub</Link></li>
                                    <li><Link to="/BodyWash">Body Wash</Link></li>
                                    <li><Link to="/BodyCream">Body Cream</Link></li>
                                  
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/freekundli" className="text-black">Body scrub </Link></li>
                        <li><Link to="/panchang" className="text-black">Body wash</Link></li>
                        <li><Link to="/shop" className="text-black">Shop</Link></li>
                        <li><Link to="/aboutus" className="text-black">About Us</Link></li>
                        <li><Link to="/contact" className="text-black">Contact</Link></li>
                    </ul>
                </div>
            </div>
            
        </>
    );
}

export default Navbar;
