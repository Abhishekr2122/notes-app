import NotesCard from "./NotesCard";
import "./notescardcontainer.css";
export default function NotesCardContainer() {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="notes-card-container">
      {arr1.map(function (citem, i) {
        return <NotesCard key={i} />;
      })}
    </div>
  );
}
