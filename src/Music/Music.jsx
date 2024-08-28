import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Music = () => {
  return (
    <div className="music-container vh-100 d-flex flex-column justify-content-between">
      <NavBar />
      <p className="text-center">Music Page</p>
      <Footer />
    </div>
  );
};

export default Music;
