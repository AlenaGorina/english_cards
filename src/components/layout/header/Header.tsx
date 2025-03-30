import logo from "../../../assets/alphabet.png";

import style from "./Header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logoContainer}>
        <img src={logo} alt="Logo" className={style.logo} />
      </div>
      <h1>Word Learning App</h1>
    </header>
  );
}

export default Header;
