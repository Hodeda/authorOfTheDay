import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (quote) => {
    setFavorites(prevFavorites => {
        const quoteExists = prevFavorites.some(existingQuote => existingQuote.content === quote.content);
        if (quoteExists) return prevFavorites;
        return [...prevFavorites, quote];
    });
}


  const removeFavorite = (quoteId) => {
    setFavorites(prevFavorites => prevFavorites.filter(q => q._id !== quoteId));
  }

  return (
    <UserContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </UserContext.Provider>
  );
};


