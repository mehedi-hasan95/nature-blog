import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaPinterestSquare,
    FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";

const Sidebar = () => {
    const { data: category, isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const res = await fetch(
                `https://nature-blog-server.vercel.app/api/category`
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) return <Loading />;
    return (
        <div>
            <div>
                <h2 className="text-2xl py-4">About Us</h2>
                <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Deleniti facilis quasi, quibusdam nulla reprehenderit ipsum
                    rerum. Laudantium id cupiditate sint iure ipsam amet
                    sapiente quaerat repellendus corrupti vitae ipsum aliquam
                    maiores, error, eos odio nam sed praesentium neque ea
                    nesciunt eum ab maxime deserunt facere. Aliquid ab molestias
                    amet at.
                </p>
            </div>
            <div className="text-center pt-8">
                <h3 className=" uppercase font-mono text-xl border-t border-b w-[50%] mx-auto">
                    Categories
                </h3>
                <div className="grid grid-cols-2 gap-4 text-xl mt-8">
                    {category?.map((cat) => (
                        <Link to={`/?cat=${cat.categories}`} key={cat._id}>
                            {cat.categories}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="text-center pt-8">
                <h3 className=" uppercase font-mono text-xl border-t border-b w-[50%] mx-auto">
                    Social Links
                </h3>
                <div className="flex justify-center gap-4 text-xl mt-8">
                    <Link>
                        <FaFacebookSquare />
                    </Link>
                    <Link>
                        <FaInstagramSquare />
                    </Link>
                    <Link>
                        <FaPinterestSquare />
                    </Link>
                    <Link>
                        <FaTwitterSquare />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
