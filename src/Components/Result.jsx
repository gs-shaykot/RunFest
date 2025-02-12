// modify as normally and initially data will load from http://localhost:5111 if search field is not empty then load from the query 
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
        setLoader(true); // Show loader while fetching data

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://assignment-11-server-green-kappa.vercel.app/result`);
                setResData(response.data);
            } catch (error) {
                console.error("Error fetching results:", error.message);
            } finally {
                setLoader(false); // Hide loader after fetching
            }
        };

        fetchData();
    }, [search, year, user?.email]);

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
                                        <td>{runner.marathon_title}</td>
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
