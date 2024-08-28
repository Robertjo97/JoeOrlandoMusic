import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import TheCollective from "./Projects/TheCollective/TheCollective.jsx";
import LandoKoop from "./Projects/LandoKoop/LandoKoop.jsx";
import Band3 from "./Projects/Band3/Band3.jsx";
import Band4 from "./Projects/Band4/Band4.jsx";
import Shows from "./Shows/Shows.jsx";
import Music from "./Music/Music.jsx";
import Contact from "./Contact/Contact.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thecollective" element={<TheCollective />} />
        <Route path="/landokoop" element={<LandoKoop/>}/>
        <Route path="/band3" element={<Band3/>}/>
        <Route path="/band4" element={<Band4/>}/>
        <Route path="/shows" element={<Shows />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
