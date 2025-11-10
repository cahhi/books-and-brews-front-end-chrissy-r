import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Login from "../Components/Login.jsx";
import Register from "../Components/Register.jsx";
import HomeAdmin from "../Pages/admin/HomeAdmin.jsx";



const router = createBrowserRouter([ 
    {
        path: "/",
        element: <App />, //this is our entry point for our routes
        children: [
            { path: "/", element: <Home />//home route
            },
            {path: "/about", element: <About />,//about route
            },
            {path: "/contact", element: <div>Contact</div>,//contact route
            },
            {path: "/orders", element: <div>Orders</div>//orders route
            },
            {path: "/login", element: <Login />//login route
            },
            {path: "/register", element: <Register />//Register route
            },
            {path: "/admin/home", element: <HomeAdmin />   
            }
        ]
    },
]);

export default router;