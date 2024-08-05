import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "./Title.jsx";
import AboutUs from "./AboutUs.jsx";
import Meet from "./Meet.jsx";
import Achievements from "./Achievements.jsx";
import Sound from "./Sound.jsx";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <NavBar />
      <Title />
      <AboutUs />
      <Meet />
      <Sound />
      <Achievements />
      <Footer />
    </div>
  );
};

export default About;
