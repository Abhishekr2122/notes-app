import "./notescard.css";
import { IoIosStar } from "react-icons/io";
import { TbPinned } from "react-icons/tb";
import { RiSave2Fill } from "react-icons/ri";

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
          <div className="notes-text-container">
            <h2 className="notes-title">Title</h2>
          </div>
          <div className="notes-text-container">
            <h3 className="notes-sub-title">Sub-title</h3>
          </div>
          <div className="notes-text-container">
            <p className="notes-paragraph">content</p>
          </div>
        </div>

        <div className="notes-sub-content-container">
          <div className="date-time-container">
            <span className="span-data">date</span>
            <span className="span-data">time</span>
          </div>
          <div className="options-icon-container">
            <IoIosStar />
            <TbPinned />
            <RiSave2Fill />
          </div>
        </div>
      </div>
    </article>
  );
}
