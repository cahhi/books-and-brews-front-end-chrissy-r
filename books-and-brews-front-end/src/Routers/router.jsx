import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";

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
                element: <div>About</div>,
            },
            {
                path: "/contact", //contact route
                element: <div>Contact</div>,
            },
            {
                path: "/orders", //orders route
                element: <div>Orders</div>
            }
        ]
    },
]);

export default router;