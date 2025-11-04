import React from "react";
import BooksandBrewsLogo from "../Photos/BooksandBrewsLogo.jpg";
import { Link } from "react-router";
import SurpriseButton from "./SurpriseButton";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="bg-amber-800 text-white py-10 px-4">

            {/* This will be my top section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/*This is going to be my left side - here I will add the logo  */}
                <div className="md:w-1/2 w-full ">
                <img src={BooksandBrewsLogo} alt="Books and Brews logo" className="mb-5 w-20 justify-left" />
                <ul className="flex flex-col md:flex-row gap-4">
                   <li><Link to="/" className="hover:text-amber-500">Home</Link></li>
                   <li><Link to="/about" className="hover:text-amber-400">About Us</Link></li>  
                </ul>
                </div>

                {/* This will be the right side and I want to create a subscribe button*/}
                <div className="md:w-1/2 w-full">
                    <p className="mb-4">
                        Subscribe to be a part of our newsletter!
                    </p>
                    <div className="flex">
                        <input 
                            type="email"
                            placeholder="Please enter your email"
                            className="w-full px-4 py-2 rounded-1-md text-black bg-white"
                        />
                        <SurpriseButton /> 
                    </div>
                </div>
            </div>
            
            {/* This will be the bottom section of my footer */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">

            {/* Wanted to add privacy links to the left side of my footer */}
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>

                {/* On the right side, I wanted to add my github and linkedIn since I will be adding this to my portfolio */}
                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/christannholmes/" target="_blank" className="hover:text-primary">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/cahhi" target="_blank" className="hover:text-primary">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;