import { useDataContext } from "../context/AppDataContext";
import NotesCard from "./NotesCard";
import "./notescardcontainer.css";
export default function NotesCardContainer() {
  const { notesArray, selectedItem } = useDataContext();
  const finalArray = notesArray.filter(function (citem) {
    return citem[selectedItem.toLowerCase()];
  });

  return (
    <div className="notes-card-container">
      {finalArray.map(function (citem) {
        return <NotesCard key={citem.id} crrNote={citem} />;
      })}
    </div>
  );
}
