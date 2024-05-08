import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const backgroundStyle = {
    backgroundImage: "url(HD.jpg)", // Set the image URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Set minimum height to cover the viewport
    display: "flex",
    alignItems: "center"
  };

  return (
    <div className="landing" style={backgroundStyle}>
      <div className="left">
        <div className="logo">
          <img src="USM.ico" alt="Logo" />
        </div>

        <div className="title-large">Blockchain Based Election System</div>
        {/* <div className="title-large">Voting System</div> */}
        <div className="title-small">the future of voting</div>

        <div className="button-wrapper">
          <Link to="/login">
            <button className="button-black">Login</button>
          </Link>

          <Link to="/view">
            <button>View Votes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
