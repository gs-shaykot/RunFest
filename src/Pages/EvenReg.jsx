import React, { useContext } from 'react';
import Register from './Register';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const EvenReg = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const { eventData } = location.state || {};

    const handleRegistration = e => {
        e.preventDefault()
        // Upload the Applicant data to Apply API
        const formData = new FormData(e.target);
        const formVals = Object.fromEntries(formData.entries());
        axios
            .post('https://assignment-11-server-green-kappa.vercel.app//applied', formVals)
            .then((response) => {
                Swal.fire({
                    title: "Succeess",
                    text: "Registration Successfull",
                    icon: "success"
                });
            })
            .catch((error) => {
                console.error('Error posting data:', error.response ? error.response.data : error.message);
            });
        // Update the totalRegistrationCount+=1
        axios.patch(`https://assignment-11-server-green-kappa.vercel.app//marathons/all/${eventData._id}`, {
            totalRegistrationCount: eventData.totalRegistrationCount + 1
        })
            .then(response => {
                console.log("Update successful:", response.data);
                navigate(`/marathons/all/${eventData._id}`)
            })
            .catch(error => {
                Swal.fire({
                    title: "Wrong Happened",
                    text: "Error while Updating",
                    icon: "error"
                });
                console.error("Error updating marathon:", error.message);
            });
    }

    return (
        <div>
            <h1 className='mt-5 font-bebas text-center text-4xl md:text-5xl font-semibold underline mb-8'>
                Running Marathons
            </h1>
            <form onSubmit={handleRegistration} className="w-11/12 md:w-full max-w-lg mx-auto p-4 bg-white shadow rounded mb-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Marathon Registration</h2>

                {/* Email */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        readOnly
                        className="w-full px-3 py-2 border rounded bg-gray-200"
                    />
                </div>

                {/* Marathon Title */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Marathon Title</label>
                    <input
                        type="text"
                        name="marathonTitle"
                        value={eventData.marathonTitle}
                        readOnly
                        className="w-full px-3 py-2 border rounded bg-gray-200"
                    />
                </div>

                <div className='grid grid-cols-2 gap-3'>
                    {/* Start Date */}
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Start Date</label>
                        <input
                            type="text"
                            name="startDate"
                            value={eventData.eventDate}
                            readOnly
                            className="w-full px-3 py-2 border rounded bg-gray-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Type</label>
                        <input
                            type="text"
                            name="eventType"
                            value={eventData.eventType}
                            readOnly
                            className="w-full px-3 py-2 border rounded bg-gray-200"
                        />
                    </div>
                </div>

                {/* First Name */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                {/* Contact Number */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Contact Number</label>
                    <input
                        type="text"
                        name="contactNumber"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                {/* Additional Info */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Additional Info</label>
                    <textarea
                        name="additionalInfo"
                        className="w-full px-3 py-2 border rounded"
                        rows="4"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default EvenReg;