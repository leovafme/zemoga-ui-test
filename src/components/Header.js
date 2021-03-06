import React, { useState } from 'react';
import searchIco from '../assets/img/search.svg';
import {
    Link
} from "react-router-dom";

function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap p-6 header">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to="/" className="font-semibold text-xl tracking-tight">Rule of Thumb.</Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className={`w-full block lg:flex lg:items-end lg:w-auto ${menuActive ? "" : "hidden"} lg:block`}>
                    <div className="text-sm lg:flex-grow header--text-size">
                        <Link to="/past-trials" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-8">
                            Past Trials
                        </Link>
                        <Link to="/how-it-works" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-8">
                            How It Works
                        </Link>
                        <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200">
                            Log In 
                        </Link>
                        <span className="mx-2 text-white hidden lg:inline-block">/</span>
                        <Link to="/sign-up" className="block mt-4 mr-8 lg:inline-block lg:mt-0 text-white hover:text-teal-200">
                            Sign Up
                        </Link>

                        <img className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white header--button-search" src={searchIco} alt="search"></img>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;