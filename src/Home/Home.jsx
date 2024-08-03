import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Hero from "./Hero";
import Image from "./Image";
import Socials from "./Socials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <NavBar />
      <Image />
      <Hero />
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
