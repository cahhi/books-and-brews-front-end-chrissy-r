import React from "react";
import { Link } from "react-router-dom";
import { FaGoogleDrive } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

//Add validation and error catches

const Register = () => {

        const [message, setMessage] = useState("");
    
        const handleError = () => {
            setMessage("Please enter a valid email/password!")
        }
    
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm() 
        const handleGoogleSignIn = () => {
            
        }

        

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-7 pt-4 pb-5 mb-4">
                <h2 className="text-xl font-semibold mb-4">Register Here</h2>

                <form onSubmit={handleSubmit()}>

                    {/* Asking for user's first name */}
                     <div className="mb-4">
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName" >First Name</label>
                       <input 
                       {...register("firstName", {required: true})}
                       type="firstname" name="firstName" id="firstName" placeholder="First Name" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus: shadow-outline"/>
                    </div>

                    {/* Asking for users last name */}
                    <div className="mb-4">
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName" >Last Name</label>
                       <input 
                       {...register("lastName", {required: true})}
                       type="lastname" name="lastName" id="lastName" placeholder="Last Name" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus: shadow-outline"/>
                    </div>

                    {/* Asking for user phone number */}
                     <div className="mb-4">
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone" >Phone Number</label>
                       <input 
                       {...register("phoneNumber", {required: true})}
                       type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus: shadow-outline"/>
                    </div>

                    {/* Asking for user birthday */}
                    <div className="mb-4">
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthday" >Birthday</label>
                       <input 
                       {...register("birthday")}
                       type="birthday" name="birthday" id="birthday" placeholder="Birthday" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus: shadow-outline"/>
                    </div>

                    {/* Asking users for email address */}
                    <div className="mb-4">
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >Email</label>
                       <input 
                       {...register("email", {required: true})}
                       type="email" name="email" id="email" placeholder="Email address" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus: shadow-outline"/>
                    </div>

                    {/* Asking users for password */}
                     <div className="mb-4">
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                       <input 
                        {...register("password", {required: true})}
                       type="password" name="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus: shadow-outline"/>
                    </div>
                     {
                    message && <p className="text-red-500 text-sm italic mb-3">{message}</p>
                    }
                    <div>
                        <button onClick={handleSubmit} className="bg-orange-900 hover:bg-orange-950 text-white font-bold py-2 px-8 rounded focus:outline-none cursor-pointer">Let's Go!</button>
                    </div>
                </form>
                <p className="align-baseline font-medium my-4 text-sm">Have an account? Log in <Link to="/login" className="text-yellow-600 hover:text=yellow-800">here.</Link></p>
               
                {/* Wanted to create a google sign in for users */}
                <div>
                    <button 
                    onClick={handleGoogleSignIn}
                    className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary fover: bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none cursor-pointer">
                        <FaGoogleDrive className="mr-2" />
                        Sign in with Google
                    </button>
                </div>
                <p className="mt-5 text-center text-gray-500 text-sm">@2025 Books and Brews. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Register;