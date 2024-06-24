import { useForm } from "react-hook-form";
import { useDataContext } from "../context/AppDataContext";
import "./form.css";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

export default function Form() {
  const { setIsClicked, notesArray, setNotesArray } = useDataContext();

  const { register, handleSubmit, reset } = useForm();

  function handleCloseForm() {
    setIsClicked(false);
  }

  function handleFormData(data) {
    const unique_id = uuid().slice(0, 8);

    const crrDate = new Date();

    const createdDate = `${crrDate.getDate()}/${
      crrDate.getMonth() + 1
    }/${crrDate.getFullYear()}`;

    const createdTime = `${crrDate.getHours()}:${crrDate.getMinutes()}`;

    const finalObj = {
      ...data,
      favourites: false,
      pinned: false,
      saved: false,
      notes: true,
      createdOn: createdDate,
      createdTime: createdTime,
      id: unique_id,
    };

    setNotesArray(function (prevState) {
      return [finalObj, ...prevState];
    });

    reset();
    setIsClicked(false);
    toast.success("Note successfully added");
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(handleFormData)}>
        <div className="form-header">
          <p>Add Note</p>
          <div>
            <button
              className="form-close-btn"
              onClick={function () {
                handleCloseForm();
              }}
            >
              Close
            </button>
          </div>
        </div>
        <div className="input-container">
          <label>Title :-</label>
          <input
            type="text"
            id="title"
            placeholder="Enter the Title"
            {...register("title")}
            required
          />
        </div>
        <div className="input-container">
          <label>Sub-Title :-</label>
          <input
            type="text"
            id="sub_title"
            placeholder="Enter the Subtitle"
            {...register("sub_title")}
            required
          />
        </div>

        <div className="input-container">
          <label>Content :-</label>
          <textarea
            rows={7}
            id="text_area"
            {...register("text_area")}
            required
          ></textarea>
        </div>
        <div className="submit-btn-container">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
