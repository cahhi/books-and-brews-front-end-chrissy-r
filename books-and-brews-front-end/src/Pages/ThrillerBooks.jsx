// imported use context and context/data
import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useState } from "react";
import { useEffect } from "react";
import BookCard from "./Books/BookCard";
import {Swiper, SwiperSlide} from "swiper/react"; //importing swiper react components
//importing swiper styles
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation";
//import the requiredmodules
import {Pagination, Navigation} from "swiper/modules";

const ThrillerBooks = () => {

    //imports book data from datacontext
const { allBooks, isLoading } = useContext(DataContext);

  if (isLoading) return <p>Loading thriller books...</p>;
//established filteredbooks as allbooks port
 /*  const filteredBooks = allBooks.filter(
    (book) => (book.genre?.title || "") === "thriller"
  ); */

  const filteredBooks = allBooks.filter(
  (book) =>
    Array.isArray(book.genres) &&
    book.genres.some((genre) => genre.title?.toLowerCase() === "thriller")
);
    
    const [books, setBooks] = useState([]);

    /* const filteredBooks = books.filter((book) => book.genres.id === 3); */
    
    /* 
    useEffect(() => {
        fetch("sampleBooks.json").then(Response => Response.json()).then((data) => setBooks(data))
    }, []) */
    
        return(
            <div className="py-10">
                <h2 className="text-3xl font-semibold mb-6 text-left">Thriller</h2>

                      <Swiper
                            navigation={true}
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
                    filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                            <SwiperSlide key={index}>
                                <BookCard  book={book} />
                            </SwiperSlide>
                    ))
                }
                </Swiper>  
                 
    
            </div>
        )
    }

export default ThrillerBooks;