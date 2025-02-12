// make it responsive
import React from 'react';
import { FaCalendarCheck } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Bounce, Fade } from 'react-awesome-reveal';

const Upcoming = () => {
    const marathons = [
        {
            image: "https://i.ibb.co.com/Kwg3D5j/5.webp",
            marathonTitle: "City Marathon 2024",
            location: "New York, USA",
            eventDate: "2024-05-20",
            registrationStart: "2024-02-01",
            registrationEnd: "2024-04-30",
            ticketPrice: "$50",
            eventType: "International",
        },
        {
            image: "https://i.ibb.co.com/j4GkKrk/7.jpg",
            marathonTitle: "London Marathon 2024",
            location: "London, UK",
            eventDate: "2024-04-15",
            registrationStart: "2024-01-01",
            registrationEnd: "2024-03-31",
            ticketPrice: "$70",
            eventType: "National",
        },
        {
            image: "https://i.ibb.co.com/fDrC7Zy/9.jpg",
            marathonTitle: "Berlin Marathon 2024",
            location: "Berlin, Germany",
            eventDate: "2024-09-16",
            registrationStart: "2024-06-01",
            registrationEnd: "2024-08-31",
            ticketPrice: "$90",
            eventType: "International",
        },
        {
            image: "https://i.ibb.co.com/VN8MwR0/2.webp",
            marathonTitle: "Tokyo Marathon 2024",
            location: "Tokyo, Japan",
            eventDate: "2024-03-25",
            registrationStart: "2024-01-10",
            registrationEnd: "2024-03-01",
            ticketPrice: "$30",
            eventType: "International",
        },
        {
            image: "https://i.ibb.co.com/CKBF6r0/3.jpg",
            marathonTitle: "Paris Marathon 2024",
            location: "Paris, France",
            eventDate: "2024-04-10",
            registrationStart: "2024-01-15",
            registrationEnd: "2024-03-25",
            ticketPrice: "$10",
            eventType: "Charity",
        },
        {
            image: "https://i.ibb.co.com/Z2VQWxm/4.webp",
            marathonTitle: "Sydney Marathon 2024",
            location: "Sydney, Australia",
            eventDate: "2024-08-05",
            registrationStart: "2024-04-20",
            registrationEnd: "2024-07-15",
            ticketPrice: "$90",
            eventType: "Regional",
        },
    ];

    return (
        <div className="w-full">
            {/* px-4 */}
            <div className="container mx-auto py-10">
                <Bounce>
                    <h1 className="mt-5 font-bebas text-center text-4xl md:text-5xl font-semibold underline mb-8">
                        Upcoming Marathons
                    </h1>
                </Bounce>
                <Fade>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {marathons.map((data, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row bg-secondary rounded-lg shadow-lg overflow-hidden"
                            >
                                {/* Image Section */}
                                <div className="w-full md:w-4/12">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={data.image}
                                        alt={`${data.marathonTitle} poster`}
                                    />
                                </div>
                                {/* Details Section */}
                                <div className="w-full md:w-8/12 p-4 flex flex-col justify-between">
                                    <div>
                                        <h2 className="font-bebas text-2xl md:text-3xl text-primary mb-4">
                                            {data.marathonTitle}
                                        </h2>
                                        <div className="text-gray-300 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarCheck className="text-primary" />
                                                <span>Event Date: {data.eventDate}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaClock className="text-primary" />
                                                <span>
                                                    Registration: {data.registrationStart} -{" "}
                                                    {data.registrationEnd}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaPersonRunning className="text-primary" />
                                                <span>Category: {data.eventType}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaLocationDot className="text-primary" />
                                                <span>Location: {data.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Ticket Section */}
                                    <div className="mt-6">
                                        <h3 className="text-xl md:text-2xl font-bold text-white">
                                            Ticket Price:{" "}
                                            <span className="text-primary">{data.ticketPrice}</span>
                                        </h3>
                                        <button className="w-full btn bg-primary text-secondary hover:bg-secondary hover:text-primary hover:border-primary hover:border border-0 mt-4">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Upcoming;
