const COHORT = "2502";
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}-PUPPIES`;

export const FetchAllPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    return [];
  }
};

export const FetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.data.player;
  } catch (error) {
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
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    return null;
  }
};

export const RemovePlayer = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    return null;
  }
};
