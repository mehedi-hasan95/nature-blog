import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Sidebar from "../Home/Sidebar/Sidebar";

const Singlepage = () => {
    const { categories, title, desc, createdAt, username } = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-4 gap-6 md:gap-12 lg:gap-20 pt-6 rounded-md shadow-sm relative">
                <div className="grid gird-cols-1 gap-10 col-span-full md:col-span-3">
                    <img
                        src="https://images.unsplash.com/photo-1611918126831-0a8352d6196f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        className="w-full"
                        alt=""
                    />
                    <div>
                        <div className="items-center">
                            <h2 className="text-center font-lora font-semibold text-2xl">
                                {title}
                                <div className="flex gap-5 lg:float-right">
                                    <FaEdit className="cursor-pointer text-green-700" />
                                    <MdDelete className="cursor-pointer text-red-800" />
                                </div>
                            </h2>
                        </div>
                        <div className="flex justify-between pt-5">
                            <h2 className="text-xl">
                                Author:{" "}
                                <span className="font-bold">
                                    <Link to={`/?user=${username}`}>
                                        {username}
                                    </Link>
                                </span>
                            </h2>
                            <p>{new Date(createdAt).toDateString()}</p>
                        </div>
                        <p className="pt-10 first-letter:text-3xl first-letter:font-extrabold first-letter:pl-5 leading-7 ">
                            {desc}
                        </p>
                    </div>
                </div>
                <div className="space-y-2 col-span-full md:col-span-1">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Singlepage;
