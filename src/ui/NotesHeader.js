import { useDataContext } from "../context/AppDataContext";
import "./notesheader.css";
import { FaRegNoteSticky } from "react-icons/fa6";

export default function NotesHeader() {
  const { selectedItem } = useDataContext();
  return (
    <div className="notes-header">
      <div className="notes-header-container">
        <FaRegNoteSticky
          style={{ height: "4vh", width: "4vw", color: "#8DA6FF" }}
        />
        <p className="notes-para">
          {selectedItem === "Notes" ? "All Notes" : `${selectedItem} Notes`}
        </p>
      </div>
    </div>
  );
}
