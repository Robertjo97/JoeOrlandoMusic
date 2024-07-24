import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Hero from "./Hero";
import Image from "./Image";

let Home = () => {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Image />
      <Hero />
    </div>
  );
};

export default Home;
