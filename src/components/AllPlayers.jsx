import { FetchAllPlayers } from "../API";
import { useState, useEffect } from "react";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await FetchAllPlayers();
      setPlayers(response);
    };
    fetchPlayers();
  }, []);

  return (
    <>
      <div className="players">
        {players.map(({ id, imageUrl, name, breed, status }) => (
          <div key={id} className="puppy" data-id={id}>
            <div className="puppy__img">
              <img src={imageUrl} alt={name} />
            </div>
            <div className="puppy__name">{name}</div>
            <div className="puppy__breed">{breed}</div>
            <div className="puppy__status">{status}</div>
            <div className="puppy__actions">
              <button className="btn btn--details">Details</button>
              <button className="btn btn--remove">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPlayers;
