import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { DataContext } from "../../../Context/DataContext";
import { use } from "react";
import { FcFullTrash } from "react-icons/fc";

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
                        </i>
                        <div className="flex items-center justify-center">
                            <FcFullTrash />
                        </div>
                    </span>
                </td>
            </tr>
        );
    });

    return (
        <main>
            <h2 className="text-2xl font-bold text-center">All Books</h2>
            {currentBooks.length ? (
                <div>
                    {currentBooks.length > 100 && (
                        <p>
                            <em>Add a <Link to="/admin/books/add">new book</Link></em>
                        </p>
                    )}
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr>
                                <th width="px-4 py-2">Title</th>
                                <th width="px-4 py-2">Author</th>
                            </tr>
                        </thead>
                        <tbody>{booksJSX}</tbody>
                    </table>
                    <p>
                        Don't see a specific book? Add one{" "}
                        <Link to="/admin/books/add" className="hover:text-orange-900 font-bold">here!</Link>
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