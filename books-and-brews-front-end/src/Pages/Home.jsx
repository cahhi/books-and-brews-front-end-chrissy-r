import React from "react";
import TopSection from "./TopSection";
import BestSellers from "./BestSellers";
import RomanceBooks from "./RomanceBooks";
import ThrillerBooks from "./ThrillerBooks";
import HorrorBooks from "./HorrorBooks";
import FantasyBooks from "./FantasyBooks";
import Articles from "./Articles";
import ExampleBooks from "./examplePage";

import { useContext } from "react";
import { DataContext } from "../Context/DataContext";


 const Home = () => {
     const { allBooks, isLoading } = useContext(DataContext);

     console.log(allBooks);
  if (isLoading) return <p>Loading books...</p>;
 
    return (
        
       <>
        <TopSection />
        <BestSellers />
        <RomanceBooks books={allBooks} />
        <ThrillerBooks books={allBooks}/>
        <HorrorBooks books={allBooks}/>
        <FantasyBooks books={allBooks}/>
        {/* <ExampleBooks /> */}
        <Articles />


        

       </>
    )
/*<section className="mt-8">
        <h2 className="text-xl font-bold">All Books</h2>
        <ul>
          {allBooks.map((book) => (
            <li key={book.id}>
              {book.title} — {book.author}
            </li>
          ))}
        </ul>
      </section>*/
}
export default Home; 