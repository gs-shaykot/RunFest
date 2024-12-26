import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import theGif from "./../assets/lottie/ani2.json";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import axios from "axios";

const LogIn = () => {

    const { logInUser, logInGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const { email, password } = initialData;

        logInUser(email, password)
            .then(res => {
                Swal.fire({
                    title: "Succeess",
                    text: "User Created Successfully",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/')
                const user = { Name: res.user.displayName, email: email }
                axios.post('https://assignment-11-server-green-kappa.vercel.app//jwt', user, { withCredentials: true })
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error"
                });
            })
    };

    const handleGoogleLogin = () => {
        logInGoogle()
            .then(res => {
                Swal.fire({
                    title: "Successfully☺️",
                    text: "Successfully Loged in.",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/')
                const user = { Name: res.user.displayName, email: res.user.email }
                axios.post('https://assignment-11-server-green-kappa.vercel.app//jwt', user, { withCredentials: true })
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    icon: "error"
                });
            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-end">
                    <div className="order-2 lg:order-first text-center lg:text-left">
                        <Lottie
                            animationData={theGif}
                            loop
                            className="w-full h-full"
                        />
                    </div>

                    {/* Login Form */}
                    <div className="card bg-base-100 w-11/12 shadow-2xl">
                        <form className="card-body pb-0" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <NavLink
                                        to="/forgot-password"
                                        className="label-text-alt link link-hover font-semibold"
                                    >
                                        Forgot password?
                                    </NavLink>
                                    <NavLink
                                        to="/register"
                                        className="label-text-alt link link-hover font-semibold"
                                    >
                                        Register
                                    </NavLink>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-primary hover:bg-primary text-secondary border-0">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="w-full flex justify-center py-4 px-8">
                            <button
                                className="w-full btn bg-transparent border-2 border-secondary hover:bg-secondary hover:border-0 hover:text-white"
                                onClick={handleGoogleLogin}
                            >
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
