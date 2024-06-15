import NotesHeader from "./NotesHeader";
import { IoIosArrowDropdown } from "react-icons/io";
import "./notes.css";
import { useState } from "react";

export default function Notes() {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [optionsArr, setOptionsArr] = useState([
    "Notes",
    "Favourites",
    "Saved",
    "Pinned",
  ]);

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
          <span style={{ color: "#86Adff" }}>124 Notes </span>
        </div>

        <div className="notes-icon-container">
          <IoIosArrowDropdown
            className={`drop-down ${isBtnClicked ? "active-drop-down" : ""}`}
            onClick={function () {
              handleClicked();
            }}
          />

          <div
            className={`option-container ${
              isBtnClicked ? "active-option-container" : ""
            }`}
          >
            <div className="options-btn-container">
              {optionsArr.map(function (citem, i) {
                return (
                  <button
                    key={i}
                    className={`options-btn ${
                      isBtnClicked ? "active-options-btn" : ""
                    }`}
                  >
                    {citem}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
