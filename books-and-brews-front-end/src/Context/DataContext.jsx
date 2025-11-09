import { createContext, useEffect, useState } from "react";
import { Component } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    //set the initial state to true
    const [isLoading, setIsLoading]  = useState(true);

    //create three state variable to hold the data of books, genres, and authors and setting the intial state to null
    const [ allBooks, setAllBooks ] = useState(null);
    const [ allAuthors, setAllAuthors ] = useState(null);
    const [ allGenres, setAllGenres ] = useState(null);

    //defining three async functions that make calls to the API endpoints
    const fetchBooks = async () => {

        const books = [];

        
//i would recommend swtiching back to sampleBooks to avoid excess backtracking
        try{
            //const response = await fetch('./test-data/books.json');
            const response = await fetch('/books.json');
            const data = await response.json();

            setAllBooks(data); // store data in state
             console.log("Fetched books:", data);

            console.log(data);

        } catch(error) {
            console.error(error)

        } finally {
            setIsLoading(false); // mark loading complete

        }
    }
    //utilize the useEffect hook to ensure all three fetching funcitons are called when the component first loads
    useEffect(() => {
        fetchBooks();
     }, []);


    return <DataContext.Provider value={{allBooks, allAuthors, allGenres, isLoading}}>{children}</DataContext.Provider>
}