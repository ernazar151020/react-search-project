import React, { useRef } from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context.js";
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchItem = useRef("");

  const handleSearch = () => {
    setSearchTerm(searchItem.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  React.useEffect(() => {
    searchItem.current.focus();
  }, []);
  return (
    <FormContent onSubmit={handleSubmit}>
      <Form>
        <H2>Search your favotite cocktail</H2>
        <Input ref={searchItem} onChange={handleSearch} />
      </Form>
      ;
    </FormContent>
  );
};

export default SearchForm;
const FormContent = styled.div`
  margin: 2rem 0;
  text-align: center;
`;
const Form = styled.form`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6);
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;
const Input = styled.input`
  width: 300px;
  padding: 10px;
  /* background: #ccc; */
  @media screen and (max-width: 743px) {
    width: 100%;
  }
`;
const H2 = styled.h2`
  color: #50c878;
  font-size: 18px;
  margin: 10px 0 20px;
  text-transform: uppercase;
`;
