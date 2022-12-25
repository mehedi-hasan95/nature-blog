import React from "react";

const Banner = () => {
    return (
        <div className="relative">
            <div className="text-center z-10 relative">
                <h4 className="text-2xl">React App</h4>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-lora pt-3">
                    Blog
                </h2>
            </div>
            <img
                className=" -mt-4 lg:-mt-7 w-full md:h-[500px]"
                src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
            />
        </div>
    );
};

export default Banner;
