import { createContext, useContext } from "react";

const DataContext = createContext();

export default function AppDataContext({ children }) {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  const data = useContext(DataContext);
  return data;
}
