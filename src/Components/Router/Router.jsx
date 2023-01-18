import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
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
                    fetch(
                        `https://nature-blog-server.vercel.app/api/post/${params.id}`
                    ),
            },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "dashboard", element: <Dashboard /> },
        ],
    },
]);

export default router;
