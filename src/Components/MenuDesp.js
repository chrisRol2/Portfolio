import styled from "styled-components";
import React, { useContext } from "react";

import LangContext from "../Context/LangContext.js";

import ThemeContext from "../Context/ThemeContext";
import MenuContext from "../Context/MenuContext";
const Menu = styled.div`
  backdrop-filter: blur(10px);
  transform: translateY(${({ open }) => (open ? "0" : "-60vh")});
  transition: transform 0.6s ease-in;
  position: fixed;
  height: 60vh;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1;
  /* background-color: #fafafae0; */
  background-color: ${({ theme }) => theme.navBg};

  @media (min-width: 853px) {
    transform: translateY(-60vh);
    ${({ close }) => {
      // close(false);
      return "";
    }}
  }
`;
const Language = styled.li`
  cursor: pointer;
  /* height: 25%; */
  font-size: 32px;
  margin: auto;
`;

const Links = styled.ul`
  height: 100%;
  width: 100%;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
`;
const ThemeSelector = styled(Language)`
  &::before {
    content: "${({ themeSel }) => (themeSel === "light" ? "🌝 " : "🌚 ")}";
  }
`;
function MenuDesp({ open }) {
  const { text, setLang, lang } = useContext(LangContext);
  const { themeSel, changeTheme: setTheme } = useContext(ThemeContext);
  const { MenuIsOpen, MenuSetIsOpen } = useContext(MenuContext);

  const changeLanguage = () => setLang(lang === "en" ? "es" : "en");
  const changeTheme = () => setTheme(themeSel === "dark" ? "light" : "dark");

  return (
    <Menu open={MenuIsOpen} close={MenuSetIsOpen}>
      <Links>
        <Language onClick={changeLanguage}>{text.language}</Language>
        <ThemeSelector themeSel={themeSel} onClick={changeTheme}>
          {text.theme}
        </ThemeSelector>
      </Links>
    </Menu>
  );
}
// const MenuContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
// `;
export default MenuDesp;
