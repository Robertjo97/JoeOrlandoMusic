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
    <div className="container hero text-center mb-5">
      <p className="display-6 fs-2 mb-4">
        <strong>
          <em>Upcoming Show:</em>
        </strong>
      </p>
      <ul className="list-group list-group-flush display-6 fs-4">
        <li className="list-group-item pb-3">
          {nextShow.date} - {nextShow.time}
        </li>
        <li className="list-group-item p-3">{nextShow.location}</li>
        <li className="list-group-item pt-3">{nextShow.band}</li>
      </ul>
    </div>
  );
};

export default Hero;
