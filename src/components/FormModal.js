import { useDataContext } from "../context/AppDataContext";
import Form from "../ui/Form";
import { createPortal } from "react-dom";
import "./formmodal.css";

export default function FormModal() {
  const { isClicked, setIsClicked } = useDataContext();

  if (isClicked) {
    return createPortal(
      <div className="modal-container">
        <Form />
      </div>,
      document.body
    );
  } else {
    return null;
  }
}
