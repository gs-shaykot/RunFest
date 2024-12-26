// in the modal the form is not showing
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyApply = () => {
    const { user } = useContext(AuthContext);
    const [Applied, setMyApply] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedID, setSelectedID] = useState(null)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);
        axios.get(`https://assignment-11-server-green-kappa.vercel.app/applied/candidate?email=${user.email}&search=${search}`, { withCredentials: true })
            .then(response => {
                setMyApply(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error.message);
                setLoading(false);
            });
    }, [user.email, search]);


    const handleAppliedDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assignment-11-server-green-kappa.vercel.app/applied/all/${id}`,)
                    .then(response => {
                        const data = response.data;
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingCamp = Applied.filter(user => user._id !== id);
                            setMyApply(remainingCamp);
                        }
                    })
                    .catch(error => console.error(error.message));
            }
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const formVals = Object.fromEntries(formData.entries());
        formVals.contactEmail = user.email;

        axios.put(`https://assignment-11-server-green-kappa.vercel.app/applied/all/${selectedID}`, formVals)
            .then(response => {
                Swal.fire({
                    title: "Succeess",
                    text: "Event Updated Successfully",
                    icon: "success"
                });

                document.getElementById('my_modal_5').close();
                setSelectedID(null)
                navigate('/allMarathon')
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
        <div className="w-full">
            <div className="container mx-auto w-11/12 md:w-auto">
                {/* Search Field */}
                <div className="py-4">
                    <input
                        type="text"
                        placeholder="Search by Marathon Title"
                        className="w-full px-3 py-2 border rounded"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="overflow-x-auto py-8">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    ) : Applied.length !== 0 ? (
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th className="border border-gray-300 p-1">Sr.</Th>
                                    <Th className="border border-gray-300 p-1">Name</Th>
                                    <Th className="border border-gray-300 p-1">Email</Th>
                                    <Th className="border border-gray-300 p-1">Campaign Title</Th>
                                    <Th className="border border-gray-300 p-1">Phone</Th>
                                    <Th className="border border-gray-300 p-1">Activity</Th>
                                </Tr>
                            </Thead>
                            <Tbody className="text-center">
                                {Applied.map((data, idx) => (
                                    <Tr key={data._id}>
                                        <Td className="border border-gray-300 p-1">{idx + 1}</Td>
                                        <Td className="border border-gray-300 p-1">{data.firstName} {data.lastName}</Td>
                                        <Td className="border border-gray-300 p-1">{data?.email}</Td>
                                        <Td className="border border-gray-300 p-1">{data?.marathonTitle}</Td>
                                        <Td className="border border-gray-300 p-1">{data?.contactNumber}</Td>
                                        <Td className="border border-gray-300 p-1">
                                            <div className="flex gap-2 justify-center text-2xl">
                                                <MdDeleteForever onClick={() => handleAppliedDelete(data._id)} className="text-red-500 cursor-pointer" />
                                                <button onClick={() => {
                                                    document.getElementById('my_modal_5').showModal();
                                                    setSelectedID(data._id);
                                                }}>
                                                    <MdEditSquare className="text-primary text-black-400" />
                                                </button>
                                            </div>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    ) : (
                        <h1 className="text-center font-3xl font-semibold">No Marathons Found</h1>
                    )}
                </div>
            </div>


            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className="font-bebas text-center text-3xl md:text-4xl font-semibold underline mb-4">
                        Apply Marathon
                    </h1>
                    <div className="modal-action">
                        {Applied.filter((data) => data._id === selectedID).map((data) => (
                            <form
                                key={data._id}
                                onSubmit={handleUpdate}
                                className="w-full max-w-lg mx-auto p-4 bg-white shadow rounded"
                            >
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
                                        value={data.marathonTitle}
                                        readOnly
                                        className="w-full px-3 py-2 border rounded bg-gray-200"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {/* Start Date */}
                                    <div className="mb-4">
                                        <label className="block font-medium mb-2">Start Date</label>
                                        <input
                                            type="text"
                                            name="startDate"
                                            value={data.startDate}
                                            readOnly
                                            className="w-full px-3 py-2 border rounded bg-gray-200"
                                        />
                                    </div>
                                    {/* Event Type */}
                                    <div className="mb-4">
                                        <label className="block font-medium mb-2">Type</label>
                                        <input
                                            type="text"
                                            name="eventType"
                                            value={data.eventType}
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

                                {/* Submit Button
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                                >
                                    Update
                                </button> */}
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="w-full bg-primary text-secondary font-bold mb-3 py-2 px-4 rounded hover:bg-blue-600"
                                />

                                <button type="button" className="btn w-full bg-secondary text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => {
                                    document.getElementById('my_modal_5').close()
                                    setSelectedID(null)
                                }}>
                                    Close
                                </button>
                            </form>
                        ))}
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default MyApply;
