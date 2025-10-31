import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BookCard from "./Books/BookCard";
import {Swiper, SwiperSlide} from "swiper/react"; //importing swiper react components
//importing swiper styles
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation";
//import the requiredmodules
import {Pagination} from "swiper/modules";
import { Navigation } from "swiper/modules";


const genres = ["Fiction", "Fantasy", "Romance", "Thriller", "Horror"]

const BestSellers = () => {

    const [books, setBooks] = useState([]);

    {/*Below, I am fetching the data from the sampleBooks.json, parsing the data as JSON, and then making sure the data is being read correctly by using DevTools to check the console.log for the array information */}
    useEffect(() => {
        fetch("sampleBooks.json").then(response => response.json()).then((data)=>setBooks(data))
    }, []);

    console.log(books);

    return(
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6 text-left">BestSellers</h2>
            <div>
                <select name="genre" id="genre">
                    {
                        genres.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))
                    }
                </select>
            </div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                        {
                            books.length > 0 && books.map((book, index) => (
                                    <SwiperSlide key={index}>
                                        <BookCard  book={book} />
                                    </SwiperSlide>
                            ))
                        }
                 </Swiper>
        

        </div>
    )
}

export default BestSellers;