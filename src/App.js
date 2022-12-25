import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Components/Router/Router";

function App() {
    return (
        <div className="px-5">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
