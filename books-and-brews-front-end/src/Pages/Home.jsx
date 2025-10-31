import React from "react";
import TopSection from "./TopSection";
import BestSellers from "./BestSellers";
import RomanceBooks from "./RomanceBooks";
import ThrillerBooks from "./ThrillerBooks";


const Home = () => {
    return (
       <>
        <TopSection />
        <BestSellers />
        <RomanceBooks />
        <ThrillerBooks />

       </>
    )
}

export default Home;