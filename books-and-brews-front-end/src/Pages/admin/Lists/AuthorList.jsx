import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { DataContext } from "../../../Context/DataContext";
import { use } from "react";




const AuthorList = () => {

    const {allBooks, allAuthors, fetchAuthors} = use(DataContext);
    const [currentAuthors, setCurrentAuthors] = useState([...allAuthors]); 

    console.log(allAuthors);
    const getNumberOfBooksByAuthor = authorId => {
        return [...allBooks].filter(book => book.author.id === authorId).length;
    };

    useEffect(() => {
        setCurrentAuthors([...allAuthors]);
    }, [allAuthors]);

    let authorRowsJSX = currentAuthors.map(author => {
        let numberOfBooks = getNumberOfBooksByAuthor(author.id);

        const getViewBooksJSX = () => {
            return numberOfBooks ? (
                <Link  to='/admin/books' state={{currentAuthor: author}}>
                View {numberOfBooks} books
                </Link>
            ) : (
                ''
            );
        };

        return (
            <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.firstName}</td>
                <td>{author.lastName}</td>
                <td>{getViewBooksJSX}</td>
                <td>Delete</td> {/* Add the delete button once there */}
            </tr>
        );
    });

    return (

        <main>
            <h2>All Authors</h2>
            {currentAuthors.length ? (
                <div>
                    {currentAuthors.length > 10 && (
                        <p> 
                            Add a {' '}
                            <Link to='/admin/authors/add'>new author</Link>
                        </p>
                    )}
                    <table>
                        <thead>
                            <tr>
                                <th width='100px'>
                                    First Name
                                </th>
                                <th width='100px'>
                                    Last Name
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {authorRowsJSX}
                        </tbody>
                    </table>
                </div>
            ): (
                <p>
                    <em>No authors to display</em>
                </p>
            )}

        </main>
    );
        
    
};

export default AuthorList;