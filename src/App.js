import "./app.css";

import Header from "./components/Header";
import NotesContainer from "./components/NotesContainer";
import AppDataContext from "../src/context/AppDataContext";

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
      </AppDataContext>
    </div>
  );
}

export default App;
