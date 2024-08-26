import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";

const Shows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("/shows.json")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setShows(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div className="shows-container vh-100 d-flex flex-column justify-content-between">
      <NavBar />
      <div className="shows-list container mb-5">
        {shows.length > 0 ? (
          <ul className="list-group list-group-flush">
            {shows.map((show, index) => (
              <li className="list-group-item bg-black text-center" key={index}>
                {show.date} - {show.time}<br></br>{show.location}<br></br>{show.band}
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
