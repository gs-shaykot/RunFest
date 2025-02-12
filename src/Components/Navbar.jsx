import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, LogOut, setUser } = useContext(AuthContext);
    const [scrolling, setScrolling] = useState(false);

    const SignOut = () => {
        LogOut()
            .then(res => {
                setUser();
                Swal.fire({
                    title: "Success",
                    text: "Logged Out Successfully",
                    icon: "success",
                });
            })
            .catch(error => {
                Swal.fire({
                    title: "ERROR",
                    text: error.message,
                    icon: "error",
                });
            });
    }; 
    // scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div  className={`bg-base-100 fixed top-0 w-full z-50 ${scrolling ? 'shadow-lg' : ''}`}>
            <div className={`container mx-auto navbar`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {user ? (
                            <ul tabIndex={0} className="z-10 menu menu-sm dropdown-content bg-base-100 rounded-sm mt-3 w-52 p-2 shadow">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/allMarathon'>Marathons</NavLink></li>
                                <li><NavLink to='/result'>Leaderboard</NavLink></li>
                                <li><NavLink to='/contact'>Contact Us</NavLink></li>
                                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            </ul>
                        ) : (
                            <ul tabIndex={0} className="z-10 menu menu-sm dropdown-content bg-base-100 rounded-sm mt-3 w-52 p-2 shadow">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/allMarathon'>Marathons</NavLink></li>
                                <li><NavLink to='/contact'>Contact Us</NavLink></li>
                                <li><NavLink to='/login'>Login</NavLink></li>
                                <li><NavLink to='/register'>Register</NavLink></li>
                            </ul>
                        )}
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-14 h-14' src="https://i.ibb.co.com/bPjkfDc/logo.gif" alt="" />
                        <NavLink to='/' className="text-3xl font-semibold font-bebas">RunFest</NavLink>
                    </div>
                </div>
                <div className="navbar-end flex items-center gap-4">
                    <ul className="menu menu-horizontal hidden lg:flex px-1 gap-2">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allMarathon'>Marathons</NavLink></li>
                        <li className={user?.email ? "block" : "hidden"}><NavLink to='/result'>Leaderboard</NavLink></li>
                        <li><NavLink to='/contact'>Contact Us</NavLink></li>
                        <li className={user?.email ? "block" : "hidden"}><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                    <div className="md:mr-2">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-8 md:w-10 rounded-full">
                                        <img referrerPolicy='no-referrer' alt="Avatar" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu bg-base-100 text-black menu-sm dropdown-content rounded-box z-30 mt-3 w-52 p-2 shadow">
                                    <li><a>{user?.displayName}</a></li>
                                    <li><a onClick={SignOut}>Logout</a></li>
                                </ul>
                            </div>
                        ) : (
                            <div className='gap-2 hidden md:flex'>
                                <NavLink to='/login' className='btn bg-primary text-white font-semibold'>LogIn</NavLink>
                                <NavLink to='/register' className='btn border-2 border-secondary bg-transparent font-semibold'>Register</NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
