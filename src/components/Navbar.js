import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const { toggle } = useGlobalContext();

  const ChangeScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeScroll);
  }, []);
  return (
    <Nav>
      <Logo to="/">The Cocktail </Logo>
      <Bars onClick={toggle} />
      <Menu>
        <MenuList to="/">Home</MenuList>
        <MenuList to="/about">about</MenuList>
      </Menu>
    </Nav>
  );
};

export default Navbar;
const Bars = styled(FaBars)`
  font-size: 26px;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    display: block;
    margin-right: 1rem;
  }
`;
const Nav = styled.nav`
  height: 80px;
  padding: 0 2rem;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 743px) {
    padding: 0 15px;
  }
`;
const Logo = styled(Link)`
  font-size: 24px;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 800;
  text-decoration: none;
  color: #0a0a0a;
`;

const Menu = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const MenuList = styled(Link)`
  padding: 0 20px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
`;
