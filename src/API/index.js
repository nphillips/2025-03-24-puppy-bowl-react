const COHORT = "2502";
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}-PUPPIES`;

export const FetchAllPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error("Error fetching players:", error);
    return [];
  }
};

export const FetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error("Error fetching player:", error);
    return null;
  }
};

export const CreatePlayer = async (player) => {
  try {
    const response = await fetch(`${BASE_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error("Error creating player:", error);
    return null;
  }
};

export const RemovePlayer = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error("Error removing player:", error);
    return null;
  }
};
