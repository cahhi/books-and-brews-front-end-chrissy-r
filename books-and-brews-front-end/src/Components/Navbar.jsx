import React from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { RiUser5Line } from "react-icons/ri";
import { BsBookmarkHeart } from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";


const Navbar = () => {
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6"> {/*this is making sure that the content fits the sceen*/}
            <nav className="flex justify-between items-center"> {/*using tailwind CSS in order to place my navbar content*/ }
                {/*This will be the left side of my navbar*/}
                <div className="flex items-center md:gap-16 gap-4"> {/*using flex to place my search bar in the center and setting the gap between the icons for both default and medium devices*/}
                    <Link to="/">
                    <MdOutlineMenuOpen className="size-5"/> {/*set the width and heigh to 5*/}
                    </Link>
                </div>
                <div className="relative sm:w-72 w-40 space-x-2"> {/*I am setting the items in the div to stay in the same position so it doesn't move while also taking into account small devices. "Space x" refers to the margins*/}
                    <FaBook className="absolute inline-block left-3 inset-y-1"/> {/*Setting the book icon to be absolute so it stays in place regardless of the device and setting it to be 3 spaces from the left*/}
                    <input type="text" placeholder="Search for books..." className="bg-[#D2691E] w-full py-.5 md:px-8 px-6 rounded-md focus:outline-none" /> {/*Syntax for the search bar and using tailwind to provide the padding specifications at both max-width and on a medium device*/}
                </div>
                {/*This will be the right side of my navbar*/}
                <div>
                    <RiUser5Line className="size-6"/>
                    <button className="hidden sm:block">
                        <BsBookmarkHeart className="size-6"/>
                    </button>
                    <Link to="/orders">
                        <TfiShoppingCartFull className="size-6"/>
                        <span>0</span> {/*I want to show the number of items in the cart that a user has placed*/}
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar; //exporting Navbar component