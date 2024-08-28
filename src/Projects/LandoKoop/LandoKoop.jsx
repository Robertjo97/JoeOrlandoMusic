import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const LandoKoop = () => {
  return (
    <div className="LK-container vh-100 d-flex flex-column justify-content-between">
      <NavBar />
      <p className="text-center">Lando Koop</p>
      <Footer />
    </div>
  );
};

export default LandoKoop;