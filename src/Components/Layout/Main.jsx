import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../../Pages/NavMenu/NavMenu";

const Main = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
