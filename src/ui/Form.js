import { useForm } from "react-hook-form";
import { useDataContext } from "../context/AppDataContext";
import "./form.css";

export default function Form() {
  const { setIsClicked } = useDataContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("This is the error object", errors);

  function handleCloseForm() {
    setIsClicked(false);
  }

  function handleFormData(data) {
    console.log(data);
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
