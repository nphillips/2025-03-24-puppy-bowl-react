const NewPlayerForm = () => {
  return (
    <>
      <h2>NewPlayerForm</h2>
      <form id="new-player-form">
        <div className="form-group form-group__name">
          <label for="puppy-name">Name:</label>
          <input
            type="text"
            name="puppy-name"
            id="puppy-name"
            placeholder="Enter puppy name"
            required=""
          />
        </div>
        <div className="form-group form-group__breed">
          <label for="puppy-breed">Breed:</label>
          <input
            type="text"
            name="puppy-breed"
            id="puppy-breed"
            placeholder="Enter breed"
          />
        </div>
        <div className="form-group form-group__status">
          <label for="puppy-status">Status:</label>
          <select name="puppy-status" id="puppy-status" required="">
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>
        </div>
        <div className="form-group form-group__image">
          <label for="puppy-image">Image URL:</label>
          <input
            type="url"
            name="puppy-image"
            id="puppy-image"
            placeholder="Enter image URL"
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
