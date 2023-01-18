import React, { useContext, useState } from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaPinterestSquare,
    FaSearch,
    FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const NavMenu = () => {
    const { user, dispatch } = useContext(authContext);
    const [navbar, setNavbar] = useState(false);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <nav className="w-full bg-white sticky top-0 z-50 mb-5">
            <div className="justify-between mx-auto lg:container md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="flex items-center gap-4 text-xl">
                            <FaFacebookSquare className="cursor-pointer" />
                            <FaTwitterSquare className="cursor-pointer" />
                            <FaPinterestSquare className="cursor-pointer" />
                            <FaInstagramSquare className="cursor-pointer" />
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black hover:text-indigo-200 text-xl uppercase">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-black hover:text-indigo-200 text-xl uppercase">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="text-black hover:text-indigo-200 text-xl uppercase">
                                <Link to="/contact">Contact</Link>
                            </li>
                            {user && (
                                <li className="text-black hover:text-indigo-200 text-xl uppercase">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                            )}
                            {/* <li className="text-black hover:text-indigo-200 text-xl uppercase">
                                <Link to="/write">Write</Link>
                            </li> */}
                            <li className="text-black hover:text-indigo-200 text-xl uppercase">
                                {user ? (
                                    <Link onClick={handleLogout}>Log Out</Link>
                                ) : (
                                    <Link to="/login">Login</Link>
                                )}
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 md:hidden">
                            {user ? (
                                <img
                                    className=" h-12 w-12 rounded-full"
                                    src={user?.profilePic}
                                    alt=""
                                />
                            ) : (
                                ""
                            )}
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    {user ? (
                        <img
                            className=" h-12 w-12 rounded-full"
                            src={user?.profilePic}
                            alt=""
                        />
                    ) : (
                        ""
                    )}
                    <FaSearch />
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;
