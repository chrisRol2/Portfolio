import React, { useContext } from "react";
import LangContext from "../Context/LangContext.js";
import logo from "../Images/MarcaColor.png";
function NavBar() {
  const { text } = useContext(LangContext);
  const styles = {};
  styles.navBar = {
    display: "flex",
    position: "fixed",
    height: "5rem",
    width: "100%",
    boxShadow: "2px 1px 2px 1px rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    backgroundColor: "#ffffffc0",
    backdropFilter: "blur(10px)",
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
    justifyContent: "space-evenly",
  };
  styles.logo = {
    height: "80%",
  };
  styles.li = {
    cursor: "pointer",
  };
  return (
    <nav style={styles.navBar}>
      <ul style={styles.ul}>
        <img src={logo} alt="logo" style={styles.logo} />
        <ul style={styles.ul2}>
          <li style={styles.li}>{text.clients}</li>
          <li style={styles.li}>{text.projects}</li>
          <li style={styles.li}>{text.skills}</li>
          <li style={styles.li}>{text.about}</li>
        </ul>
      </ul>
    </nav>
  );
}

export default NavBar;
