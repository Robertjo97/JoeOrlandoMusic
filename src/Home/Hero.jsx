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
        <ul className="list-group list-group-flush display-6 fs-3 text-center">
          <p className="display-6 fs-2 mb-4"><em><strong>Upcoming Show:</strong></em></p>
          <li className="list-group-item bg-black text-white">{nextShow.date} - {nextShow.time}</li>
          <li className="list-group-item bg-black text-white">{nextShow.location}</li>
          <li className="list-group-item bg-black text-white"><span className="text-danger">*</span> {nextShow.band}<span className="text-danger"> *</span></li>
        </ul>
      </div>
    </div>
    
  );
};

export default Hero;
