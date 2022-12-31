import React from "react";
import { CgProfile } from "react-icons/cg";

const UpdateProfile = () => {
    return (
        <div>
            <div className="flex justify-between mt-10">
                <h2 className="text-3xl text-rose-400">Update Your Account</h2>
                <p className="text-red-800">Delete Account</p>
            </div>
            <form>
                <h2 className="text-xl pt-16">Profile Picture</h2>
                <div className="flex gap-5 items-center mt-7">
                    <img
                        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="h-20 w-20 rounded-xl"
                    />
                    <label htmlFor="profile">
                        <CgProfile className="text-3xl text-rose-400 cursor-pointer" />
                    </label>
                    <input
                        type="file"
                        name="profile"
                        id="profile"
                        className="hidden"
                    />
                </div>
                <label
                    htmlFor="username"
                    className="block mt-10 text-xl font-lora mb-4"
                >
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className=" border-b-2 border-b-gray-500 outline-none w-full"
                    placeholder="Your Username"
                />
                <label
                    htmlFor="email"
                    className="block mt-10 text-xl font-lora mb-4"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className=" border-b-2 border-b-gray-500 outline-none w-full"
                    placeholder="Your Email"
                />
                <label
                    htmlFor="password"
                    className="block mt-10 text-xl font-lora mb-4"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className=" border-b-2 border-b-gray-500 outline-none w-full"
                    placeholder="*******"
                />
                <input
                    type="submit"
                    value="Update Profile"
                    className="bg-purple-400 px-5 py-2 rounded-lg block mt-10 cursor-pointer text-white font-semibold"
                />
            </form>
        </div>
    );
};

export default UpdateProfile;
