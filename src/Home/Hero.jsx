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
        <h1><em>Upcoming Show:</em></h1>
        <ul className="list-group list-group-flush display-6 fs-4">
          <li className="list-group-item bg-black text-white"><span className="text-danger">*</span> {nextShow.date} - {nextShow.time}</li>
          <li className="list-group-item bg-black text-white"><span className="text-danger">*</span> {nextShow.location}</li>
          <li className="list-group-item bg-black text-white"><span className="text-danger">*</span> {nextShow.band}</li>
        </ul>
      </div>
    </div>
    
  );
};

export default Hero;
