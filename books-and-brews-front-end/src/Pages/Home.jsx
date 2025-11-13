import React from "react";
import TopSection from "./TopSection";
import BestSellers from "./BestSellers";
import RomanceBooks from "./RomanceBooks";
import ThrillerBooks from "./ThrillerBooks";
import HorrorBooks from "./HorrorBooks";
import FantasyBooks from "./FantasyBooks";
import Articles from "./Articles";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import HomeAdmin from "./admin/HomeAdmin";

const Home = () => {
    const { allBooks, isLoading } = useContext(DataContext);

    console.log(allBooks);
    if (isLoading) return <p>Loading books...</p>;

    return (
        <>
            <TopSection />
            <BestSellers />
            <RomanceBooks books={allBooks} />
            <ThrillerBooks books={allBooks} />
            <HorrorBooks books={allBooks} />
            <FantasyBooks books={allBooks} />
            <Articles />
        </>
    );
};
export default Home;
