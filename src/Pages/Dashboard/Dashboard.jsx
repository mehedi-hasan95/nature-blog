import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../Components/Loading/Loading";

const Dashboard = () => {
    const { user } = useContext(authContext);

    // Add Post
    const {
        data: userPost,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
            const res = await fetch(
                `https://nature-blog-server.vercel.app/api/post/${user.username}/posts`
            );
            const data = await res.json();
            return data;
        },
    });

    const blogSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.files.files[0];
        const title = form.title.value;
        const categories = form.cat.value;
        const headding = form.mainHeadding.value;
        const desc = form.sortDesc.value;
        const message = form.message.value;

        form.reset();

        const uploadImage = "d1445eeabe3574dc24041179a4e9edef";
        const formData = new FormData();
        formData.append("image", photo);
        const url = `https://api.imgbb.com/1/upload?key=${uploadImage}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const data = {
                        photo: imgData.data.url,
                        title,
                        categories,
                        headding,
                        desc,
                        message,
                        username: user?.username,
                    };
                    fetch("https://nature-blog-server.vercel.app/api/post/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            refetch();
                        });
                }
            });
    };

    if (isLoading) return <Loading />;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className=" shadow-md px-5 py-3">
                <form onSubmit={blogSubmit}>
                    <fieldset className="w-full space-y-1 dark:text-gray-100">
                        <label
                            htmlFor="files"
                            className="block text-sm font-medium"
                        >
                            Attachments
                        </label>
                        <div className="flex">
                            <input
                                type="file"
                                name="files"
                                id="files"
                                className="px-8 py-12 border-2 border-dashed rounded-md w-full mb-5"
                            />
                        </div>
                    </fieldset>
                    <input
                        type="text"
                        name="title"
                        id=""
                        className="border block w-full mb-5 px-4 py-3 border-black"
                        placeholder="Blog Title"
                    />
                    <input
                        type="text"
                        name="cat"
                        id=""
                        className="border block w-full mb-5 px-4 py-3 border-black"
                        placeholder="Category"
                    />
                    <input
                        type="text"
                        name="mainHeadding"
                        id=""
                        className="border block w-full mb-5 px-4 py-3 border-black"
                        placeholder="Main Headding"
                    />
                    <input
                        type="text"
                        name="sortDesc"
                        id=""
                        className="border block w-full mb-5 px-4 py-3 border-black"
                        placeholder="Short Desc"
                    />
                    <textarea
                        name="message"
                        id=""
                        rows="10"
                        className="border border-black w-full block px-4 py-3"
                        placeholder="Description"
                    ></textarea>
                    <input
                        className="px-4 py-2 mt-5 bg-violet-500 rounded-lg text-white cursor-pointer"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-2 gap-5">
                    {userPost?.map((data) => (
                        <div
                            key={data._id}
                            className=" shadow-md px-5 rounded-lg"
                        >
                            <img className="w-full" src={data.photo} alt="" />
                            <div className="mt-5">
                                <div className="font-lora text-rose-400 flex gap-5 justify-center text-lg">
                                    {data.categories?.map((cat) => (
                                        <>
                                            <span className=" cursor-default">
                                                Nature
                                            </span>
                                        </>
                                    ))}
                                </div>
                                <div className=" text-2xl font-poppins font-semibold">
                                    <Link to={`/blog/${data._id}`}>
                                        {data.title}
                                    </Link>
                                </div>
                                <div className=" text-2xl font-poppins font-semibold">
                                    <Link to={`/blog/${data._id}`}>
                                        {data.headding}
                                    </Link>
                                </div>

                                <p className="text-ellipsis pt-4">
                                    {data.desc.length > 300
                                        ? data.desc.substring(0, 300)
                                        : data.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
