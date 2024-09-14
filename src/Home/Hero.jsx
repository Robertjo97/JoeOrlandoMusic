import { useEffect, useState } from "react";

const Hero = () => {
  const [nextShow, setNextShow] = useState({});

  useEffect(() => {
    fetch("./shows.json")
      .then((response) => response.json())
      .then((data) => setNextShow(data[0]))
      .catch((error) => console.error("Error: ", error));
  }, []);

  return (

    <div className="container">
      <div className="hero d-flex justify-content-center border-top border-bottom p-5 align-items-center gap-5 mb-5">
        <h2><em>Upcoming Show:</em></h2>
        <ul className="list-group list-group-flush display-6 fs-3 text-center">
          <li className="list-group-item bg-black text-white"><span className="text-danger">*</span> {nextShow.date} - {nextShow.time}<span className="text-danger"> *</span></li>
          <li className="list-group-item bg-black text-white"><span className="text-danger">*</span> {nextShow.location}<span className="text-danger"> *</span></li>
          <li className="list-group-item bg-black text-white"><span className="text-danger">*</span> {nextShow.band}<span className="text-danger"> *</span></li>
        </ul>
      </div>
    </div>
    
  );
};

export default Hero;
