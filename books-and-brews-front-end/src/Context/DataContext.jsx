import { createContext, useEffect, useState } from "react";
import { Author, Genre, Description, Book } from '../Classes/exports';
import { Component } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    //set the initial state to true
    const [isLoading, setIsLoading]  = useState(true);

    //create three state variable to hold the data of books, genres, and authors and setting the intial state to null
    const [ allBooks, setAllBooks ] = useState([]); 
    const [ allAuthors, setAllAuthors ] = useState([]);
    const [ allGenres, setAllGenres ] = useState([]);

    //defining three async functions that make calls to the API endpoints
    const fetchBooks = async () => {

        const books = [];

        
//i would recommend swtiching back to sampleBooks to avoid excess backtracking
        try{
            //const response = await fetch('./test-data/books.json');
            /* const response = await fetch('/books.json'); */
            const response = await fetch('/api/books');
            const data = await response.json();

            setAllBooks(data); // store data in state
             //console.log("Fetched books:", data); used this to cosnole log data and make sure that calling from API correctly

             data.forEach(book => {
                let author = new Author(book.author.id, book.author.firstName, book.author.lastName);
                let genres = [];
                book.genres.forEach(genre => { 
                    genres.push(new Genre(genre.id, genre.title))
                })
                let description = new Description(
                    book.description.id,
                    book.description.summary,
                    book.description.salesPrice,
                    book.description.originalPrice
                );

                let newBook = new Book(book.id, book.title, author, genres, description); //creating a newBook object that I can use anywhere in my code
                books.push(newBook);
             });
              setAllBooks(books);

        } catch(error) {
            console.error(error)
            

        } finally {
            setIsLoading(false); // mark loading complete
            setAllBooks(books);

        }
    };

    //modeling this after fetchBooks
    const fetchAuthors = async () => {

        const authors = [];

        try {
            const response = await fetch('/api/authors');
            const data = await response.json();

            data.forEach(author => {
                let newAuthor = new Author(
                    author.id,
                    author.firstName,
                    author.lastName,
                )
                authors.push(newAuthor);
            });

        } catch(error) {
            console.error(error);
            

        }finally {
            setIsLoading(false);
            setAllAuthors(authors);

        }
    };

    //genre which is modeled after fetchAuthors
    const fetchGenres = async () => {
        const genres = [];

        try {
            const response = await fetch('/api/genres');
            const data = await response.json();

            data.forEach(genre => {
                let newGenre = new Genre(
                    genre.id,
                    genre.title,
                )
                genres.push(newGenre);
            });

        }catch(error) {
            console.error(error);

        }finally {
            setIsLoading(false);
            setAllGenres(genres);
        }
    }


        
    //utilize the useEffect hook to ensure all three fetching funcitons are called when the component first loads
    useEffect(() => {
        fetchBooks();
        fetchAuthors();
        fetchGenres();
     }, []);

     //checking that the state variables for holding data are not null and that this hook executes anytime that a change is detected 


    return <DataContext.Provider value={{isLoading, allBooks, allAuthors, allGenres, fetchGenres, fetchAuthors, fetchBooks}}>{children}</DataContext.Provider>
     
    /* return <DataContext.Provider value={{allBooks, allAuthors, allGenres, isLoading}}>{children}</DataContext.Provider> */
}