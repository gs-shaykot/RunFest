import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper w-full h-[540px] md:h-[560px] p-7"
            >
                {/* First Slide */}
                <SwiperSlide className='w-full h-full bg-[url("https://i.ibb.co.com/PQ2JJSp/b1-min.jpg")] bg-no-repeat bg-cover bg-center'>
                    <div className='w-full h-full bg-[rgba(0,0,0,0.85)] text-white flex flex-col justify-center items-center md:items-stretch'>
                        {/* Bounce Effect */}
                        <motion.div
                            id='texts'
                            className="md:ml-20 bg-secondary bg-opacity-85 p-3 clip w-11/12 md:w-[600px]"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <div className='ml-3 md:ml-14 px-5'>
                                <h5>
                                    <span className="text-white">--------</span> Marathon Event
                                </h5>
                                <div className='text-3xl md:text-5xl py-4 mb-8 font-bebas h-24'>
                                    <h1>Run for a Cause: Join the Marathon</h1>
                                </div>
                                <p className='text-sm'>
                                    Be part of a community dedicated to promoting fitness, health, and charity. Join our marathon today!
                                </p>
                                <div className='flex flex-col md:flex-row gap-2 py-4'>
                                    <Link to='/allCamp' className='btn bg-primary border-0 text-black'>
                                        Explore More
                                    </Link>
                                    <Link to='/allCamp' className='btn border-primary bg-transparent hover:bg-primary hover:border-0 hover:text-black text-white'>
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SwiperSlide>

                {/* Second Slide */}
                <SwiperSlide
                    className='w-full h-full bg-[url("https://i.ibb.co.com/M2px8Rn/b2-min.jpg")] bg-no-repeat bg-cover bg-center'>
                    <div className='w-full h-full bg-[rgba(0,0,0,0.85)] text-white flex flex-col justify-center items-center md:items-stretch'>
                        {/* Bounce Effect */}
                        <motion.div
                            id='texts'
                            className="md:ml-20 bg-secondary bg-opacity-85 p-3 clip w-11/12 md:w-[600px]"
                            animate={{ x: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <div className='ml-3 md:ml-14 px-5'>
                                <h5><span className="text-white">--------</span> Marathon Event</h5>
                                <h1 className='text-3xl md:text-5xl py-4 font-bebas'>Run for Charity: Support a Cause</h1>
                                <p className='text-sm'>Lace up your shoes and run to raise funds for a meaningful cause. Your participation can make a real difference.</p>
                                <div className='flex flex-col md:flex-row gap-2 py-4'>
                                    <Link to='/allCamp' className='btn bg-primary border-0 text-black'>
                                        Explore More
                                    </Link>
                                    <Link to='/allCamp' className='btn border-primary bg-transparent hover:bg-primary hover:border-0 hover:text-black text-white'>
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SwiperSlide>

                {/* Third Slide */}
                <SwiperSlide
                    className='w-full h-full bg-[url("https://i.ibb.co.com/PD6D15y/b3-min.jpg")] bg-no-repeat bg-cover bg-center'>
                    <div className='w-full h-full bg-[rgba(0,0,0,0.85)] text-white flex flex-col justify-center items-center md:items-stretch'>
                        {/* Bounce Effect */}
                        <motion.div
                            id='texts'
                            className="md:ml-20 bg-secondary bg-opacity-85 p-3 clip w-11/12 md:w-[600px]"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <div className='ml-3 md:ml-14 px-5'>
                                <h5><span className="text-white">--------</span> Marathon Event</h5>
                                <h1 className='text-3xl md:text-5xl py-4 font-bebas'>Run for a Healthier Future</h1>
                                <p className='text-sm'>Push your limits, stay fit, and raise funds for critical health initiatives through our marathon event.</p>
                                <div className='flex flex-col md:flex-row gap-2 py-4'>
                                    <Link to='/allCamp' className='btn bg-primary border-0 text-black'>
                                        Explore More
                                    </Link>
                                    <Link to='/allCamp' className='btn border-primary bg-transparent hover:bg-primary hover:border-0 hover:text-black text-white'>
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
