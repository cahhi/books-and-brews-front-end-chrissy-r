import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { DataContext } from "../../../Context/DataContext";
import { use } from "react";
import { FcFullTrash } from "react-icons/fc";




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

    /* const deleteAuthor = async id => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/authors/delete/${id}`,{
                    method: 'DELETE',
                },
            );
            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || `ERROR - Status ${response.status}`
                );
            }else {
                fetchAuthors(); 
            }

        }catch(error) {
            console.error(error.message);

        } finally {

        }
    };  */

    const handleDeleteAuthor = async id => {
        try {
            const bookResponse = await fetch(`http://localhost:8080/api/books/author/${id}`); //have to check and make sure that author not tied to a book
                if(!bookResponse.ok){
                    throw new Error(`Could not recieve books for author ${id}`);
                }
                const books = await bookResponse.json();
                if(books.length > 0) {
                    alert("You can not delete this author because of relationship with a book. Please delete the book and then the author.") //if author is tied to a boo, throw this error 
                    return;
                }

                const response = await fetch(`http://localhost:8080/api/authors/delete/${id}`,
                    {
                    method: 'DELETE'
                    }
                );

                if(!response.ok){
                    const errorData = await response.json();
                    throw new Error(
                        errorData.message || `ERROR - Status ${response.status}`,
                    );
                }else {
                    fetchAuthors();
                }

          
        }catch(error){

        }finally{

        }
    }

    const handleDelete = id => {
        let deleteConfirmed = confirm(
            `Do you want to delete this author? There's no going back!`
             //add the specific author 
         );
        if(deleteConfirmed) {
             handleDeleteAuthor(id);
        }
    }

     /*      const confirmation = confirm(`Are you sure you want to delete this author?
                Author: ${currentAuthors.find(author => author.id == id).getFullName()}
                `);
                if(confirmation){
                    handleDeleteAuthor(id);
                }
                const authorDeleteResponse = await fetch(`http://localhost:8080/api/authors/delete/${id}`,
                    {
                        method: 'DELETE',
                    }
                );
                if(!authorDeleteResponse.ok){
                    const errorData = await authorDeleteResponse.json();
                    throw new Error(
                        errorData.message || `ERROR - Status ${authorDeleteResponse.status}`,
                    );
                }else {
                    fetchAuthors(); 
                } */

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
                <td>{author.firstName}</td>
                <td>{author.lastName}</td>
                <td>{getViewBooksJSX}</td>
                <td className="delete">
                    <span onClick={() => handleDelete(author.id)}>
                        <i 
                        className='trashcan'
                        title={`Delete ${author.getFullName()}`}
                        ><FcFullTrash /> </i>
                    </span>
                    
                </td> {/* Add the delete button once there */}
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
                    <p>Don't see a specific author? Add one <Link to='/admin/authors/add'>here!</Link></p>
                </div>
            ): (
                <p>
                    <em>No authors to display. Add author <Link to='/admin/authors/add'> here.</Link></em>
                </p>
            )}

        </main>
    );
        
    
};

export default AuthorList;