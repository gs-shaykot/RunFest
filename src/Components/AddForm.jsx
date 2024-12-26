import axios from 'axios';
import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';

const AddForm = () => {
    const { user } = useContext(AuthContext)

    const handleAddMarathon = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formVals = Object.fromEntries(formData.entries());

        formVals.createdAt = new Date();
        formVals.contactEmail = user.email
        formVals.totalRegistrationCount = 0
        axios
            .post('http://localhost:5111/marathons', formVals)
            .then((response) => {
                Swal.fire({
                    title: "Succeess",
                    text: "Event Posted Successfully",
                    icon: "success"
                });
            })
            .catch((error) => {
                console.error('Error posting data:', error.response ? error.response.data : error.message);
            });

        e.target.reset()
    };

    return (
        <div>
            <form onSubmit={handleAddMarathon} className="w-full max-w-lg mx-auto p-4 bg-white shadow rounded">
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

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Add Marathon
                </button>
            </form>
        </div>
    );
};

export default AddForm;
