import { useDataContext } from "../context/AppDataContext";
import NotesCard from "./NotesCard";
import "./notescardcontainer.css";
export default function NotesCardContainer() {
  const { notesArray } = useDataContext();
  console.log(notesArray);

  return (
    <div className="notes-card-container">
      {notesArray.map(function (citem, i) {
        return <NotesCard key={citem.id} crrNote={citem} />;
      })}
    </div>
  );
}
