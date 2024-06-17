import "./app.css";

import Header from "./components/Header";
import NotesContainer from "./components/NotesContainer";
import AppDataContext from "../src/context/AppDataContext";
import FormModal from "./components/FormModal";
import NotesCard from "./components/NotesCard";

function App() {
  return (
    <div className="app">
      <AppDataContext>
        <section className="header-section">
          <Header />
        </section>

        <section className="notes-section">
          <NotesContainer />
        </section>
        <FormModal />
      </AppDataContext>
    </div>
  );
}

export default App;
