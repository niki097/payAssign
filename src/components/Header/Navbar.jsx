import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import SearchBar from './Searchbar';
import { IoClose } from "react-icons/io5";


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
            <div className="navbar px-8 w-full bg-white navbar shadow-md hover:shadow-lg focus:shadow-xl sticky top-0 z-10">
                <div className="navbar-start">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleSideDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <Link className={"text-xl" + (activeLink === '/' ? ' active' : '')} to='/' >LOGO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                <SearchBar placeholder="Search" />
                    {/* Add your navigation links here */}
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/bestseller' className={activeLink === '/Best Sellers' ? 'active' : ''}>Best Sellers</Link></li>
                        <li><Link to='/newarrivals' className={activeLink === '/New arrivals' ? 'active' : ''}>New Arrivals</Link></li>
                    </ul>
                </div>
                <div className="navbar-end pl-2">
                    <button className="nav_login_btn"><Link to='/signup'>Login</Link></button>
                </div>
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
            
           

            <div className="more_nav_links w-full mx-auto px-4 ">
                <div className="">
                    <div className="flex flex-col md:flex-row justify-evenly md:space-x-4 items-center">
                        <Link to="/pooja" className="">Flat 50% off</Link>
                        <ul className="menu menu-horizontal leading-normal">
                        <li className="more_nav_links_dropdown">
                            <details>
                                <summary>Body Care</summary>
                                <ul className="z-10">
                                    <li><Link to='/' className={activeLink === '/Bodyscrub' ? 'active' : ''}>Body scrub</Link></li>
                                    <li><Link to='/' className={activeLink === '/BodyWash' ? 'active' : ''}>Body Wash</Link></li>
                                    <li><Link to='/' className={activeLink === '/BodyWash' ? 'active' : ''}>Body Cream</Link></li>
                                    <li><Link to='/' className={activeLink === '/BodyWash' ? 'active' : ''}>Body Cream</Link></li>
                                    <li><Link to='/' className={activeLink === '/BodyWash' ? 'active' : ''}>Body Cream</Link></li>
                                </ul>
                            </details>
                        </li>
                        </ul>
                        {/* Add other links */}
                        <Link to="/freekundli" className="">Fashion</Link>
                        <Link to="/panchang" className="">Gift Ideas</Link>
                        <Link to="/shop" className="">Home & Kitchen</Link>
                        <Link to="/aboutus" className="">Sell</Link>
                        <Link to="/contact" className="">Electronics</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
