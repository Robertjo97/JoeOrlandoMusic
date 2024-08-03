import Header from "../components/Header";
import NavBar from "../components/Navbar";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="top">
        <Header />
        <NavBar />
      </div>
      <p>About page</p>
    </div>
  );
};

export default About;
