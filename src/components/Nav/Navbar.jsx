import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: #343a40;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 4;
  overflow-x: none;

  p {
    color: #f3f3f3;
    font-weight: bold;
    margin: 0.5rem 2rem;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0;
    display: flex;
    justify-content: space-between;
    overflow-x: none;
    transition: top 0.3s;
  }
`;

const Navbar = ({ open, setOpen }) => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <Nav id='navbar'>
        <Link to='/'>
          <p>PRACTICE SHOP</p>
        </Link>
        <Burger open={open} setOpen={setOpen} />
      </Nav>
    </>
  );
};

export default Navbar;
