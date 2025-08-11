import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import "./shows.css";
import { parseDates } from "../utils.js";

const Shows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("/shows.json")
      .then((Response) => Response.json())
      .then((data) => {
        setShows(parseDates(data));
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div className="shows-container vh-100 d-flex flex-column justify-content-between">
      <NavBar />
      <div className="shows-title mx-auto my-5">
        <h2>Come see us live!</h2>

      </div>
      <div className="shows-list container mb-5 d-flex justify-content-center align-items-center">
        {shows.length > 0 ? (
          <ul className="list-group list-group-flush display-6 fs-4 text-center">
            {shows.map((show, index) => (
              <li className="list-group-item bg-black p-4 text-white" key={index}>
                <p><span className="text-danger">* </span>{show.band}<span className="text-danger"> *</span></p>
                <p>{show.day} | {show.date} | {show.time}</p>
                <p><em>{show.location}</em></p>
                {show.custom && <p><span className="text-warning">* </span>{show.custom}<span className="text-warning"> *</span></p>}
              </li>
            ))}
          </ul>
        ) : (<p className="text-center">No upcoming shows at this time. Please check back soon!</p>)}
      </div>
      <Footer />
    </div>
  );
};

export default Shows;
