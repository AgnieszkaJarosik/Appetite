import React from "react";
import Logo from 'components/Logo/Logo';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container} >
      <Logo dark />
      <p className={styles.name}>&copy; 2020 <br /> Designed by AJarosik</p>
    </footer>
  );
}

export default Footer
