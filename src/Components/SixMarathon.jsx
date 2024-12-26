import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MarathonC from './MarathonC';
import { Bounce } from 'react-awesome-reveal';

const SixMarathon = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        axios.get('https://assignment-11-server-green-kappa.vercel.app/marathons/home')
            .then(response => {
                setMarathons(response.data);
            })
            .catch(error => {
                console.error("Error fetching marathons:", error);
            });
    }, []);

    return (
        <div className='container mx-auto'>
            <Bounce>
                <h1 className='mt-5 font-bebas text-center text-4xl md:text-5xl font-semibold underline mb-8'>
                    Running Marathons
                </h1>
            </Bounce>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    marathons.map((marathon) => (
                        <MarathonC key={marathon._id} marathon={marathon}></MarathonC>
                    ))
                }
            </div>
        </div>
    );
};

export default SixMarathon;
