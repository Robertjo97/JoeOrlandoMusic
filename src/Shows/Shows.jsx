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
        setShows(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div className="shows-container vh-100 d-flex flex-column justify-content-between">
      <NavBar />
      <div className="title mx-auto my-5">
        <h2>Come see us live!</h2>
        
      </div>
      <div className="shows-list container mb-5 d-flex justify-content-center align-items-center">
        {shows.length > 0 ? (
          <ul className="list-group list-group-flush display-6 fs-4 mb-5">
            {shows.map((show, index) => (
              <li className="list-group-item bg-black p-4" key={index}>
                <span className="text-danger">* </span>{show.date} - {show.time}<br></br><span className="text-danger">* </span>{show.location}<br></br><span className="text-danger">* </span>{show.band}
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
