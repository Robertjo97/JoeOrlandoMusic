import facebook from "../assets/socialmedia/fb.png";
import instagram from "../assets/socialmedia/insta.png";
import bandcamp from "../assets/socialmedia/bc.png";
import collectivefb from "../assets/socialmedia/Snap1.png";

const Socials = () => {
  return (
    <div className="socials">
      <ul>
        <li>
          <a href="http://www.facebook.com/JoeOrlandoMusician">
            <img
              className="icons"
              src={facebook}
              alt="Joe Orlando Musician facebook link"
            ></img>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/joeorlandomusic/">
            <img className="icons" src={instagram} alt="Instagram link"></img>
          </a>
        </li>
        <li>
          <a href="https://lando-music7.bandcamp.com/releases">
            <img className="icons" src={bandcamp} alt="Bandcamp link"></img>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/LandoCollective"><div className="collective-container">The Collective</div></a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
