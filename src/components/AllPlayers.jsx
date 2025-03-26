import { Link, useNavigate } from "react-router-dom";
import { FetchAllPlayers, RemovePlayer } from "../API";
import { useState, useEffect } from "react";
import Toolbar from "./Toolbar";

const AllPlayers = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const fetchPlayers = async () => {
    const response = await FetchAllPlayers();
    console.log("Fetched players:", response);
    setPlayers(response);
    setFilteredPlayers(response);
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
    await RemovePlayer(id);
    fetchPlayers();
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
