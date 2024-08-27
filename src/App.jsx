import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import TheCollective from "./Projects/TheCollective/TheCollective.jsx";
import Shows from "./Shows/Shows.jsx";
import Music from "./Music/Music.jsx";
import Contact from "./Contact/Contact.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thecollective" element={<TheCollective />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
