import { CreatePlayer } from "../API";

const NewPlayerForm = ({ onPlayerCreated }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const playerData = {
      name: formData.get("puppy-name"),
      breed: formData.get("puppy-breed") || "Mixed Breed",
      status: formData.get("puppy-status") || "field",
      imageUrl: formData.get("puppy-image") || "https://placedog.net/310x465",
    };

    try {
      await CreatePlayer(playerData);
      onPlayerCreated();
      e.target.reset();
    } catch (error) {
      // Handle error silently in production
    }
  };

  return (
    <>
      <form id="new-player-form" onSubmit={handleSubmit}>
        <div className="form-group form-group__name">
          <label htmlFor="puppy-name">Name:</label>
          <input
            type="text"
            name="puppy-name"
            id="puppy-name"
            placeholder="Enter puppy name"
            required=""
          />
        </div>
        <div className="form-group form-group__breed">
          <label htmlFor="puppy-breed">Breed:</label>
          <input
            type="text"
            name="puppy-breed"
            id="puppy-breed"
            placeholder="Enter breed"
          />
        </div>
        <div className="form-group form-group__status">
          <label htmlFor="puppy-status">Status:</label>
          <select name="puppy-status" id="puppy-status" required="">
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>
        </div>
        <div className="form-group form-group__image">
          <label htmlFor="puppy-image">Image URL:</label>
          <input
            type="url"
            name="puppy-image"
            id="puppy-image"
            placeholder="Enter image URL (must be HTTPS)"
            pattern="https://.*"
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Add Puppy
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPlayerForm;
