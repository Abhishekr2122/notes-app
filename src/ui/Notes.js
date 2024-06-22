import NotesHeader from "./NotesHeader";
import { IoIosArrowDropdown } from "react-icons/io";
import "./notes.css";
import { useEffect, useState } from "react";
import { useDataContext } from "../context/AppDataContext";
import NotesCardContainer from "../components/NotesCardContainer";

export default function Notes() {
  const { navItems, setSelectedItem, selectedItem, notesArray } =
    useDataContext();
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [crrOptionsArr, setCrrOptionsArr] = useState(function () {
    return navItems.filter(function (citem) {
      return citem !== selectedItem;
    });
  });
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(
    function () {
      setCrrOptionsArr(function () {
        return navItems.filter(function (citem) {
          return citem !== selectedItem;
        });
      });
    },
    [setCrrOptionsArr, selectedOption, navItems, selectedItem]
  );

  function handleClicked() {
    setIsBtnClicked(function (prevState) {
      return !prevState;
    });
  }

  function handleOptionsClick(value) {
    setSelectedOption(value);
    setSelectedItem(value);
    setIsBtnClicked(false);
  }

  return (
    <div className="notes">
      <NotesHeader />
      <div className="num-notes-info">
        <div className="num-notes-count">
          <p>{notesArray?.length} Notes</p>
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
              {crrOptionsArr.map(function (citem, i) {
                return (
                  <button
                    key={i}
                    className={`options-btn ${
                      isBtnClicked ? "active-options-btn" : ""
                    }`}
                    onClick={function () {
                      handleOptionsClick(citem);
                    }}
                  >
                    {citem}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <NotesCardContainer />
    </div>
  );
}
