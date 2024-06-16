import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export default function AppDataContext({ children }) {
  const navItems = ["Notes", "Favourites", "Saved", "Pinned"];
  const [selectedItem, setSelectedItem] = useState("Notes");

  return (
    <DataContext.Provider value={{ navItems, selectedItem, setSelectedItem }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const data = useContext(DataContext);
  return data;
}
