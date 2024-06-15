import "./app.css";

import Header from "./components/Header";
import NotesContainer from "./components/NotesContainer";

function App() {
  return (
    <div className="app">
      <section className="header-section">
        <Header />
      </section>

      <section className="notes-section">
        <NotesContainer />
      </section>
    </div>
  );
}

export default App;
