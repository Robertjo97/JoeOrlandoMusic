import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "./Title.jsx";
import AboutUs from "./AboutUs.jsx";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <NavBar />
      <Title />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
