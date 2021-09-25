import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>News App</h1>
      <h2 onClick={props.onOpenModal}>Saved News</h2>
    </div>
  );
};

export default Navbar;
