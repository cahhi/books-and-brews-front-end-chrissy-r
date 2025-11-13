import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Login from "../Components/Login.jsx";
import Register from "../Components/Register.jsx";
import HomeAdmin from "../Pages/admin/HomeAdmin.jsx";
import AuthorForm from "../Pages/admin/Forms/AuthorForm.jsx";
import AuthorList from "../Pages/admin/Lists/AuthorList.jsx";
import BookList from "../Pages/admin/Lists/BookList.jsx";
import BookForm from "../Pages/admin/Forms/BookForm.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, //this is our entry point for our routes
        children: [
            {
                path: "/",
                element: <Home />, //home route
            },
            {
                path: "/about",
                element: <About />, //about route
            },
            {
                path: "/contact",
                element: <div>Contact</div>, //contact route
            },
            {
                path: "/orders",
                element: <div>Orders</div>, //orders route
            },
            {
                path: "/login",
                element: <Login />, //login route
            },
            {
                path: "/register",
                element: <Register />, //Register route
            },
            { path: "/admin/home", element: <HomeAdmin /> },
            { path: "/admin/authors", element: <AuthorList /> },
            { path: "/admin/authors/add", element: <AuthorForm /> },
            { path: "/admin/books", element: <BookList /> },
            { path: "/admin/books/add", element: <BookForm /> },
        ],
    },
]);

export default router;
