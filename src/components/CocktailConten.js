import React from "react";
import styled from "styled-components";
import Load from "../components/Load";
import { useGlobalContext } from "../components/context";
import SingleCocktail from "./SingleCocktail";
const CocktailConten = () => {
  const { cocktail, loading } = useGlobalContext();
  if (loading) {
    return <Load />;
  }
  if (cocktail.length < 1) {
    return <H2>no cocktails matched your search criteria</H2>;
  }
  return (
    <>
      <div className="container">
        <MainContent>
          {cocktail.map((item) => {
            return <SingleCocktail key={item.id} {...item} />;
          })}
        </MainContent>
      </div>
    </>
  );
};

export default CocktailConten;
const H2 = styled.h2`
  text-align: center;
  text-transform: capitalize;
  color: red;
`;
const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 2rem 0;
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
