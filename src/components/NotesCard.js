import "./notescard.css";

export default function NotesCard() {
  return (
    <article className="notes-card">
      <div className="image-container">
        <div className="card-image-container">
          <img
            src="/notes-icon-2.jpeg.jfif"
            alt="no-data"
            className="notes-image"
          />
        </div>
      </div>
      <div className="notes-main-content-container">
        <div className="notes-main-content">
          <h1 className="notes-title">Title</h1>
          <h2 className="notes-sub-title">Sub-title</h2>
          <p className="notes-paragraph">content</p>
        </div>

        <div className="notes-sub-content-container">
          <div className="date-time-container">
            <p>date</p>
            <p>time</p>
          </div>
          <div className="options-icon-container">pinned favourites saved</div>
        </div>
      </div>
    </article>
  );
}
