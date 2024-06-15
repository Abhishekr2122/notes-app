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
      <p className="num-notes">
        <div>
          <span style={{ color: "black" }}>Total-Notes :-</span>{" "}
          <span style={{ color: "blue" }}>124 Notes </span>
        </div>

        <div>
          <IoIosArrowDropdown
            style={{ height: "4vh", width: "4vw", cursor: "pointer" }}
            onClick={function () {
              handleClicked();
            }}
          />
        </div>
      </p>
    </div>
  );
}
