import React, { useContext, useState } from "react";
import "./Favorites.css";
import { UserContext } from "../../context/userContext";
import QuoteCard from "../../lib/QuoteCard/QuoteCard";

const Favorites = () => {
    const {favorites} = useContext(UserContext);
    const [search, setSearch] = useState("");
    const filteredFavorites = favorites.filter(quote => 
        quote.content.toLowerCase().includes(search.toLowerCase()) || 
        quote.author.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="favorites-wrapper">
            <div className="favorites-title">
                <h1 className="favorites-header">Favorites</h1>
                <span className="favorites-subheader">Here you can find all your favorite quotes!</span>
            </div>
            <div className="search-bar">
                <input 
                    className="search-bar-input"
                    type="text" 
                    placeholder="Search for a quote..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="list-of-favorites">
                {filteredFavorites.map((quote, index) => (
                    <QuoteCard key={index} quote={quote} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
