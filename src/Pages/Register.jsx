// user is being created but no toast is showing
import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import theReg from "../assets/lottie/register.json";
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import auth from '../Provider/firebase';
import Swal from 'sweetalert2'
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const { email, name, password, photo } = initialData;

        const passReg = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!passReg.test(password)) {
            Swal.fire({
                title: "Wrong Credential",
                text: "Password must be at least 6 characters long and include an uppercase and a lowercase letter.",
                icon: "warning"
            });
            return;
        }
        
        createUser(email, password)
            .then(res => { 
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => { 
                        console.log("Data Updated")
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: "Updating Failed",
                            text: error.message,
                            icon: "error"
                        });
                    });
                    
                Swal.fire({
                    title: "Succeess",
                    text: "User Created Successfully",
                    icon: "success"
                }); 
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center md:justify-items-end">
                    <div className="order-2 lg:order-first text-center lg:text-left">
                        <Lottie
                            animationData={theReg}
                            loop
                            // style={{ height: "100%", width: "300px" }}
                            className="w-full h-full"
                        />
                    </div>

                    {/* Login Form */}
                    <div className="card bg-base-100 w-11/12 md:w-9/12 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label ">
                                    <NavLink to='/login' href="#" className="label-text-alt link link-hover font-medium ">or, Login</NavLink>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-primary text-secondary hover:bg-secondary hover:text-white border-0 ">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;