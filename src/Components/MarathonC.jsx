import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaHourglassEnd } from "react-icons/fa";
import { Zoom } from 'react-awesome-reveal';

const MarathonC = ({ marathon }) => {
    return (
        <Zoom>
            <div className="p-3 bg-gray-100 shadow-md rounded mb-6">
                <img className='w-full h-60 rounded-lg' src={marathon.image} alt="" />
                <div>
                    <h2 className="text-2xl font-semibold font-bebas py-3">{marathon.marathonTitle}</h2>
                    <div className='flex'>
                        <FaLocationDot className='text-xl mr-2 text-secondary' />
                        <p className="font-medium text-secondary pb-2">Location: {marathon.location}</p>
                    </div>
                    <div className='flex'>
                        <FaCalendarCheck className='text-xl mr-2 text-secondary' />
                        <p className="font-medium text-secondary pb-2">Event Date: {marathon.eventDate}</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex'>
                            <FaClock className='text-xl mr-2 text-secondary' />
                            <p className='font-medium mb-2'>Reg. Start:{marathon.registrationStart}</p>
                        </div>
                        <div className='flex'>
                            <FaHourglassEnd className='text-xl mr-2 text-secondary' />
                            <p className='font-medium'>Reg. End:{marathon.registrationEnd}</p>
                        </div>
                    </div>
                </div>
                <NavLink to={`/marathons/all/${marathon._id}`} className='btn bg-secondary hover:bg-gray-800 text-white my-4 w-full'>See Details</NavLink>
            </div>
        </Zoom>

    );
};

export default MarathonC;