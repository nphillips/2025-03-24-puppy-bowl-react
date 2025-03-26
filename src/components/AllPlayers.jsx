import { Link, useNavigate } from "react-router-dom";
import { FetchAllPlayers, RemovePlayer } from "../API";
import { useState, useEffect } from "react";
import Toolbar from "./Toolbar";

const AllPlayers = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const secureImageUrl = (url) => {
    if (!url) return url;
    return url.replace("http://", "https://");
  };

  const fetchPlayers = async () => {
    try {
      const response = await FetchAllPlayers();
      // Convert all image URLs to HTTPS
      const securePlayers = response.map((player) => ({
        ...player,
        imageUrl: secureImageUrl(player.imageUrl),
      }));
      setPlayers(securePlayers);
      setFilteredPlayers(securePlayers);
    } catch (error) {
      // Handle error silently in production
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filteredPlayers);
  };

  const handleRemove = async (id) => {
    try {
      await RemovePlayer(id);
      fetchPlayers();
    } catch (error) {
      // Handle error silently in production
    }
  };

  return (
    <>
      <Toolbar
        fetchPlayers={fetchPlayers}
        players={players}
        setFilteredPlayers={setFilteredPlayers}
        onSearch={handleSearch}
      />
      <div className="players">
        {filteredPlayers.length === 0 && <div>No players found</div>}
        {filteredPlayers.map(({ id, imageUrl, name, breed, status }) => (
          <div key={id} className="puppy" data-id={id}>
            <div className="puppy__img">
              {id && (
                <Link to={`/players/${id}`}>
                  {imageUrl && <img src={imageUrl} alt={name} />}
                </Link>
              )}
            </div>
            <div className="puppy__name">{name}</div>
            <div className="puppy__breed">{breed}</div>
            <div className="puppy__status">{status}</div>
            <div className="puppy__actions">
              <button
                className="btn btn--details"
                onClick={() => navigate(`/players/${id}`)}
              >
                Details
              </button>
              <button
                className="btn btn--remove"
                onClick={() => handleRemove(id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPlayers;
