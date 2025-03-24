const COHORT = "YOUR_COHORT_NAME_HERE";
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

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
