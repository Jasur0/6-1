import filmIcon from "../images/film_icon.svg";
import logo from "../images/logo.png";
import uz from "../images/uz.svg";
import en from "../images/ENG.webp";
import { useContext } from "react";
import { Context } from "../context/Context";

function Header() {
  const { flag, changeLang, lang } = useContext(Context);
  return (
    <header>
      <div class="header__top">
        <img src={filmIcon} alt="film icon" />
        <p>{lang.restrictions}</p>
      </div>
      <nav class="nav">
        <div class="container">
          <a href="" class="header__logo">
            <img src={logo} alt="logo" />
            <span>cinemas</span>
          </a>
          <ul class="header__list">
            <li class="header__item">
              <a href="" class="header__link">
                {lang.films}
              </a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">
                {lang.serials}
              </a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">
                {lang.cartoons}
              </a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">
                {lang.collections}
              </a>
            </li>
          </ul>
          <div className="nav__lang">
            <button
              className={`nav__lang-btn ${flag === true ? "active" : ""}`}
              onClick={() => changeLang("uz")}
            >
              <span>UZ</span>
              <img src={uz} alt="uzbek" />
            </button>
            <button
              className={`nav__lang-btn ${flag === false ? "active" : ""}`}
              onClick={() => changeLang("en")}
            >
              <span>EN</span>
              <img src={en} alt="russian" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
