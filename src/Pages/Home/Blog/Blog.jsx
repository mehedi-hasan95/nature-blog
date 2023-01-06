import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Blog = () => {
    const {
        data: postData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/post`);
            const data = await res.json();
            return data;
        },
    });
    console.log(postData);
    return (
        <div className="grid grid-cols-4 gap-6 md:gap-12 lg:gap-20 pt-6 rounded-md shadow-sm relative">
            <div className="grid gird-cols-1 md:grid-cols-2 gap-10 col-span-full md:col-span-3">
                {postData?.map((data) => (
                    <div key={data._id}>
                        <img
                            className="w-full"
                            src="https://images.unsplash.com/photo-1611918126831-0a8352d6196f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        <div className="mt-5">
                            <div className="font-lora text-rose-400 flex gap-5 justify-center text-lg">
                                <span className=" cursor-default">Nature</span>
                                <span className=" cursor-default">Blog</span>
                            </div>
                            <div className="text-center text-2xl font-poppins font-semibold">
                                <Link to={`/blog/${data._id}`}>
                                    {data.title}
                                </Link>
                            </div>
                            <p className="text-center font-lobster">
                                {new Date(data.createdAt).toDateString()}
                            </p>
                            <p className="text-ellipsis pt-4">{data.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="space-y-2 col-span-full md:col-span-1">
                <Sidebar />
            </div>
        </div>
    );
};

export default Blog;
