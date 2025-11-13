import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { DataContext } from "../../../Context/DataContext";
import { use } from "react";

const BookList = () => {
    const { allBooks, fetchBooks } = use(DataContext);
    const [currentBooks, setCurrentBooks] = useState([...allBooks]);

    useEffect(() => {
        setCurrentBooks([...allBooks]);
    }, [allBooks]);

    const deleteBook = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/books/delete/${id}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || `ERROR - Status ${response.status}`
                );
            } else {
                fetchBooks();
            }
        } catch (error) {
            console.error(error.message);
        } finally {
        }
    };

    const handleDelete = (id) => {
        let deleteConfirmed = confirm(
            `Are you sure you want to delete this book?`
        );
        if (deleteConfirmed) {
            deleteBook(id);
        }
    };

    let booksJSX = currentBooks.map((book) => {
        return (
            <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author.getFullName()}</td>
                <td className="delete">
                    <span onClick={() => handleDelete(book.id)}>
                        <i className="delete" title={`Delete ${book.title}`}>
                            Delete
                        </i>
                    </span>
                </td>
                <td></td>
            </tr>
        );
    });

    return (
        <main>
            <h2>All Books</h2>
            {currentBooks.length ? (
                <div>
                    {currentBooks.length > 10 && (
                        <p>
                            Add a <Link to="/admin/books/add">new book</Link>
                        </p>
                    )}
                    <table>
                        <thead>
                            <tr>
                                <th width="300px">Title</th>
                                <th width="300px">Author</th>
                            </tr>
                        </thead>
                        <tbody>{booksJSX}</tbody>
                    </table>
                    <p>
                        Don't see a specific book? Add one{" "}
                        <Link to="/admin/books/add">here!</Link>
                    </p>
                </div>
            ) : (
                <p>
                    <em>
                        No books to display. Add book{" "}
                        <Link to="/admin/books/add"> here.</Link>
                    </em>
                </p>
            )}
        </main>
    );
};

export default BookList;