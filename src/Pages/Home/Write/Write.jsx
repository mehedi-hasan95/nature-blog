import axios from "axios";
import React, { useContext, useState } from "react";
import { SlPlus } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../../AuthProvider/AuthProvider";

const Write = () => {
    const navigate = useNavigate();
    const { user } = useContext(authContext);
    const [file, setFile] = useState(null);
    const submitPost = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const desc = form.message.value;

        const userPost = {
            username: user?.username,
            title,
            desc,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            userPost.photo = filename;
            try {
                await axios.post("http://localhost:5000/api/image", data);
            } catch (err) {}
        }
        try {
            const res = await axios.post(
                "http://localhost:5000/api/post",
                userPost
            );
            navigate("/blog/" + res.data._id);
        } catch (err) {}
    };
    return (
        <div>
            {file ? (
                <img
                    src={URL.createObjectURL(file)}
                    className="w-full h-[400px] rounded-2xl"
                    alt=""
                />
            ) : (
                <img
                    src="https://img.freepik.com/free-vector/thumbnail-design-with-mountain-landscape_1308-121802.jpg?w=1480&t=st=1673455975~exp=1673456575~hmac=a28dc4b779971413bd074818185ab3a08f57636e817c137871bd354b88da3d25"
                    alt=""
                    className="w-full h-[400px] rounded-2xl"
                />
            )}
            <div className="relative pt-10">
                <form onSubmit={submitPost}>
                    <div className="flex gap-5 items-center">
                        <label htmlFor="added">
                            <SlPlus className=" text-3xl font-bold cursor-pointer" />
                        </label>
                        <input
                            type="file"
                            name="file"
                            id="added"
                            className="hidden"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <input
                            type="text"
                            name="title"
                            id=""
                            placeholder="Title"
                            className="w-[85%] px-3 py-2 text-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:rounded-md"
                        />
                    </div>
                    <textarea
                        name="message"
                        id=""
                        rows="13"
                        placeholder="Tell your story..."
                        className="w-[85%] text-lg text-black mt-5 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:rounded-md"
                    ></textarea>
                    {user?.username ? (
                        <input
                            type="submit"
                            value="Publish"
                            className="bg-purple-400 px-4 py-2 rounded-lg absolute top-5 right-0 cursor-pointer"
                        />
                    ) : (
                        <Link to={"/login"}>
                            <input
                                type="submit"
                                value="Publish"
                                className="bg-purple-400 px-4 py-2 rounded-lg absolute top-5 right-0 cursor-pointer"
                            />
                        </Link>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Write;
