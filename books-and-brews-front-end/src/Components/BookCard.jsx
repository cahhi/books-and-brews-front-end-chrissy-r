import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { getBookCover } from "../Classes/getBookCover";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BookCard = ({ book }) => {
    {
        /*Using props to pass book data into the component*/
    }

    const [count, setCount] = React.useState(1);
    const [bookData, setbookData] = React.useState([]);

    return (
        <div className="rounded-lg transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
                <div className="sm:h-72 sm:flex-shrink-0 ">
                    {/* <img src={book.description.getImageURL()} alt={book.title + ' by' + book.author.getFullName()} className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200" /> */}
                    <img
                        src={`/${book.description.image || "nocover"}.png`} //setting the image to imageId or if none then default image
                        alt={book.title + " by" + book.author.getFullName()}
                        className="w-32 h-48 object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 "
                    />
                </div>

                <div>
                    <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                        {book.title}
                    </h3>

                    <p className="text-black-600 mb-5">
                        {book.description?.summary} {/* Can access the description object properties without recieving null - will recieve undefined */}
                    </p>
                    <p className="font-medium mb-5">
                        ${book.description.salesPrice}
                        <span className="line-through font-normal ml-2">
                            ${book.description.originalPrice}
                        </span>{" "}
                    </p>
                    <button
                        onClick={() => {
                            addToCart();
                        }}
                        className="cursor-pointer"
                    >
                        <FaShoppingBasket className="" />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;