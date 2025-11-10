import React from "react";
import logo from '../Photos/BooksandBrewsLogo.jpg';
import {  href, Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import { BsBookmarkHeart } from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { useState } from "react";
import HomeAdmin from "../Pages/admin/HomeAdmin";


const userMenu = [
    { name: "Admin Home", href:"/admin/home" },
    { name: "Orders", href:"/orders" },
    { name: "Shopping Cart", href:"/cart" },
]


const Navbar = () => {
    const currentUser = true; //i am using this to test when a user is "logged in" or not
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   /*  console.log(isMenuOpen); used this to check in web dev tools that when I clicked on the user's icon while logged in that the drop down menu would be displayed */
    const [cartItems, setCartItems] = useState([]); /* Creating an empty array for the cart */

    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6"> {/*this is making sure that the content fits the sceen*/}
            <nav className="flex justify-between items-center"> {/*using tailwind CSS in order to place my navbar content*/ }
                {/*This will be the left side of my navbar*/}
                <div className="flex items-center md:gap-16 gap-4"> {/*using flex to place my search bar in the center and setting the gap between the icons for both default and medium devices*/}
                    <Link to="/">
                    <FaHome className="size-5"/> {/*set the width and heigh to 5*/}
                    </Link>
                </div>
                <div className="relative sm:w-72 w-40 space-x-2 "> {/*I am setting the items in the div to stay in the same position so it doesn't move while also taking into account small devices. "Space x" refers to the margins*/}
                    <FaBook className="absolute inline-block left-3 inset-y-1"/> {/*Setting the book icon to be absolute so it stays in place regardless of the device and setting it to be 3 spaces from the left*/}
                    <input type="text" placeholder="Search for books..." className="bg-[#D2691E] w-full py-.5 md:px-8 px-6 rounded-md focus:outline-none justify-center" /> {/*Syntax for the search bar and using tailwind to provide the padding specifications at both max-width and on a medium device*/}
                </div>
                {/*This will be the right side of my navbar*/}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <div>
                       {
                        currentUser ? <>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}> {/*Creating a callback function that will drop down the menu when the user clicks the icon*/}
                                <RiUserHeartLine className="size-6 cursor-pointer"/>
                            </button>
                            {/*Drop down menu for logged in user*/}
                            {isMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 shadow-lg rounded-md z-40">
                                   <ul className="py-2">
                                    {
                                        userMenu.map((menuItem) => (
                                            <li key={menuItem.name} onClick={() => setIsMenuOpen(false)}> {/*When the user clicks on an option from the dropdown menu it will close*/}
                                                <Link to={menuItem.href} className="block px-4 py-2 text-sm hover:bg-[#DAA520] cursor-pointer">
                                                    {menuItem.name}
                                                </Link>
                                            </li>
                                        ) )
                                    }
                                  </ul> 
                                </div>
                            )}
                        </> : <Link to='/login'><GrLogin className="size-6" /></Link> /*if the user is logged in, show different icon */
                       }
                    </div>
                    {/* <RiUser5Line className="size-6"/> */}
                    <button className="hidden sm:block">
                        <BsBookmarkHeart className="size-6"/>
                    </button>
                    
                    {/*orders doesnt exist, should this be here?*/}
                    <Link to="/orders" className="bg-[#A52A2A] p-1 sm:px-5 px-1 flex items-center rounded sm">
                        <TfiShoppingCartFull className="size-5"/>
                        <span className="text-sm font">0</span> {/*I want to show the number of items in the cart that a user has placed*/}
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar; //exporting Navbar component