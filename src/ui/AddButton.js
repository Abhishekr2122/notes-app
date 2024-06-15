import { IoAddCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./addbutton.css";
import { useState } from "react";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);

  function handleButtonClick() {
    setIsClicked(function (prevState) {
      return !prevState;
    });
  }

  return (
    <button
      className={`add-button ${isClicked ? "active-button" : ""}`}
      onClick={function () {
        handleButtonClick();
      }}
    >
      {isClicked ? <IoCloseCircleOutline /> : <IoAddCircleOutline />}
      {isClicked ? "Close" : "Add"}
    </button>
  );
}
