import "./header.css";
import HeaderLogo from "../ui/HeaderLogo";
import Navbar from "./Navbar";
import AddButton from "../ui/AddButton";
import { useDataContext } from "../context/AppDataContext";

export default function Header() {
  const { notesArray } = useDataContext();
  console.log(notesArray);
  return (
    <header className="header">
      <HeaderLogo />
      <Navbar />
      <AddButton />
    </header>
  );
}
