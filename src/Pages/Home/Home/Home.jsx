import React from "react";
import Singlepage from "../../Singlepage/Singlepage";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";

const Home = () => {
    return (
        <div>
            <Banner />
            <Blog />
            <Singlepage />
        </div>
    );
};

export default Home;
