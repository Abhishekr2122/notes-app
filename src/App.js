import "./app.css";

import Header from "./components/Header";
import NotesContainer from "./components/NotesContainer";
import AppDataContext from "../src/context/AppDataContext";
import FormModal from "./components/FormModal";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          success: {
            duration: 1000,
          },
          error: {
            duration: 900,
          },
        }}
      />
    </div>
  );
}

export default App;
