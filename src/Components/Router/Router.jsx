import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Write from "../../Pages/Home/Write/Write";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
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
            {
                path: "/blog/:id",
                element: <Singlepage></Singlepage>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/api/post/${params.id}`),
            },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ],
    },
]);

export default router;
