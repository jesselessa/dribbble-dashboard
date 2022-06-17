// REACT
import React from "react";
// OTHER LIBRARIES
import { Icon } from "@iconify/react";
// STYLED COMPONENTS
import styled from "styled-components";
// PHOTOS
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <img src={Logo} alt="logo" className="logoImg" />
      </div>
      <div className="icons">
        <div className="icon first">
          <Icon icon="bi:clipboard-data-fill" color="white" width="30" />
        </div>
        <div className="icon">
          <Icon icon="bi:graph-up" color="#33007b" width="30" />
        </div>
        <div className="icon">
          <Icon icon="bi:chat-dots" color="#33007b" width="30" />
        </div>
        <div className="icon">
          <Icon icon="bi:people" color="#33007b" width="30" />
        </div>
        <div className="icon">
          <Icon icon="bi:clipboard-check" color="#33007b" width="30" />
        </div>
        <div className="icon">
          <Icon icon="bi:gear" color="#33007b" width="30" />
        </div>
      </div>
    </Nav>
  );
}

//! ****************** STYLES ******************//
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 7vw;
  background: #fbfaff;
  transition: all 0.2s ease-in-out;
  z-index: 5;
  .logo,
  .icons,
  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    object-fit: cover;
    height: 10vh;
    max-width: 100%;
  }
  .logoImg {
    width: 14rem;
    height: auto;
  }
  .icons {
    width: 100%;
    padding-top: 25vh;
    gap: 3rem;
  }
  .first {
    background: #5152e2;
    border-radius: 0.8rem;
    height: 5rem;
    width: 5rem;
    box-shadow: 0px 0.8rem 1.2rem -0.1rem rgba(0, 0, 0, 0.39);
  }
  //************* MEDIA QUERIES ****************//
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
