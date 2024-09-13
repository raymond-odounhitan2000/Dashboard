import { useEffect, useState } from "react";
import { AboutMyFavoriteTeam } from "../Services/FavoriteTeam/FavoriteTeam";

const FavoriteTeamsWidget = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [team, setTeam] = useState('Chelsea');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await AboutMyFavoriteTeam(team);
                if (result && result.teams) {
                    setData(result);
                    setError(null);
                } else {
                    setError('No teams found for the specified name.');
                }
            } catch (error) {
                setError('Failed to fetch data. Please try again later.');
            }
        };
        fetchData();
    }, [team]);

    const handleFavoriteTeamChange = (e) => {
        setTeam(e.target.value);
        setError(null);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setTeam(team);
    };

    return (
        <div className="p-4 bg-white border-b-amber-500 shadow-md rounded-lg overflow-auto max-h-96">
            <div className="flex flex-col h-full bg-white bg-opacity-90">
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Favorite Team</h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <form onSubmit={handleFormSubmit} className="mb-4">
                    <label htmlFor="team" className="block text-gray-700 text-sm font-medium mb-2">
                        Enter your favorite football team or club:
                    </label>
                    <input
                        type="text"
                        id="team"
                        value={team}
                        onChange={handleFavoriteTeamChange}
                        className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Search
                    </button>
                </form>
                <div className="overflow-y-auto flex-1">
                    {data ? (
                        <>
                            {data.teams && data.teams.length > 0 ? (
                                <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                    <p className="mb-2">
                                        <strong>Team or Club:</strong> {data.teams[0].strTeamAlternate}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Creation Date:</strong> {data.teams[0].intFormedYear}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Stadium:</strong> {data.teams[0].strStadium}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Description:</strong> {data.teams[0].strDescriptionEN}
                                    </p>
                                </div>
                            ) : (
                                <p>No teams found.</p>
                            )}
                        </>
                    ) : (
                        <p className="text-center text-gray-500">Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FavoriteTeamsWidget;
