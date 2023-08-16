import React, { useContext, useEffect, useState } from "react";
import "./Quote.css";
import axios from 'axios'
import { UserContext } from "../../context/userContext";
import Spinner from "../../lib/Spinner/Spinner";
import { Snackbar, Alert } from "@mui/material";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [likes, setLikes] = useState(0);
  const [searchTag, setSearchTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false)
	const [message, setMessage] = useState("")
	const [typeOfSeverity, setTypeOfSeverity] = useState("success")
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

  const fetchQuoteByCategory = async (e) => {
    e.preventDefault()
    if(!searchTag) {
      setOpen(true)
      setMessage("Please enter a category")
      setTypeOfSeverity("error")
    }
    try {
      const response = await axios.get(`https://api.quotable.io/random?tags=${searchTag}`);
      setQuote(response?.data);
      setLikes(0);
    } catch (error) {
      console.log(error)
      setOpen(true)
      setMessage("No quotes found for this category")
      setTypeOfSeverity("error")     
    }
  }

  const handleLikeClick = () => {
    setLikes(prev => prev + 1);
    addFavorite(quote);
    setOpen(true)
    setMessage("Quote added to favorites!")
    setTypeOfSeverity("success")
  }

  const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return
		}
		setOpen(false)
	}
  
  return <div className="quote-wrapper">
    <form className="quote-searching-feature">
      <input className="search-homepage-input" type="text" value={searchTag} onChange={(e) => setSearchTag(e.target.value)} placeholder="Enter category (e.g. inspiration)"/>
      <button className="homepage-search-button" type="submit" onClick={fetchQuoteByCategory}>Search</button>
    </form>
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
    <Snackbar
							open={open}
							autoHideDuration={3000}
							onClose={handleClose}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
						>
							<Alert
								onClose={handleClose}
								severity={typeOfSeverity}
								sx={{ width: "100%" }}
							>
								{message}
							</Alert>
						</Snackbar>
  </div>;
};

export default Quote;
