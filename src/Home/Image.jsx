import joeImage from "../assets/BIO-4.png";

const Image = () => {
  return (
    <div className="image mb-5">
      <img src={joeImage} className="rounded-3 shadow-lg border" alt="Picture of Joe Orlando"></img>
    </div>
  );
};

export default Image;
