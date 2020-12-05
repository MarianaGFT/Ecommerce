import React from "react";
import styled from "styled-components";

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  width: 50px;
  background: #343a40;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 350px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 3;

  a {
    padding-top: 50px;
    text-decoration: none;
    text-align: center;
    line-height: 100px;
    transition: 0.5s;
  }

  span {
    font-family: "Roboto";
    color: hsla(0, 0%, 100%, 0.5);
    font-size: 30px;
  }

  .Astronaut2 {
    width: 80px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 110vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    span {
      font-family: "Roboto";
    }

    a {
      line-height: 60px;
      text-align: center;
      text-decoration: none;
    }

    a:hover {
      padding-left: 15px;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <a href='#membresias' onClick={() => setOpen(!open)}>
        <span>Cart</span>
      </a>
      <a href='#servicios' onClick={() => setOpen(!open)}>
        <span>Sign in</span>
      </a>
    </Ul>
  );
};

export default RightNav;
