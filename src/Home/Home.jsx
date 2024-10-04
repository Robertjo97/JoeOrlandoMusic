import { useEffect } from "react";
import NavBar from "../components/Navbar";
import Hero from "./Hero";
import Image from "./Image";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Force reflow on load to fix the layout issue
    document.body.style.display = "none";
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = "";
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="home-container vh-100 d-flex flex-column justify-content-between">
      <NavBar />
      <Image />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
