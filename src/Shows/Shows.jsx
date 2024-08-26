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
      <div className="shows-list">
        {shows.length > 0 ? (
          <ul>
            {shows.map((show, index) => (
              <li key={index}>
                {show.date} - {show.time}<br></br>{show.location}<br></br>{show.band}
              </li>
            ))}
          </ul>
        ) : (<p>No upcoming shows. Please check back soon!</p>)}
      </div>
      <Footer />
    </div>
  );
};

export default Shows;
