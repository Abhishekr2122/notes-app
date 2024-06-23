import "./notescard.css";
import { IoIosStar } from "react-icons/io";
import { TbPinned } from "react-icons/tb";
import { RiSave2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDataContext } from "../context/AppDataContext";

export default function NotesCard({ crrNote }) {
  const { selectedItem } = useDataContext();
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
          <div className="notes-text-container">
            <h2 className="notes-title">{crrNote.title}</h2>
            <MdDelete className="notes-icon" />
          </div>
          <div className="notes-text-container">
            <h3 className="notes-sub-title">{crrNote.sub_title}</h3>
          </div>
          <div className="notes-text-container">
            <p className="notes-paragraph">{crrNote.text_area}</p>
          </div>
        </div>

        <div className="notes-sub-content-container">
          <div className="date-time-container">
            <span className="span-data">{crrNote.createdOn}</span>
            <span className="span-data">{crrNote.createdTime}</span>
          </div>
          <div className="options-icon-container">
            <IoIosStar
              className={`notes-icon ${
                selectedItem === "Notes"
                  ? crrNote.favourites
                    ? "notes-icon-active"
                    : ""
                  : selectedItem === "Favourite"
                  ? crrNote.favourites
                    ? "notes-icon-active"
                    : ""
                  : ""
              }`}
            />
            <TbPinned
              className={`notes-icon ${
                selectedItem === "Notes"
                  ? crrNote.pinned
                    ? "notes-icon-active"
                    : ""
                  : selectedItem === "Pinned"
                  ? crrNote.pinned
                    ? "notes-icon-active"
                    : ""
                  : ""
              }`}
            />
            <RiSave2Fill
              className={`notes-icon ${
                selectedItem === "Notes"
                  ? crrNote.saved
                    ? "notes-icon-active"
                    : ""
                  : selectedItem === "Saved"
                  ? crrNote.saved
                    ? "notes-icon-active"
                    : ""
                  : ""
              }`}
            />
            <FaEdit className="notes-icon" />
          </div>
        </div>
      </div>
    </article>
  );
}
