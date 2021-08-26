import React, { useContext } from "react";
import styled from "styled-components";
import "./Styles/menuButton.css";

import LangContext from "../Context/LangContext.js";
import logo from "../Images/MarcaColor.png";
const styles = {};
styles.navBar = {
  display: "flex",
  position: "sticky",
  top: 0,
  height: "75px",
  width: "100%",
  justifyContent: "center",
  boxShadow: "2px 1px 2px 1px rgba(0, 0, 0, 0.2)",
  backgroundColor: "#ffffff50",
  backdropFilter: "blur(10px)",
  zIndex: "1",
};
styles.ul = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  width: "70%",
};
styles.ul2 = {
  ...styles.ul,
  width: "50%",

  justifyContent: "space-evenly",
};
styles.logo = {
  height: "80%",
};

const Li = styled.li`
  cursor: pointer;
`;

const H2 = styled.h2`
  justify-self: start;
  margin-left: 1rem;
  display: block;
  @media (max-width: 853px) {
    display: none;
  }
  /* font-size: 2rem; */
`;
const LogoName = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.button`
  display: none;
  @media (max-width: 853px) {
    display: block;
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 70%;
`;
const Links = styled(Nav)`
  width: 50% !important;
  @media (max-width: 853px) {
    display: none !important;
  }
`;
function NavBar() {
  const { text } = useContext(LangContext);

  return (
    <nav style={styles.navBar}>
      <Nav>
        <LogoName>
          <img src={logo} alt="logo" style={styles.logo} />
          <H2>Chris Rol</H2>
        </LogoName>
        <Links>
          <Li style={styles.li}>{text.contact}</Li>
          <Li style={styles.li}>{text.clients}</Li>
          <Li style={styles.li}>{text.skills}</Li>
          <Li style={styles.li}>{text.projects}</Li>
          <Li onClick={() => window.scrollTo(0, 0)} style={styles.li}>
            {text.about}
          </Li>
        </Links>
        <MenuButton
          // onClick={handleMenuClick}
          className={`hamburger hamburger--spring ${false ? "is-active" : ""}`}
          type="button"
        >
          <span className="hamburger-box ">
            <span className="hamburger-inner"></span>
          </span>
        </MenuButton>
      </Nav>
    </nav>
  );
}

export default NavBar;
