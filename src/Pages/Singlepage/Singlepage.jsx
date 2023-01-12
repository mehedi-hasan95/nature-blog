import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import Sidebar from "../Home/Sidebar/Sidebar";

const Singlepage = () => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();
    const blogImage = "http://localhost:5000/images/";
    const { title, desc, createdAt, username, photo, _id } = useLoaderData();

    const deletePost = () => {
        const data = {
            username: user.username,
        };
        try {
            fetch(`http://localhost:5000/api/post/${_id}`, {
                method: "DELETE", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then(() => {
                    navigate("/");
                });
        } catch (error) {}
    };
    return (
        <div>
            <div className="grid grid-cols-4 gap-6 md:gap-12 lg:gap-20 pt-6 rounded-md shadow-sm relative">
                <div className="grid gird-cols-1 gap-10 col-span-full md:col-span-3">
                    {photo && (
                        <img
                            src={blogImage + photo}
                            className="w-full"
                            alt=""
                        />
                    )}
                    <div>
                        <div className="items-center">
                            <h2 className="text-center font-lora font-semibold text-2xl">
                                {title}
                                {user?.username === username && (
                                    <div className="flex gap-5 lg:float-right">
                                        <FaEdit className="cursor-pointer text-green-700" />
                                        <MdDelete
                                            onClick={deletePost}
                                            className="cursor-pointer text-red-800"
                                        />
                                    </div>
                                )}
                            </h2>
                        </div>
                        <div className="flex justify-between pt-5">
                            <h2 className="text-xl">
                                Author:{" "}
                                <Link
                                    to={`/?user=${username}`}
                                    className="font-bold text-blue-700"
                                >
                                    {username}
                                </Link>
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
