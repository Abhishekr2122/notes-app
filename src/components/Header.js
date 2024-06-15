import "./header.css";
import HeaderLogo from "../ui/HeaderLogo";
import Navbar from "./Navbar";
import AddButton from "../ui/AddButton";

export default function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <Navbar />
      <AddButton />
    </header>
  );
}
