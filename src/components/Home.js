import React from "react";
import styled from "styled-components";
import CocktailConten from "./CocktailConten";
import Layout from "./Layout";
import Load from "./Load";
import SearchForm from "./SearchForm";
import SideBar from "./SideBar";
const Home = () => {
  return (
    <Layout>
     
      <SearchForm />
      <CocktailConten />
      {/* <Load /> */}
    </Layout>
  );
};

export default Home;
