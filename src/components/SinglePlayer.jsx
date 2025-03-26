import { FetchSinglePlayer } from "../API";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  const secureImageUrl = (url) => {
    if (!url) return url;
    return url.replace("http://", "https://");
  };

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const player = await FetchSinglePlayer(id);
        if (player) {
          setPlayer({
            ...player,
            imageUrl: secureImageUrl(player.imageUrl),
          });
        }
      } catch (error) {
        // Handle error silently in production
      }
    };
    fetchPlayer();
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div className="puppy-details">
      <NavBar currentPuppy={player} />
      <h2 className="puppy-details__name">{player.name}</h2>
      <div className="puppy-details__img">
        <img src={player.imageUrl} alt={player.name} />
      </div>
      <div className="puppy-details__info">
        <p className="puppy-details__breed">
          <strong>Breed:</strong> {player.breed}
        </p>
        <p className="puppy-details__status">
          <strong>Status:</strong> {player.status}
        </p>
      </div>
    </div>
  );
};

export default SinglePlayer;
