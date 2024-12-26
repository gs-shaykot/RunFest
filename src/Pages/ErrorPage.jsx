import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <img className='w-7/12' src="https://i.ibb.co.com/wKGFs5q/20602785-6325254.jpg" alt="" />
            <NavLink to='/' className='font-bebas font-bold text-4xl underline'>Go to Home</NavLink>
        </div>
    );
};

export default ErrorPage;