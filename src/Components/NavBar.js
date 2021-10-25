import React, { useContext } from "react";
import styled from "styled-components";
import "./Styles/menuButton.scss";

import LangContext from "../Context/LangContext.js";
import logo from "../Images/MarcaColor.png";
import ThemeContext from "../Context/ThemeContext";
import MenuContext from "../Context/MenuContext";
const styles = {};

const NavFull = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  height: 75px;
  width: 100%;
  justify-content: center;
  box-shadow: 2px 1px 2px 1px ${({ theme }) => theme.navShadow};
  background-color: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(10px);
  z-index: 2;
`;
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
  width: 35% !important;
  @media (max-width: 853px) {
    display: none !important;
  }
`;
const ThemeSelector = styled(Li)`
  &::after {
    content: "${({ themeSel }) => (themeSel === "light" ? "🌝" : "🌚")}";
  }
`;

function NavBar() {
  const { text, setLang, lang } = useContext(LangContext);
  const { themeSel, changeTheme: setTheme } = useContext(ThemeContext);
  const { MenuIsOpen, MenuSetIsOpen } = useContext(MenuContext);
  const changeLanguage = (e) => {
    e.stopPropagation();
    setLang(lang === "en" ? "es" : "en");
  };
  const changeTheme = () => setTheme(themeSel === "dark" ? "light" : "dark");
  const openMenu = () => MenuSetIsOpen(!MenuIsOpen);
  return (
    <NavFull id="nav-full" onClick={(e) => e.stopPropagation()}>
      <Nav>
        <LogoName>
          <img src={logo} alt="logo" style={styles.logo} />
          <H2>Chris Rol</H2>
        </LogoName>
        <Links>
          <Li style={styles.li} onClick={(e) => changeLanguage(e)}>
            {text.language}
          </Li>
          <ThemeSelector
            themeSel={themeSel}
            style={styles.li}
            onClick={changeTheme}
          >
            {text.theme}
          </ThemeSelector>
        </Links>
        <MenuButton
          className={`hamburger hamburger--spring ${false ? "is-active" : ""}`}
          type="button"
          onClick={openMenu}
        >
          <span className="hamburger-box ">
            <span className="hamburger-inner"></span>
          </span>
        </MenuButton>
      </Nav>
    </NavFull>
  );
}

export default NavBar;
