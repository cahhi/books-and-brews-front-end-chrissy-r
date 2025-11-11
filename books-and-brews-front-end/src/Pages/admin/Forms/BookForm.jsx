import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { DataContext } from "../../../Context/DataContext";
import {BookDTO, DescriptionDTO} from '../../../Classes/exports';
import GenreCheckbox from "../../../Components/GenreCheckbox";
import FormInput from "../../../Components/FormInput";
import ErrorInput from "../../../Components/ErrorInput";
import FormSelect from "../../../Components/FormSelect";
import FormTextArea from "../../../Components/FormTextArea";


let startingBookData = { title: '', authorId: '', genreIds: [] };

let startingDescriptionData = {
    summary: '',
    salesPrice: '',
    originalPrice: '',
};

let errorMessage = {
    titleError: 'Please provide a book title!',
    authorError: 'Please provide an author',
    summaryError: 'Please provide a summary of the book.',
    salesPriceError: 'Please provide a sales price for the book',
    originalPriceError: 'Please procvide the original/retail price of the book',
    genreError: 'Please select a genre'
};



const BookForm = () => {

    const {allAuthors, allGenres, fetchBooks} = use(DataContext);

    const [bookData, setBookData] = useState(startingBookData);
    const [descriptionData, setDescriptionData] = useState(startingDescriptionData);
    const [checkboxes, setCheckboxes] = useState([]);
    const [hasErrors, setHasErrors] = useState(false);
    const bookAuthors = [...allAuthors];
    const bookGenres = [...allGenres];



    const navigate = useNavigate();

    const saveNewBook = async newBookDTO => {
        try {
            const response = await fetch('http://localhost:8080/api/books/add',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBookDTO),
            },
        );

        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(
                errorData.message || `ERROR - Status ${response.status}`,
            );
        }else {
            fetchBooks();
            navigate('/admin/books');
        }
        }catch(error){

        }finally{
            //want to give user confirmation if this worked or not
        }
    };

    const handleBookChange = e => {
        let updatedBookData = {
            ...bookData,
            [e.target.id]: e.target.value,
        };
        setBookData(updatedBookData);
    };

    const handleDescriptionChange = e => {
        let updatedDescriptionData = {
            ...descriptionData,
            [e.target.id]: e.target.value,
        };
        setDescriptionData(updatedDescriptionData);
    };
    const handleGenreChange = e => {
        let updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[e.target.value] = e.target.checked;
        setCheckboxes(updatedCheckboxes);
    };

    const handleSubmit = e => {
        e.preventDefault();
        checkboxes.forEach((checkbox, index) => {
            if(checkbox) bookData.genreIds.push(index);
        });

        let descriptionDTO = new DescriptionDTO(
            descriptionData.summary,
            descriptionData.salesPrice,
            descriptionData.originalPrice
        );
        
        let bookDTO = new BookDTO(
            bookData.title,
            bookData.authorId,
            bookData.genreIds,
            descriptionDTO,
        );

        if(!descriptionDTO.isValid() || !bookDTO.isValid()) {
            setHasErrors(true);
        }else {
            saveNewBook(bookDTO);
        }
    };

    let authorOptionsJSX = bookAuthors.map(author => {   
        return (
            <option key={author.id} id={author.id} value={author.id}>
                {author.firstName} {author.lastName}
            </option>
        );
    });

    let genreChoiceJSX = bookGenres.map(genre => {
        return (
            <GenreCheckbox
            id={genre.id}
            key={genre.id}
            name='genreIds'
            label={genre.title}
            isChecked={checkboxes[genre.id]||false}
            handleChange={handleGenreChange}
            />
        );
    });
    
    return (

        <main>
            <h1>Add a new book</h1>
            <form>
                <div>
                    <div>
                        {/* This is my book title input */}
                        <div className="">
                            <FormInput 
                                id='title'
                                label='Book Title:'
                                value={bookData.title}
                                handleChange={handleBookChange}
                            />
                            <ErrorInput 
                                hasError={hasErrors && bookData.title === ''}
                                msg={errorMessage['titleError']}
                            />
                        </div>
                        {/* This is my author input */}
                        <div>
                            <FormSelect id='authorId' label="Book Author: "handleChange={handleBookChange}>
                                <option value = ''>
                                    Select an author
                                </option>
                                {authorOptionsJSX}
                            </FormSelect>
                           <ErrorInput
                            hasError={
                                hasErrors && bookData.authorId === 0
                            } 
                            message={errorMessage['authorError']}
                           />
                        </div>
                         {/* This is my genre input */}
                        <div>
                            <h2>Genres: </h2>
                           <ErrorInput
                            hasError={
                                hasErrors && checkboxes.length === 0
                            } 
                            message={errorMessage['genreError']}
                           />
                            <div className="genreCheckboxes">
                                {genreChoiceJSX}

                            </div>
                        </div>
                        <div>
                        {/* This is my summary input */}
                        <FormTextArea 
                            id='summary'
                            label='Book Summary:'
                            value={descriptionData.summary}
                            handleChange={handleDescriptionChange}    
                        />
                        <ErrorInput
                            hasError={
                                hasErrors && descriptionData.summary === ''
                            } 
                            message={errorMessage['summaryError']}
                           />
                    </div>
                      <div>
                        {/* This is my sales price input */}
                        <FormInput 
                                id='salesPrice'
                                label='Sales Price:'
                                value={descriptionData.salesPrice}
                                handleChange={handleDescriptionChange}
                            />
                        <ErrorInput
                            hasError={
                                hasErrors && bookData.salesPrice === ''
                            } 
                            message={errorMessage['salesPriceError']}
                           />
                    </div>
                      <div>
                        {/* This is my original input */}
                        <FormInput 
                                id='originalPrice'
                                label='Original Price:'
                                value={descriptionData.originalPrice}
                                handleChange={handleDescriptionChange}
                            />
                        <ErrorInput
                            hasError={
                                hasErrors && descriptionData.originalPrice === ''
                            } 
                            message={errorMessage['originalPriceError']}
                           />
                    </div>
                </div>
            </div>

            <button type='submit' onClick={handleSubmit}>Add Book</button>
            </form>
            <button>View Books</button> 
        </main>
        //TODO: Create a buton 
    )

    
}

export default BookForm;