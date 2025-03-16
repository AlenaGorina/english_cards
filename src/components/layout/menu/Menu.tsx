import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>
        <Link to="/">My Language App</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Card Game</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
