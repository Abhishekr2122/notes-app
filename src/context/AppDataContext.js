import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export default function AppDataContext({ children }) {
  const navItems = ["Notes", "Favourites", "Saved", "Pinned"];
  const [notesArray, setNotesArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState("Notes");
  const [isClicked, setIsClicked] = useState(false);

  return (
    <DataContext.Provider
      value={{
        navItems,
        selectedItem,
        setSelectedItem,
        isClicked,
        setIsClicked,
        setNotesArray,
        notesArray,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const data = useContext(DataContext);
  return data;
}
