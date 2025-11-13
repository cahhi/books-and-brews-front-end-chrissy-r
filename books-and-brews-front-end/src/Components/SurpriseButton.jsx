import React, { useState } from "react";
import Confetti from "react-confetti";
import '../Styles/SurpriseButton.css'

//added css animation for confetti button
const SurpriseButton = () => { //reusable component that offers users a surprise
    const [showConfetti, setShowConfetti] = useState(false);
    const handleClick =() => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 8000); //plays confetti for 8 seconds
    };


    return (
        <div >
            <button className="confetti-button relative right-4 -mt-11" onClick={handleClick}>
                Subscribe
            </button>
            {showConfetti && <Confetti />}
        </div>

    );
};

export default SurpriseButton;