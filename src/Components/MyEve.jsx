import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyEve = () => {
    const { user } = useContext(AuthContext);
    const [myCamp, setMyCamp] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedID, setSelectedID] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://assignment-11-server-green-kappa.vercel.app//marathons/email/?contactEmail=${user.email}`, { withCredentials: true })
            .then(response => {
                setMyCamp(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error.message);
                setLoading(false);
            });

    }, [user.email]);

    const handleEveDelete = id => {
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
                axios.delete(`https://assignment-11-server-green-kappa.vercel.app//marathons/all/${id}`)
                    .then(response => {
                        const data = response.data;
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingCamp = myCamp.filter(user => user._id !== id);
                            setMyCamp(remainingCamp);
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
        axios.put(`https://assignment-11-server-green-kappa.vercel.app//marathons/all/${selectedID}`, formVals)
            .then(response => {
                Swal.fire({
                    title: "Succeess",
                    text: "Event Updated Successfully",
                    icon: "success"
                });
                console.log("Update successful:", response.data);

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
        <div className={`w-full `}>
            <div className="container mx-auto w-11/12 md:w-auto">
                <div className="overflow-x-auto py-8">
                    {
                        loading ? (
                            <div className="flex justify-center items-center">
                                <span className="loading loading-bars loading-lg"></span>
                            </div>
                        ) : (
                            myCamp.length !== 0 ?
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th className='border border-gray-300 p-1'>Sr.</Th>
                                            <Th className='border border-gray-300 p-1'>Name</Th>
                                            <Th className='border border-gray-300 p-1'>Email</Th>
                                            <Th className='border border-gray-300 p-1'>Campaign Title</Th>
                                            <Th className='border border-gray-300 p-1'>Campaign Type</Th>
                                            <Th className='border border-gray-300 p-1'>Activity</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody className='text-center'>
                                        {
                                            myCamp.map((data, idx) => {
                                                return (
                                                    <Tr key={data._id}>
                                                        <Td className='border border-gray-300 p-1'>{idx + 1}</Td>
                                                        <Td className='border border-gray-300 p-1'>{user?.displayName}</Td>
                                                        <Td className='border border-gray-300 p-1'>{data?.contactEmail}</Td>
                                                        <Td className='border border-gray-300 p-1'>{data?.marathonTitle}</Td>
                                                        <Td className='border border-gray-300 p-1'>{data?.eventType}</Td>
                                                        <Td className='border border-gray-300 p-1'>
                                                            <div className='flex !flex-row gap-2 justify-center text-2xl'>
                                                                <MdDeleteForever onClick={() => handleEveDelete(data._id)} className='text-red-500 cursor-pointer' />
                                                                <button onClick={() => {
                                                                    document.getElementById('my_modal_5').showModal()
                                                                    setSelectedID(data._id)
                                                                }}>
                                                                    <MdEditSquare className='text-primary' />
                                                                </button>
                                                            </div>
                                                        </Td>
                                                    </Tr>
                                                );
                                            })
                                        }
                                    </Tbody>
                                </Table> :
                                <h1 className='text-center font-3xl font-semibold'>PLEASE ADD CAMPAIGN FIRST</h1>
                        )
                    }
                </div>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className='font-bebas text-center text-3xl md:text-4xl font-semibold underline mb-4'>
                        Running Marathons
                    </h1>
                    <div className="modal-action">
                        <form onSubmit={handleUpdate} className="w-full max-w-lg mx-auto p-4 bg-white shadow rounded" >
                            <div className="grid grid-cols-2 gap-3">
                                <div className="mb-4">
                                    <label className="block font-medium mb-2">Contact At</label>
                                    <input
                                        type="email"
                                        name="contactEmail"
                                        placeholder="Contact At"
                                        value={user.email}
                                        disabled
                                        className="w-full px-3 py-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2">Organizer Name</label>
                                    <input
                                        type="text"
                                        name="organizer"
                                        placeholder="Organizer Name"
                                        value={user.displayName}
                                        disabled
                                        className="w-full px-3 py-2 border rounded"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block font-medium mb-2">Marathon Title</label>
                                <input
                                    type="text"
                                    name="marathonTitle"
                                    className="w-full px-3 py-2 border rounded"
                                    placeholder="Enter Marathon Title"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium mb-2">Event Start</label>
                                <input
                                    type="date"
                                    name="eventDate"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="mb-4">
                                    <label className="block font-medium mb-2">Start Registration Date</label>
                                    <input
                                        type="date"
                                        name="registrationStart"
                                        className="w-full px-3 py-2 border rounded"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block font-medium mb-2">End Registration Date</label>
                                    <input
                                        type="date"
                                        name="registrationEnd"
                                        className="w-full px-3 py-2 border rounded"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="mb-4">
                                    <label className="block font-medium mb-2">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="Enter Location"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block font-medium mb-2">Running Distance</label>
                                    <select name="eventType" className="w-full px-3 py-2 border rounded" required>
                                        <option value="25k">25k</option>
                                        <option value="10k">10k</option>
                                        <option value="3k">3k</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="mb-4">
                                    <label className="block font-medium mb-2">Marathon Image</label>
                                    <input
                                        type="url"
                                        name="image"
                                        placeholder="Place Image URL Here"
                                        className="w-full px-3 py-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2">Ticket Price</label>
                                    <input
                                        type="number"
                                        name="registrationFee"
                                        placeholder="Ticket Price"
                                        className="w-full px-3 py-2 border rounded"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block font-medium mb-2">Description</label>
                                <textarea
                                    name="description"
                                    className="w-full px-3 py-2 border rounded"
                                    placeholder="Enter Marathon Description"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
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

                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyEve;
