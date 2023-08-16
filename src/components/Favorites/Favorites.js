import React, { useContext, useState } from "react";
import "./Favorites.css";
import { UserContext } from "../../context/userContext";
import QuoteCard from "../../lib/QuoteCard/QuoteCard";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
    const navigate = useNavigate();
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
            { favorites.length > 0 ? <div className="search-bar">
                <input 
                    className="search-bar-input"
                    type="text" 
                    placeholder="Search for a quote..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div> :
            <div className="favorites-empty">
                <span className="favorites-empty-text">You don't have any favorites yet!</span>
                <span className="favorites-empty-sub">in order to have favorites <span onClick={()=> navigate('/generators')} className="favorites-redirect-button">Click here!</span> and start adding more quotes to your favorites!</span>
                </div>}
            <div className="list-of-favorites">
                {filteredFavorites.map((quote, index) => (
                    <QuoteCard key={index} quote={quote} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
