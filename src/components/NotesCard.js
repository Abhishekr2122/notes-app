import "./notescard.css";
import { IoIosStar } from "react-icons/io";
import { TbPinned } from "react-icons/tb";
import { RiSave2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDataContext } from "../context/AppDataContext";
import toast from "react-hot-toast";

export default function NotesCard({ crrNote }) {
  const { selectedItem, notesArray, setNotesArray } = useDataContext();

  function handleNoteDelete(selectedId) {
    setNotesArray(function (prevArray) {
      return prevArray.filter(function (citem) {
        return citem.id !== selectedId;
      });
    });

    toast.success("Note successfull deleted");
  }

  function handleCategory(category) {
    let selectedNoteIndex = null;
    const selectedNote = notesArray.find(function (citem, i) {
      selectedNoteIndex = i;
      return citem.id === crrNote.id;
    });
    selectedNote[category] = !selectedNote[category];
    const newArray = notesArray;
    newArray[selectedNoteIndex] = selectedNote;
    setNotesArray(function () {
      return [
        ...newArray.sort(function (a, b) {
          return a.createdOn.localeCompare(b.createdOn);
        }),
      ];
    });
  }

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
            <MdDelete
              className="delete-icon"
              onClick={function () {
                handleNoteDelete(crrNote.id);
              }}
            />
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
            <button
              className={`button-icon ${
                selectedItem === "Favourite" || selectedItem === "Notes"
                  ? ""
                  : "button-disabled"
              }`}
              onClick={function () {
                handleCategory("favourite");
              }}
              disabled={
                selectedItem === "Favourite" || selectedItem === "Notes"
                  ? false
                  : true
              }
            >
              <IoIosStar
                className={`notes-icon ${
                  selectedItem === "Notes"
                    ? crrNote.favourite
                      ? "notes-icon-active"
                      : ""
                    : selectedItem === "Favourite"
                    ? crrNote.favourite
                      ? "notes-icon-active"
                      : ""
                    : ""
                }`}
              />
            </button>
            <button
              className={`button-icon ${
                selectedItem === "Pinned" || selectedItem === "Notes"
                  ? ""
                  : "button-disabled"
              }`}
              disabled={
                selectedItem === "Pinned" || selectedItem === "Notes"
                  ? false
                  : true
              }
              onClick={function () {
                handleCategory("pinned");
              }}
            >
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
            </button>
            <button
              className={`button-icon ${
                selectedItem === "Saved" || selectedItem === "Notes"
                  ? ""
                  : "button-disabled"
              }`}
              disabled={
                selectedItem === "Saved" || selectedItem === "Notes"
                  ? false
                  : true
              }
              onClick={function () {
                handleCategory("saved");
              }}
            >
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
            </button>
            <FaEdit className="edit-icon" />
          </div>
        </div>
      </div>
    </article>
  );
}
