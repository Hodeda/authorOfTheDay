import React, { useContext, useEffect } from "react";
import "./Favorites.css";
import { UserContext } from "../../context/userContext";
import QuoteCard from "../../lib/QuoteCard/QuoteCard";

const Favorites = () => {
    const {favorites} = useContext(UserContext);

    useEffect(() => {
        console.log(favorites)
    },[])
  return <div className="favorites-wrapper">
    <div className="favorites-title">
        <h1 className="favorites-header">Favorites</h1>
        <span className="favorites-subheader">Here you can find all your favorite quotes!</span>
    </div>
    <div className="list-of-favorites">
        {favorites.map((quote, index) => (
            <QuoteCard key={index} quote={quote} />
        ))}
    </div>
  </div>;
};

export default Favorites;
