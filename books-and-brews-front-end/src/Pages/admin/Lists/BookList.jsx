import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import { DataContext } from "../../../Context/DataContext";

const BookList = () => {
    
    const {allBooks} = use(DataContext);

    return (
        <div>
            This is the book list
        </div>
    )
}

export default BookList;
