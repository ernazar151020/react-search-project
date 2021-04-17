import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleCocktail = ({ name, img, info, glass, id }) => {
  return (
    <Single>
      <ImgContent>
        <Img src={img} />
      </ImgContent>
      <Footer>
        <H1>{name}</H1>
        <Glass>{glass}</Glass>
        <Info>{info}</Info>
        <Btn to={`/cocktail/${id}`}>Details</Btn>
      </Footer>
    </Single>
  );
};

export default SingleCocktail;
const Img = styled.img`
  width: 100%;
  transition: all 0.5s ease-in-out;
`;
const ImgContent = styled.div`
  overflow: hidden;
`;
const Single = styled.div`
  text-align: center;
  cursor: pointer;
  border: 2px solid #50c878;
  padding-bottom: 10px;
  :hover ${Img} {
    transform: scale(1.2);
  }
`;

const Footer = styled.div``;
const H1 = styled.h1``;
const Glass = styled.h5`
  color: green;
`;
const Info = styled.p`
  color: red;
  margin-bottom: 1rem;
`;
const Btn = styled(Link)`
  padding: 5px 2rem;
  background: #50c878;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 20px;
`;
