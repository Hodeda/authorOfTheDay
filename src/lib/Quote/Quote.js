import React, { useContext, useEffect, useState } from "react";
import "./Quote.css";
import axios from 'axios'
import { UserContext } from "../../context/userContext";
import Spinner from "../Spinner/Spinner";

const Quote = () => {

  const [quote, setQuote] = useState("");
  const [likes, setLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { addFavorite } = useContext(UserContext);
  

  useEffect(() => {
    fetchQuote()
  },[])

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://api.quotable.io/random')
      setQuote(response?.data)
      setLikes(0);
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false);
  }

  const handleLikeClick = () => {
    setLikes(prev => prev + 1);
    addFavorite(quote);
  }
  
  return <div className="quote-wrapper">
    <div className="quote-content">
        {isLoading ?  <Spinner/>: <span className="quote-text">"{quote?.content}"</span>}
    </div>
    <div className="quote-features">
      <div className="quote-like-section">
        <button className="quote-button" onClick={handleLikeClick}>Like</button>
        <div className="like-counter">{likes}</div>
      </div>
        <div className="quote-extra-info-wrapper">
          <span className="quote-author">- {quote?.author}</span>
          <span className="quote-topic"><span className="quote-topic-name">Related Topic:</span> {quote?.tags?.[0]}</span>
        </div>
    </div>
    <div className="bottom-quote-section">
      <button className="new-quote-button" onClick={fetchQuote} >New Quote</button>
    </div>
  </div>;
};

export default Quote;
