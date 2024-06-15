import NotesHeader from "./NotesHeader";
import { IoIosArrowDropdown } from "react-icons/io";
import "./notes.css";
import { useState } from "react";

export default function Notes() {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  function handleClicked() {
    setIsBtnClicked(function (prevState) {
      return !prevState;
    });
  }

  return (
    <div className="notes">
      <NotesHeader />
      <div className="num-notes">
        <div>
          <span style={{ color: "black" }}>Total-Notes :-</span>{" "}
          <span style={{ color: "blue" }}>124 Notes </span>
        </div>

        <div className="notes-icon-container">
          <IoIosArrowDropdown
            className={`drop-down ${isBtnClicked ? "active-drop-down" : ""}`}
            onClick={function () {
              handleClicked();
            }}
          />
          {isBtnClicked ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button
                style={{
                  color: `${isBtnClicked ? "blue" : "red"}`,
                  transitionDuration: "2s",
                }}
              >
                Notes
              </button>
              <button>Favourites</button>
              <button>Saved</button>
              <button>Pinned</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
