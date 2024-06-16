import { useDataContext } from "../context/AppDataContext";
import NavItem from "../ui/NavItem";

import "./navbar.css";
export default function Navbar() {
  const { navItems, selectedItem, setSelectedItem } = useDataContext();

  return (
    <div className="nav-container">
      {navItems.map(function (citem, i) {
        return (
          <NavItem
            content={citem}
            key={i}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        );
      })}
    </div>
  );
}
