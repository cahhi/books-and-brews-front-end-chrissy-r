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
import {Pagination, Navigation} from "swiper/modules";

const ThrillerBooks = () => {

    
    
    const [books, setBooks] = useState([]);
    const filteredBooks = books.filter((book) => book.genre === "thriller");
   
    

    useEffect(() => {
        fetch("sampleBooks.json").then(Response => Response.json()).then((data) => setBooks(data))
    }, [])
    
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