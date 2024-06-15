import DailyNotes from "../ui/DailyNotes";
import Notes from "../ui/Notes";
import "./notescontainer.css";

export default function NotesContainer() {
  return (
    <div className="notes-container">
      <Notes />
      <DailyNotes />
    </div>
  );
}
