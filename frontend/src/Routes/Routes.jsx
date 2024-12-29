import {
    createBrowserRouter,
} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

// import Main from "../Layout/Main";
// import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,

    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/contact",
        element: <Contact></Contact>
    },
]);