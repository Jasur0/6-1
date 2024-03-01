import googlePlay from "../images/google.svg";
import app from "../images/app.svg";

function Footer() {
  return (
    <footer>
      <footer class="footer">
        <div class="container">
          <div class="footer__media">
            <a href="" class="footer__link">
              <img src={googlePlay} alt="google play" />
            </a>
            <a href="" class="footer__link">
              <img src={app} alt="app store" />
            </a>
          </div>
          <p class="footer__text">© PROWEB. В целях обучения 2021</p>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
