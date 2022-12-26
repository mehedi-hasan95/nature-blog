import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Write from "../../Pages/Home/Write/Write";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home /> },
            { path: "write", element: <Write /> },
        ],
    },
]);

export default router;
