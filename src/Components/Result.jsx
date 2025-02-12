// check why data is now showing. i consoled the data, the data is not coming from server. but checked non queried(localhost:5111/result) api which is working
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const Result = () => {
    const [search, setSearch] = useState("");
    const [year, setYear] = useState("2024");
    const [resData, setResData] = useState([]);
    const { user, setLoader } = useContext(AuthContext);
    useEffect(() => {
        if (!user?.email) return;

        axios.get(`http://localhost:5111/result?email=${encodeURIComponent(user.email)}&year=${encodeURIComponent(year)}&search=${encodeURIComponent(search)}`)
            .then(response => {
                setResData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error("Error fetching results:", error.message);
            });

    }, [search, year, user?.email]); // Triggers re-fetch on state change

    return (
        <div className="bg-gray-50 min-h-screen font-sans">

            {/* Hero Section */}
            <div className="relative bg-gray-900 h-64 mt-16 flex items-center justify-center">
                <img
                    src="https://i.ibb.co/SX91nv1Q/Marathan-news.webp"
                    className="absolute w-full h-full object-cover opacity-50"
                    alt="Marathon Banner"
                />
                <div className="relative text-center text-white">
                    <h1 className="text-4xl font-bold">Track Your Performance</h1>
                    <p className="text-xl">View and analyze your marathon achievements</p>
                </div>
            </div>

            {/* Filters */}
            <div className="mx-auto p-6 mt-8 bg-white shadow rounded-lg container">
                <div className="w-full flex gap-5">
                    <input
                        type="text"
                        placeholder="Search Runner or Bib #"
                        className="input input-bordered w-10/12"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        className="select select-bordered w-full max-w-xs"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option disabled>Year</option>
                        <option>2025</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                    </select>
                </div>
            </div>

            {/* Leaderboard */}
            <div className="max-w-7xl mx-auto mt-8 p-6 bg-white shadow rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Leaderboard</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Runner</th>
                                <th>Bib #</th>
                                <th>Time</th>
                                <th>Marathon</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resData.length > 0 ? (
                                resData.map((runner, index) => (
                                    <tr key={runner._id}>
                                        <td>{index + 1}</td>
                                        <td>{runner.name}</td>
                                        <td>{runner.RID}</td>
                                        <td>{runner.time}</td>
                                        <td>{runner.marathonTitle}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-4 text-gray-500">
                                        No results found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Result;
