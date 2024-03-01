import filmIcon from "../images/film_icon.svg";
import logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <div class="header__top">
        <img src={filmIcon} alt="film icon" />
        <p>See no special offer restrictions</p>
      </div>
      <nav class="header__nav">
        <div class="container">
          <a href="" class="header__logo">
            <img src={logo} alt="logo" />
            <span>cinemas</span>
          </a>
          <ul class="header__list">
            <li class="header__item">
              <a href="" class="header__link">
                Films
              </a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">
                Serials
              </a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">
                Cartoons
              </a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">
                Collections
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
