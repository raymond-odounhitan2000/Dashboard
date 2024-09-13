import { useEffect, useState } from "react";
import axios from "axios";

const NasaNeoWidget = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNasaData = async () => {
            try {
                const response = await axios.get('https://api.nasa.gov/neo/rest/v1/feed', {
                    params: {
                        start_date: '2015-09-07',
                        end_date: '2015-09-08',
                        api_key: 'Ea7aL8UmXSffhpNiodeHNCniAm5axcBR6PZw5Ey0',
                    },
                });
                setData(response.data);
                setError(null);
            } catch (error) {
                setError('Failed to fetch data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchNasaData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg overflow-auto max-h-96"> 
            <div className="h-full flex flex-col bg-white bg-opacity-80">
                <h2 className="text-xl font-semibold mb-4">NASA NEO Data</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {loading ? (
                    <p>Loading...</p>
                ) : data ? (
                    <div className="overflow-y-auto flex-1"> 
                        {Object.keys(data.near_earth_objects).length > 0 ? (
                            Object.keys(data.near_earth_objects).map((date, index) => (
                                <div key={index} className="mb-4">
                                    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
                                        <div className="bg-blue-500 p-4 text-white">
                                            <h3 className="text-xl font-bold">Date: {date}</h3>
                                        </div>
                                        <div className="p-4">
                                            <table className="w-full border border-gray-300">
                                                <thead className="bg-gray-200 text-gray-700">
                                                    <tr>
                                                        <th className="border px-4 py-2">Name</th>
                                                        <th className="border px-4 py-2">Close Approach Date</th>
                                                        <th className="border px-4 py-2">Estimated Diameter (km)</th>
                                                        <th className="border px-4 py-2">Potentially Hazardous</th>
                                                        <th className="border px-4 py-2">Miss Distance (km)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.near_earth_objects[date].map((neo, idx) => (
                                                        <tr key={idx}>
                                                            <td className="border px-4 py-2">{neo.name}</td>
                                                            <td className="border px-4 py-2">{formatDate(neo.close_approach_data[0].close_approach_date_full)}</td>
                                                            <td className="border px-4 py-2">{neo.estimated_diameter.kilometers.estimated_diameter_max}</td>
                                                            <td className="border px-4 py-2">{neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</td>
                                                            <td className="border px-4 py-2">{neo.close_approach_data[0].miss_distance.kilometers}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No data available for the selected dates.</p>
                        )}
                    </div>
                ) : (
                    <p>No data available.</p>
                )}
            </div>
        </div>
    );
};

export default NasaNeoWidget;
