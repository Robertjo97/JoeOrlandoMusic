import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Hero from "./Hero";
import Image from "./Image";
import Socials from "./Socials";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Image />
      <Hero />
      <Socials/>
    </div>
  );
};

export default Home;
