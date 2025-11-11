import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { DataContext } from "../../../Context/DataContext";
import { use } from "react";





const BookList = () => {

    const {allBooks, fetchBooks} = use(DataContext);
    const [currentBooks, setCurrentBooks] = useState([...allBooks]); 

    
    useEffect(() => {
        setCurrentBooks([...allBooks]);
    }, [allBooks]);

    let booksJSX = currentBooks.map(book => {

        return (
            <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author.getFullName()}</td>
                <td>
                    Delete
                </td>
            </tr>
        );
    });

    return (

                <main>
                    <h2>All Books</h2>
                    {currentBooks.length < allBooks.length && (
                        <p>
                            <em>
                                Displaying {currentBooks.length} of {' '} {allBooks.length} books.
                            </em>{' '}
                            <Link>
                            View All
                            </Link>
                        </p>
                    )}
                    <table>
                        <thead>
                            <tr>
                                <th width='100px'>
                                    Book Id                                     
                                </th>
                                <th width='300px'>
                                    Title
                                </th>
                                <th width='300px'> 
                                    Author
                                </th>
                            </tr>
                        </thead>
                        <tbody>{booksJSX}</tbody>
                    </table>
        
                </main>
    );
        
    
};

export default BookList;
