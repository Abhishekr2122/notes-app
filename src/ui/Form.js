import "./form.css";

export default function Form() {
  return (
    <form className="form">
      <div className="input-container">
        <label>Title :-</label>
        <input type="text" id="title" placeholder="Enter the Title" />
      </div>
      <div className="input-container">
        <label>Sub-Title :-</label>
        <input type="text" id="sub-title" placeholder="Enter the Subtitle" />
      </div>

      <div className="input-container">
        <label>Content :-</label>
        <textarea></textarea>
      </div>
      <button className="submit-btn">Submit</button>
    </form>
  );
}
