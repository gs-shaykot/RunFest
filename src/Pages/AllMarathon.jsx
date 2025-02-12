// solve the issue at line 70 that saying Uncaught TypeError: AllMarathon.map is not a function
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Bounce, Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import useSecure from '../Hooks/useSecure';
import useLoadMarathon from '../Hooks/useLoadMarathon';

const AllMarathon = () => {
    const { loader, setLoader } = useContext(AuthContext);
    const axiossecure = useSecure()
    const { AllMarathon, isPending,isLoading } = useLoadMarathon()
    console.log(AllMarathon)


    const handleSortChange = (e) => {
        const sortType = e.target.value;
        console.log('Selected Sort Type:', sortType);
        fetchSortData(sortType);
    };

    const fetchSortData = (sortType) => {
        // setIsSorting(true);   

        axiossecure
            .get(`/marathons/all/sorted/${sortType}`)
            .then(response => {
                console.log('Sorted Data:', response.data);
                setMarathons(response.data);
            })
            .catch(error => {
                console.error('Error fetching sorted data:', error);
            });
    };


    return (
        <div className="container mx-auto p-4">
            <Helmet>
                <title>All-Marathon</title>
            </Helmet>
            <Bounce>
                <h1 className='mt-5 font-bebas text-center text-4xl md:text-5xl font-semibold underline mb-8'>
                    Running Marathons
                </h1>
            </Bounce>

            {/* Sort Button */}
            <div className="mb-6">
                <label htmlFor="sort" className="mr-2">Sort By:</label>
                <select
                    id="sort"
                    className="p-2 border rounded"
                    onChange={handleSortChange}
                >
                    <option value="" disabled selected>Select sort order</option>
                    <option value="ascending">Oldest to Newest</option>
                    <option value="descending">Newest to Oldest</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                ) : (
                    AllMarathon?.map(marathon => (
                        <Fade key={marathon._id}>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img
                                    src={marathon.image}
                                    alt={marathon.marathonTitle}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{marathon.marathonTitle}</h2>
                                    <p className="text-gray-600 mb-2">Location: {marathon.location}</p>
                                    <p className="text-gray-600 mb-4">
                                        Registration: {marathon.registrationStart} - {marathon.registrationEnd}
                                    </p>
                                    <NavLink
                                        to={`/marathons/all/${marathon._id}`}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                    >
                                        See Details
                                    </NavLink>
                                </div>
                            </div>
                        </Fade>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllMarathon;
