import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import Sidebar from "../Home/Sidebar/Sidebar";

const Singlepage = () => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    const [updateMode, setUpdateMode] = useState(false);

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

    // Update Post
    const [updateTitle, setUpdateTitle] = useState(title);
    const [updateDesc, setUpdateDesc] = useState(desc);
    const updatePost = () => {
        const data = {
            username: user.username,
            title: updateTitle,
            desc: updateDesc,
        };

        fetch(`http://localhost:5000/api/post/${_id}`, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                navigate("/");
                console.log("Success:", data);
            });
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
                                {updateMode ? (
                                    <input
                                        onChange={(e) =>
                                            setUpdateTitle(e.target.value)
                                        }
                                        type="text"
                                        id=""
                                        defaultValue={title}
                                        className="w-full border text-center p-2 outline-none border-violet-400 rounded-md"
                                    />
                                ) : (
                                    <>
                                        {title}
                                        {user?.username === username && (
                                            <div className="flex gap-5 lg:float-right">
                                                <FaEdit
                                                    onClick={() =>
                                                        setUpdateMode(true)
                                                    }
                                                    className="cursor-pointer text-green-700"
                                                />
                                                <MdDelete
                                                    onClick={deletePost}
                                                    className="cursor-pointer text-red-800"
                                                />
                                            </div>
                                        )}
                                    </>
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
                            {updateMode ? (
                                <textarea
                                    onChange={(e) =>
                                        setUpdateDesc(e.target.value)
                                    }
                                    id=""
                                    rows="8"
                                    defaultValue={desc}
                                    className="w-full p-4  border outline-none border-violet-400 rounded-md"
                                ></textarea>
                            ) : (
                                <>{desc}</>
                            )}
                        </p>
                        {updateMode && (
                            <>
                                <button
                                    onClick={() => setUpdateMode(false)}
                                    className="bg-purple-400 px-4 py-2 rounded-md mr-5"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={updatePost}
                                    className="bg-purple-400 px-4 py-2 rounded-md"
                                >
                                    Update
                                </button>
                            </>
                        )}
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
