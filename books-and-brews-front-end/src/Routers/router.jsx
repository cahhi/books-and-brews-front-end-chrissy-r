import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Login from "../Components/Login.jsx";
import Register from "../Components/Register.jsx";



const router = createBrowserRouter([ 
    {
        path: "/",
        element: <App />, //this is our entry point for our routes
        children: [
            {
                path: "/", //home route
                element: <Home />
            },
            {
                path: "/about", //about route
                element: <About />,
            },
            {
                path: "/contact", //contact route
                element: <div>Contact</div>,
            },
            {
                path: "/orders", //orders route
                element: <div>Orders</div>
            },
            {
                path: "/login", //login route
                element: <Login />
            },
            {
                path: "/register", //Register route
                element: <Register />
            }
        ]
    },
]);

export default router;