import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import {Zoom } from "react-awesome-reveal";

const ClientReviewSlider = () => {
    const reviews = [
        {
            name: "Richard Bravo",
            designation: "Marathon Enthusiast",
            rating: "★★★★★",
            review:
                "Running this marathon transformed my lifestyle. The community, the energy, and the challenge were unforgettable!",
            image: "https://i.ibb.co.com/4JT6XJL/r3.jpg",
        },
        {
            name: "Nathan Coleman",
            designation: "Fitness Trainer",
            rating: "★★★★★",
            review:
                "The marathon not only tests your limits but brings together a wonderful community of runners. Highly recommend joining!",
            image: "https://i.ibb.co.com/yQ6HV8R/r2.jpg",
        },
        {
            name: "Kelly Beavers",
            designation: "First-Time Runner",
            rating: "★★★★★",
            review:
                "I was nervous before my first marathon, but the organizers and fellow runners made it an amazing experience!",
            image: "https://i.ibb.co.com/105gv6j/r1.jpg",
        },
        {
            name: "Alex Morgan",
            designation: "Health Enthusiast",
            rating: "★★★★★",
            review:
                "The marathon helped me reconnect with my fitness journey. Running with thousands of people is pure magic!",
            image: "https://i.ibb.co.com/qjrMBmf/r4.jpg",
        },
    ];
    return (
        <Zoom>
            <div className="container mx-auto my-10">
                <h2 className="text-4xl font-bold text-center mb-8">What They Say</h2>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]} // Include the Autoplay module here
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                        delay: 2000, // 2 seconds delay
                        disableOnInteraction: false, // Autoplay will not stop on interaction
                    }}
                    className="mySwiper !py-7"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="shadow-md bg-gray-100">
                                <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 p-5">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-bold text-lg">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.designation}</p>
                                        <p className="text-yellow-500">{review.rating}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 p-5">{review.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Zoom>

    );
};

export default ClientReviewSlider;
