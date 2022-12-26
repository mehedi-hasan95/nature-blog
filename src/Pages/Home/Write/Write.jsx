import React from "react";
import { SlPlus } from "react-icons/sl";

const Write = () => {
    return (
        <div>
            <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="w-full h-[400px]"
                alt=""
            />
            <div className="relative pt-10">
                <form>
                    <div className="flex gap-5 items-center">
                        <label htmlFor="added">
                            <SlPlus className=" text-3xl font-bold cursor-pointer" />
                        </label>
                        <input
                            type="file"
                            name="file"
                            id="added"
                            className="hidden"
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
                        className="w-[85%] mt-5 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:rounded-md"
                    ></textarea>
                    <input
                        type="submit"
                        value="Publish"
                        className="bg-purple-400 px-4 py-2 rounded-lg absolute top-5 right-0"
                    />
                </form>
            </div>
        </div>
    );
};

export default Write;
