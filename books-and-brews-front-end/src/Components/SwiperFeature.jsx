import React from "react"; 
import {Swiper, SwiperSlide} from "swiper/react"; //importing swiper react components
//importing swiper styles
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation";
//import the requiredmodules
import {Pagination, Navigation} from "swiper/modules";
import { useState } from "react";


const SwiperFeature = () => {
     const [books, setBooks] = useState([]);
     const filteredBooks = books.filter((book) => book.genre === "romance");

    return (

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
    )
}

export default SwiperFeature;