import React from "react";
import Logo from '../Photos/BooksandBrewsLogo.jpg';


const About = () => {

    return (
        <main>
            <div className="text-4xl font-bold text-center py-5">
                <h1>Welcome to Books and Brews!</h1>
            </div>
            <div>
                <img src={Logo} alt="Books and Brews logo" style={{width: "350px", height: "auto", display: "block", margin: "auto", padding: "20px" }} />
            </div>
            <p>
              We are so glad you are here with us and want to extend our warmest welcome! Books and Brews was started by our founder Chrissy Holmes-Rodgers, a voracious reader and an avid book dragon, who started her reading journey at a very young age. She devoured books and was always caught underneath her covers with a reading light during bedtime. She always dreamed of opening her own brick-and-mortar books store, but when she saw how much it would cost to make the drem a reality, she pivoted and settled for an online one. Thus, that's how Books and Brews came to be. Combining her love of both a good book and a steamy cup of coffee, she wanted to create a website that mirrored the coziness of her favorite duo. She hand-selects the books, manages the new releases section, and even writes the featured articles!
            </p>
            <p>
                Looking forward to the future, she hopes to expand the website so that users can create and attend their own virtual bookclubs, allow users to request books that they wish to see, sponsor cozy author chats, and implement a feature where users can wishlist items in the store. Collabs are also in the future - for both authors and retailers! Watch out - a Books and Brews themed cup may be on the horizon! 
            </p>
            <p>
                We are so happy that you gave our small-business a click and hope that you become a part of the familu. We encourage you to subscribe to our newsletter for events, new products, and special offers. 
            </p>
            <p>
                Happy Reading!
            </p>

        </main>

      
    )
}

export default About;