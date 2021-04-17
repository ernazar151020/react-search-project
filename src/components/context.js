import React, { useState, useEffect, useContext, useCallback } from "react";
import styled from "styled-components";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktail, setCocktail] = useState([]);
  const [show, setShow] = useState(false);

  const toggle = () => {
    console.log("sdav");
    setShow(!show);
  };

  const fethCocktails = useCallback(() => {
    setLoading(true);
    try {
      fetch(`${url}${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          const { drinks } = data;
          if (drinks) {
            const newCocktail = drinks.map((item) => {
              const {
                idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass,
              } = item;
              return {
                id: idDrink,
                name: strDrink,
                img: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass,
              };
            });
            setCocktail(newCocktail);
          } else {
            setCocktail([]);
          }
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);
  useEffect(() => {
    fethCocktails();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{ loading, cocktail, setSearchTerm, toggle, show }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Context };
