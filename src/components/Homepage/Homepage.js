import React from "react";
import "./Homepage.css";
import Quote from "../Quote/Quote";

const Homepage = () => {
  return <div className="homepage-wrapper">
    <div className="homepage-title">
        <h1 className="homepage-header">Welcome to AutherOfTheDay</h1>
        <span className="homepage-subheader">Below you can find a quote we thought you might like, feel free to generate more or even search for your own quote by your prefered category!</span>
    </div>
    <div className="homepage-middle-content">
        <Quote/>
    </div>

  </div>;
};

export default Homepage;
