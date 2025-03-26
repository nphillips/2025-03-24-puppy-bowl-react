import SearchForm from "./SearchForm";
import NewPlayerForm from "./NewPlayerForm";
import { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

const Toolbar = ({ fetchPlayers, players, setFilteredPlayers }) => {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <div className="toolbar">
      <div className="toolbar__tabs">
        <button
          className={`toolbar__tab ${activeTab === "search" ? "active" : ""}`}
          onClick={() => setActiveTab("search")}
        >
          <FaSearch className="toolbar__icon" />
          Search Players
        </button>
        <button
          className={`toolbar__tab ${activeTab === "add" ? "active" : ""}`}
          onClick={() => setActiveTab("add")}
        >
          <FaPlus className="toolbar__icon" />
          Add Player
        </button>
      </div>
      <div className="toolbar__content">
        {activeTab === "search" ? (
          <SearchForm
            players={players}
            setFilteredPlayers={setFilteredPlayers}
          />
        ) : (
          <NewPlayerForm onPlayerCreated={fetchPlayers} />
        )}
      </div>
    </div>
  );
};

export default Toolbar;
