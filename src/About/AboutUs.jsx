import collective from "../assets/collective.png";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <img src={collective}></img>
      <div className="paragraph">
        <h3>About Us</h3>
        <p className="slogan">
          "We dont make it sound like the record. We come to play the music and
          make it come alive."
        </p>
        <p className="description">
          The Collective was born out of a shared love for classic rock and a
          desire to bring that timeless sound to new audiences. Formed in the
          Sacramento Area, 2019, our band has grown from playing small local
          venues to headlining festivals.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
