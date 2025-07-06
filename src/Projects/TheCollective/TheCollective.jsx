import NavBar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Title from "./Title.jsx";
import AboutUs from "./AboutUs.jsx";
import Meet from "./Meet.jsx";
import Achievements from "./Achievements.jsx";
import Sound from "./Sound.jsx";

const TheCollective = () => {
  return (
    <div className="TC-container vh-100 d-flex flex-column justify-content-between">
      <NavBar />
      <p className="text-center">The Collective</p>
      <Footer />
    </div>
  );
};

export default TheCollective;
