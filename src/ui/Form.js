import { useDataContext } from "../context/AppDataContext";
import "./form.css";

export default function Form() {
  const { setIsClicked } = useDataContext();
  function handleCloseForm() {
    setIsClicked(false);
  }

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={function (e) {
          e.preventDefault();
        }}
      >
        <div className="form-header">
          <p>Add Note</p>
          <div>
            <button
              onClick={function (e) {
                e.preventDefault();
                handleCloseForm();
              }}
              className="form-close-btn"
            >
              Close
            </button>
          </div>
        </div>
        <div className="input-container">
          <label>Title :-</label>
          <input
            type="text"
            id="title"
            placeholder="Enter the Title"
            required
          />
        </div>
        <div className="input-container">
          <label>Sub-Title :-</label>
          <input
            type="text"
            id="sub-title"
            placeholder="Enter the Subtitle"
            required
          />
        </div>

        <div className="input-container">
          <label>Content :-</label>
          <textarea rows={7} required></textarea>
        </div>
        <div className="submit-btn-container">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
