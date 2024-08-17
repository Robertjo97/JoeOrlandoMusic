import NavBar from "../components/Navbar";
import Hero from "./Hero";
import Image from "./Image";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <Image />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
