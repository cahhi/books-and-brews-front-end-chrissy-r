import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { DataContext } from "../../../Context/DataContext";
import { use } from "react";
import { FcFullTrash } from "react-icons/fc";
import "../../../App.css";
import { RiSave3Line } from "react-icons/ri";

const AuthorList = () => {
    const { allBooks, allAuthors, fetchAuthors } = use(DataContext);
    const [currentAuthors, setCurrentAuthors] = useState([...allAuthors]);
    const [errorMessage, setErrorMessge] = useState("");

    const getNumberOfBooksByAuthor = (authorId) => {
        return [...allBooks].filter((book) => book.author.id === authorId)
            .length;
    };

    useEffect(() => {
        setCurrentAuthors([...allAuthors]);
    }, [allAuthors]);

    const handleDeleteAuthor = async (id) => {
        try {
            const bookResponse = await fetch(
                `http://localhost:8080/api/books/author/${id}`
            ); //have to check and make sure that author not tied to a book
            if (!bookResponse.ok) {
                throw new Error(`Could not recieve books for author ${id}`);
            }
            const books = await bookResponse.json();
            if (books.length > 0) {
                setErrorMessge(
                    "You can not delete this author because of relationship with a book. Please delete the book and then the author."
                ); //if author is tied to a boo, throw this error
                return;
            }

            const response = await fetch(
                `http://localhost:8080/api/authors/delete/${id}`,
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
                fetchAuthors();
            }
        } catch (error) {
        } finally {
        }
    };

    const handleDelete = (id) => {
        let deleteConfirmed = confirm(
            `Do you want to delete this author? There's no going back!`
            //add the specific author
        );
        if (deleteConfirmed) {
            handleDeleteAuthor(id);
        }
    };

    const updateAuthor = async (id, updateAuthorData) => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/authors/update/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updateAuthorData),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || `ERROR - Status ${response.status}`
                );
            } else {
                fetchAuthors();
            }
        } catch (error) {
        } finally {
        }
    };

    let authorRowsJSX = currentAuthors.map((author) => {
        let numberOfBooks = getNumberOfBooksByAuthor(author.id);

        const getViewBooksJSX = () => {
            return numberOfBooks ? (
                <Link to="/admin/books" state={{ currentAuthor: author }}>
                    View {numberOfBooks} books
                </Link>
            ) : (
                ""
            );
        };

        return (
            <tr key={author.id}>
                <td>
                    <input
                        type="text"
                        defaultValue={author.firstName}
                        onBlur={(e) =>
                            updateAuthor(author.id, {
                                firstName: e.target.value,
                                lastName: author.lastName,
                            })
                        }
                    />
                </td>
                <td className>
                    {/* Created a text box to handle on change for both first and last name */}
                    <input
                        type="text"
                        defaultValue={author.lastName}
                        onBlur={(e) =>
                            updateAuthor(author.id, {
                                firstName: author.firstName,
                                lastName: e.target.value,
                            })
                        }
                    />
                </td>
                <td className="save">
                    <span
                        onClick={() =>
                            updateAuthor(author.id, {
                                firstName: author.firstName,
                                lastName: author.lastName,
                            })
                        }
                    >
                        <i
                            className="save"
                            title={`Save ${author.getFullName()}`}
                        >
                            <div className="flex items-center justify-center">
                                <RiSave3Line />{" "}
                            </div>
                        </i>
                    </span>
                </td>
                <td className="delete">
                    <span onClick={() => handleDelete(author.id)}>
                        <i
                            className="trashcan"
                            title={`Delete ${author.getFullName()}`}
                        >
                            <div className="flex items-center justify-center">
                                <FcFullTrash />
                            </div>
                        </i>
                    </span>
                    {errorMessage && <p>{errorMessage}</p>}
                </td>
            </tr>
        );
    });

    return (
        <main>
            <h2 className="text-2xl font-bold text-center">All Authors</h2>
            {currentAuthors.length ? (
                <div>
                    {currentAuthors.length > 100 && (
                        <p>
                            Add a{" "}
                            <Link to="/admin/authors/add" className="hover:text-orange-900 ">new author</Link>
                        </p>
                    )}
                    <table>
                        <thead>
                            <tr>
                                <th width="100px">First Name</th>
                                <th width="100px">Last Name</th>
                            </tr>
                        </thead>
                        <tbody>{authorRowsJSX}</tbody>
                    </table>
                    <p>
                        Don't see a specific author? Add one{" "}
                        <Link to="/admin/authors/add">here!</Link>
                    </p>
                </div>
            ) : (
                <p>
                    <em>
                        No authors to display. Add author{" "}
                        <Link to="/admin/authors/add"> here.</Link>
                    </em>
                </p>
            )}
        </main>
    );
};

export default AuthorList;