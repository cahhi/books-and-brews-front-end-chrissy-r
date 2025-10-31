import React from "react";
import { MdOutlineCoffeeMaker } from "react-icons/md";


const TopSection =() => {
    return (
         
        <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12"> 
            {/*This is for the content on the right side of the top section*/}
            <div className="md:w-1/2 w-full flez items-center md:justify-end">  {/*This helps to keep the bestseller */}
                <p>Placeholder for new book slideshow</p>
            </div>
            {/*This is for the content on the left side of the top section*/}
            <div className="md:w-1/2 w-full">
                <h1 className="text-2xl md:text-3xl font-medium mb-7 text-left">Check what's brewing in the New Releases this week! </h1>
                <p className="text-left mb-10"> Fall is upon us and it's time to welcome the perfect reading weather with new releases! Dive into new cozy fantasies, heart-dropping thrillers, steamy romances, or discover unsettling horrors - you're sure to find the perfect new book for you. Just make sure you pair it with a hot cup of coffee! </p>
            </div>

           
        </div>
    )
}

export default TopSection;