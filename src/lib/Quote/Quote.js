import React from "react";
import "./Quote.css";


const Quote = () => {
  return <div className="quote-wrapper">
    <div className="quote-content">
        <span className="quote-text">"The best way to get started is to quit talking and begin doing."</span>
    </div>
    <div className="quote-features">
        <button className="quote-button">Like</button>
        <div className="quote-extra-info-wrapper">
          <span className="quote-author">- Walt Disney</span>
          <span className="quote-source">Source</span>
        </div>
    </div>
    <div className="bottom-quote-section">
      <button className="new-quote-button">New Quote</button>
    </div>
  </div>;
};

export default Quote;
