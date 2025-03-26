import { useState } from "react";

const SearchForm = ({ players, setFilteredPlayers }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = players.filter(
      (player) =>
        player.name.toLowerCase().includes(term) ||
        player.breed.toLowerCase().includes(term)
    );
    setFilteredPlayers(filtered);
  };

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Search by name or breed..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchForm;
