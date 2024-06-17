import "./notescard.css";

export default function NotesCard() {
  return (
    <article className="notes-card">
      <div>{/* <img src="/notes-icon-1.jpeg.jfif" alt="no-data" /> */}</div>
      <div>
        <h1>Title</h1>
        <h2>Sub-title</h2>
        <p>content</p>
        <div>
          <div>
            <p>date</p>
            <p>time</p>
          </div>
          <div>pinned favourites saved</div>
        </div>
      </div>
    </article>
  );
}
