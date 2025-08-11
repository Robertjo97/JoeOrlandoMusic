import { useEffect, useState } from "react";
import { parseDates } from "../utils.js";

const Hero = () => {
  const [nextShow, setNextShow] = useState({});

  useEffect(() => {
    fetch("./shows.json")
      .then((response) => response.json())
      .then((data) => setNextShow(parseDates(data)[0]))
      .catch((error) => console.error("Error: ", error));
  }, []);

  return (

    <div className="container">
      <div className="hero d-flex justify-content-center border-top border-bottom p-5 align-items-center gap-5 mb-5">
        {nextShow && nextShow.date ? (
          <ul className="list-group list-group-flush display-6 fs-3 text-center">
            <p className="display-6 fs-2 mb-4"><em><strong>Upcoming Show:</strong></em></p>
            <li className="list-group-item bg-black text-white"><span className="text-danger">*</span> {nextShow.band}<span className="text-danger"> *</span></li>
            <li className="list-group-item bg-black text-white">{nextShow.day} | {nextShow.date} | {nextShow.time}</li>
            <li className="list-group-item bg-black text-white"><em>{nextShow.location}</em></li>
            <li className="list-group-item bg-black text-white">{nextShow.custom && <p><span className="text-warning">* </span>{nextShow.custom}<span className="text-warning"> *</span></p>}</li>
          </ul>
        ) : (<p className="text-center">No upcoming shows at this time. Please check back soon!</p>)}
      </div>
    </div>

  );
};

export default Hero;
