import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import axios from 'axios';

const EveDetail = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://assignment-11-server-green-kappa.vercel.app/marathons/all/${id}`, { withCredentials: true })
            .then(res => setData(res.data))
    }, [])
    const { image, marathonTitle, location, registrationStart, registrationEnd, eventDate, eventType, registrationFee, contactEmail, organizer, totalRegistrationCount } = data;
    const CurrentDate = new Date().toISOString().split('T')[0];
    const isRegistrationClosed = new Date(registrationEnd) <= new Date(CurrentDate);
    const remainingTime = Math.max(new Date(eventDate) - new Date(), 0);

    const { loader } = useContext(AuthContext);


    return (
        <div className='bg-base-100 text-secondary py-10'>
            {
                loader ? (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                ) : (
                    <div className={`container w-11/12 md:w-auto flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden p-6 mx-auto`}>
                        {/* Image Section */}
                        <div className="w-full md:w-1/3">
                            <img
                                src={image}
                                alt={marathonTitle}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Information Section */}
                        <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
                            <h2 className="text-2xl font-bold mb-2">{marathonTitle}</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                <p className="text-sm mb-1">Type: <span className="font-medium">{eventType}</span></p>
                                <p className="text-sm mb-1">Total Registration: <span className="font-medium">{totalRegistrationCount}</span></p>
                            </div>
                            <p className="mb-4">Running marathons improves cardiovascular health, boosts mental resilience, enhances endurance, promotes weight loss, and fosters a sense of accomplishment.</p>

                            <div className="mb-4">
                                <p className="text-base">Location: <span className="font-medium">{location}</span></p>
                                <p className="text-base">Event Date: <span className="font-medium">{eventDate}</span></p>
                                <p className="text-base">Registration Start: <span className="font-medium">{registrationStart}</span></p>
                                <p className="text-base">Registration End: <span className="font-medium">{registrationEnd}</span></p>
                                <p className="text-base">Registration Fee: <span className="font-medium">${registrationFee}</span></p>
                            </div>

                            <div className="pt-4 border-t">
                                <p className="text-base font-semibold">Organizer:</p>
                                <p className="font-medium"><span className='font-semibold'>Name: </span>{organizer}</p>
                                <p className="text-base"><span className='font-semibold'>Email: </span>{contactEmail}</p>
                            </div>

                            {/* Countdown Timer */}
                            <div className='grid grid-cols-1 md:grid-cols-2 place-items-start md:place-items-center'>
                                {!isRegistrationClosed && (
                                    <div className="mt-6 order-last 
                                            className='w-40 h-40'">
                                        <h3 className="text-lg font-semibold mb-2">Time Left to Register:</h3>
                                        <CountdownCircleTimer
                                            isPlaying
                                            duration={Math.ceil(remainingTime / 1000)}
                                            colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
                                            colorsTime={[remainingTime / 3000, remainingTime / 6000, 0]}
                                            onComplete={() => ({ shouldRepeat: false })}
                                        >
                                            {({ remainingTime }) => {
                                                const days = Math.floor(remainingTime / (24 * 3600));
                                                const hours = Math.floor((remainingTime % (24 * 3600)) / 3600);
                                                const minutes = Math.floor((remainingTime % 3600) / 60);
                                                const seconds = remainingTime % 60;
                                                return `${days}d ${hours}h ${minutes}m ${seconds}s`;
                                            }}
                                        </CountdownCircleTimer>
                                    </div>
                                )}
                                {/* Registration Button */}
                                <div className="mt-6">
                                    <NavLink
                                        state={{ eventData: data }}
                                        to={isRegistrationClosed ? '#' : '/eventReg'}
                                        className={`px-6 py-2 rounded-lg shadow focus:outline-none ${isRegistrationClosed ? 'bg-gray-500 text-gray-300 cursor-pointer' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                                        aria-disabled={isRegistrationClosed ? 'true' : 'false'}
                                    >
                                        {isRegistrationClosed ? 'Registration Closed' : 'Register Now'}
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default EveDetail;
