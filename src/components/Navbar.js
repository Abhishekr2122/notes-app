import { useState } from "react";
import NavItem from "../ui/NavItem";

import "./navbar.css";
export default function Navbar() {
  const navItems = ["Notes", "Favourites", "Saved", "Pinned"];
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="nav-container">
      {navItems.map(function (citem, i) {
        return (
          <NavItem
            content={citem}
            key={i}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            currElement={i}
          />
        );
      })}
    </div>
  );
}
