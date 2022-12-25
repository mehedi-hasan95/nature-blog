import React from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaPinterestSquare,
    FaSearch,
    FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavMenu = () => {
    return (
        <div className="flex justify-between items-center my-5">
            <div className="flex items-center gap-4 text-xl">
                <FaFacebookSquare className="cursor-pointer" />
                <FaTwitterSquare className="cursor-pointer" />
                <FaPinterestSquare className="cursor-pointer" />
                <FaInstagramSquare className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-4 uppercase text-xl font-poppins">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/write">Write</Link>
                <Link to="/login">Login</Link>
            </div>
            <div className="flex items-center gap-4">
                <img
                    className=" h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                />
                <FaSearch />
            </div>
        </div>
    );
};

export default NavMenu;
