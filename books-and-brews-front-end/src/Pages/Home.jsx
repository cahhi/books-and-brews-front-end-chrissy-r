import React from "react";
import TopSection from "./TopSection";
import BestSellers from "./BestSellers";
import RomanceBooks from "./RomanceBooks";
import ThrillerBooks from "./ThrillerBooks";
import HorrorBooks from "./HorrorBooks";
import FantasyBooks from "./FantasyBooks";
import Articles from "./Articles";


const Home = () => {
    return (
       <>
        <TopSection />
        <BestSellers />
        <RomanceBooks />
        <ThrillerBooks />
        <HorrorBooks />
        <FantasyBooks />
        <Articles />

       </>
    )
}

export default Home;