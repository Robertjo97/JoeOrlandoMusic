import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Paragraph from "./Paragraph";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <NavBar />
      <Paragraph />
      <Footer />
    </div>
  );
};

export default About;
