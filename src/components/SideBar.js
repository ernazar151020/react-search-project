import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const SideBar = () => {
  const { toggle, show } = useGlobalContext();
  return (
    <Sidebar show={show} onClick={toggle}>
      <Close onClick={toggle} />
      <MenuList>
        <List to="/">Home</List>
        <List to="/about">About</List>
      </MenuList>
    </Sidebar>
  );
};

export default SideBar;
const Sidebar = styled.div`
  position: fixed;
  z-index: 200;
  right: ${({ show }) => (show ? " 0" : "-100%")};
  top: 0;
  /* left: 0; */
  bottom: 0;
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  background: #0a0a0a;
`;
const Close = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  margin: 10px;
  cursor: pointer;
`;
const List = styled(Link)`
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 1rem;
  display: block;
`;
const MenuList = styled.div`
  text-align: center;
  padding: 2rem 0;
`;
