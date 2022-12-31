import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Write from "../../Pages/Home/Write/Write";
import Singlepage from "../../Pages/Singlepage/Singlepage";
import UpdateProfile from "../../Pages/UpdateProfile/UpdateProfile";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home /> },
            { path: "write", element: <Write /> },
            { path: "update-profile", element: <UpdateProfile /> },
            { path: "/blog/:id", element: <Singlepage></Singlepage> },
        ],
    },
]);

export default router;
