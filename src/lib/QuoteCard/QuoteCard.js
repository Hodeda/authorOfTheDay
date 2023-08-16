import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({quote}) => {
    return (
        <div className="quote-card-wrapper">
          <p className="quote-card-content">"{quote?.content}"</p>
          <span className="quote-card-topic">- {quote?.tags?.[0]}</span>
          <span className="quote-card-author">- {quote?.author}</span>
        </div>
      );
    };

export default QuoteCard;
