import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Load from "../components/Load";
import styled from "styled-components";
import Layout from "../components/Layout";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const SingleCocktailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const getCocktail = () => {
    // setLoading(true);
    try {
      fetch(`${url}${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.drinks) {
            const {
              strDrink: name,
              strDrinkThumb: img,
              strAlcoholic: info,
              strCategory: category,
              strGlass: glass,
              strInstructions: instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            } = data.drinks[0];

            const ingredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            ];
            const newCocktail = {
              name,
              img,
              info,
              category,
              glass,
              instructions,
              ingredients,
            };
            setCocktail(newCocktail);
          } else {
            setCocktail(null);
          }
        });
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    getCocktail();
  }, [id]);

  if (loading) {
    return <Load />;
  }
  if (!cocktail) {
    return (
      <>
        <Layout>No cokctail to display</Layout>;
      </>
    );
  }

  const {
    name,
    img,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;
  return (
    <Layout>
      <div className="container">
        <Content>
          <Title>{name}</Title>
          <Info>
            <ImgContent>
              <Img src={img} />
            </ImgContent>
            <MainContent>
              <Text>
                Name: <Span>{name}</Span>
              </Text>
              <Text>
                Categoty: <Span>{category}</Span>
              </Text>
              <Text>
                Info: <Span>{info}</Span>
              </Text>
              <Text>
                Glass: <Span>{glass}</Span>
              </Text>
              <Text>
                Instructions: <Span>{instructions}</Span>
              </Text>
              <Text>
                Ingredients:
                {ingredients.map((item) => {
                  return item ? <Span>{item}</Span> : null;
                })}
              </Text>
            </MainContent>
          </Info>
        </Content>
      </div>
    </Layout>
  );
};

export default SingleCocktailPage;
const H2 = styled.h2``;
const Content = styled.div`
  padding: 2rem 0;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
`;
const ImgContent = styled.div``;
const Img = styled.img`
  width: 80%;
`;
const MainContent = styled.div``;
const Text = styled.div`
  font-size: 20px;
  line-height: 50px;
  color: green;
  font-weight: 900;
`;
const Span = styled.span`
  background: #ffc222;
  border-radius: 10px;
  line-height: 30px;
  padding: 5px;
  color: #0a0a0a;
  font-weight: 400;
`;
