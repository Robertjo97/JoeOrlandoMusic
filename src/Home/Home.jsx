import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Hero from "./Hero";
import Image from "./Image";
import Socials from "./Socials";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <Header />
      <Image />
      <Hero />
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
