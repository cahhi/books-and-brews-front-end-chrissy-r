import React from "react";
import coffeeandbooks from "../Photos/coffeeandbooks.jpg"
import fallreading from "../Photos/fallreading.jpg"
import horrorholiday from "../Photos/horrorholiday.webp"
import cookbook from "../Photos/cookbook.avif"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router";


const articles = [

    {
        "id": 1,
        "title": "Fall in love with these cozy reads",
        "description": "Fall in love with these top 10 reads for an idealistic fall season. ",
        "image": fallreading
    },

    {
        "id": 2,
        "title": "Coffee and a book!",
        "description": "See what books you should read next based on your go-to coffee order at Starbucks!",
        "image": coffeeandbooks
    },   

    {
        "id": 3,
        "title": "Holidays and Horror",
        "description": "Santa isn't the only thing that will haunt your halls this holiday season. Check out the top 10 holiday horrors sure to sleigh you all through the night!",
        "image": horrorholiday
    }, 

    {
        "id": 4,
        "title": "Feast and Read",                                                                                                                                      
        "description": "Immerse yourself into your favorite book series by checking out these themed cookbooks and making the food that your favorite character enjoys!",
        "image": cookbook
    }
]

const Articles = () => {

    return (

        <div className="py-16"> {/* Padding top and bottom will be 16 pixels */}
            <h2 className="text-3xl font-semibold mb-6">Articles</h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    
                        {
                            articles.map((item, index) =>(
                                <SwiperSlide key={index}>
                                    {/* This is where I will put my articles */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12">
                                        <div className="py-4">
                                            <Link to="/">
                                                <h3 className="text-lg font-medium hover:text-amber-900 mb-4">{item.title}</h3>
                                            </Link>
                                            <div className="w-10 h-[4px] bg-stone-700 mb-5"></div>
                                            <p className="text-sm text-stone-700">
                                                {item.description}
                                            </p>
                                            <div className="flex-shrink-0">
                                                <img src={item.image} alt="Image related to title" className="w-full object-cover"/>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                </Swiper>

        </div>
    )
}

export default Articles; 