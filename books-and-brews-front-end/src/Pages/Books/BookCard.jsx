import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { getBookCover } from "../../Classes/getBookCover";
import { Link } from "react-router-dom";
import { useEffect } from "react";



const BookCard = ({book}) => { {/*Using props to pass book data into the component*/}

/* useEffect(() => {
        fetch("sampleBooks.json").then(Response => Response.json()).then((data) => setBooks(data))
    }, []) */


const [count, setCount] = React.useState(1);
const [bookData, setbookData] = React.useState([]);

const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))

    if(cart){
     }else{
        cart=[{
            setBooks,
            quantity: count
        }]
        console.log(cart);
    }
}

    return (
        <div className="rounded-lg transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
                <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                    <Link to={`/books/${book.id}`}>
                        <img src={`${getBookCover(book.coverImage)}`} alt="" className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200" />
                    </Link>
                </div>

                <div>
                    <Link to={`/books/${book.id}`}> {/*When user clicks on the title of the book, it will take them to that specific book's page by using the id*/}
                        <h3 className = "text-xl font-semibold hover:text-blue-600 mb-3"> 
                            {book.title}
                        </h3>
                    </Link>
                    <p className="text-black-600 mb-5">{book.description?.summary}</p>
                    <p className="font-medium mb-5">
                        ${book.description.salesPrice}<span className="line-through font-normal ml-2">${book.description.originalPrice}</ span> {/*Added ? to make sure that */}
                    </p>
                    <button
                    onClick={() => {
                        addToCart();
                    }} 
                    className="cursor-pointer">
                        <FaShoppingBasket className="" />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default BookCard;