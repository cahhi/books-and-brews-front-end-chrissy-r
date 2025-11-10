import React from "react";
import Coffee from '../../Photos/Coffee.gif';



const HomeAdmin = () => {

    return (
        <main>
            <div>
                <div className="text-4xl font-bold text-center">
                    <h1 >Welcome Admin!  
                    <img 
                    src={Coffee} 
                    alt="Gif of espresso cup with steam and stovetop espresso maker"
                    style={{width: "450px", height: "auto", display: "block", margin: "auto" }} />
                    </h1>
                    <p className="text-2xl">Please use the user menu to navigate!</p>
                </div>
            
            </div>
        </main>
    )
}

export default HomeAdmin;