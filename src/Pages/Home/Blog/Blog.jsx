import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import Sidebar from "../Sidebar/Sidebar";

const Blog = () => {
    const blogImage = "https://nature-blog-server.vercel.app/images/";
    const { search } = useLocation();
    const { data: postData, isLoading } = useQuery({
        queryKey: ["posts", search],
        queryFn: async () => {
            const res = await fetch(
                `https://nature-blog-server.vercel.app/api/post` + search
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) return <Loading />;

    return (
        <div className="grid grid-cols-4 gap-6 md:gap-12 lg:gap-20 pt-6 rounded-md shadow-sm relative">
            <div className="grid gird-cols-1 md:grid-cols-2 gap-10 col-span-full md:col-span-3">
                {postData?.map((data) => (
                    <div key={data._id}>
                        <img
                            className="w-full"
                            src={blogImage + data.photo}
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
                            <p className="text-ellipsis pt-4">
                                {data.desc.length > 300
                                    ? data.desc.substring(0, 300)
                                    : data.desc}
                            </p>
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
