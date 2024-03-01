import Header from "./components/Header";

import introBg from "./images/intro_bg.png";

import film1 from "./images/film1.png";
import film2 from "./images/film2.png";
import film3 from "./images/film3.png";
import film4 from "./images/film4.png";
import filmsIcon from "./images/play.svg";

import video from "./videos/video.mp4";
import widov from "./images/widow.png";

import collect1 from "./images/collect1.png";
import collect2 from "./images/collect2.png";
import collect3 from "./images/collect3.png";
import rectangle from "./images/rectangle.png";
import play from "./images/play.svg";

import series1 from "./images/series1.png";
import series2 from "./images/series2.png";
import series3 from "./images/series3.png";
import series4 from "./images/series4.png";
import series5 from "./images/series5.png";
import series6 from "./images/series6.png";
import Footer from "./components/Footer";

const filmsBox = [
  {
    img: film1,
    icons: filmsIcon,
    time: "2:14:33",
    title: "Black Panther",
    text: "At first glance, you can decide that Wakanda is an ordinary territory of wild Africa, but this is not so. Here, in the bowels of the desert lands, there are hidden deposits of a unique metal capable of absorbing...",
  },
  {
    img: film2,
    icons: filmsIcon,
    time: "2:32:13",
    title: "The Dark Knight",
    text: "Batman raises stakes in the war on crime. With the help of Lieutenant Jim Gordon and Attorney Harvey Dent, he intends to clear the streets of crime that is poisoning the city. The cooperation is effective, but soon they...",
  },
  {
    img: film3,
    icons: filmsIcon,
    time: "1:53:45",
    title: "The Gentlemen",
    text: "One cunning American, from his student years, had been selling drugs, and now he came up with a scheme of illegal enrichment using the estates of an impoverished English aristocracy and made a very good fortune on ...",
  },
  {
    img: film4,
    icons: filmsIcon,
    time: "2:58:20",
    title: "The Lord of the...",
    text: "Tales of Middle-earth is a chronicle of the Great War for the Ring, a war that lasted more than one thousand years. The one who owned the Ring received power over all living creatures, but was obliged to serve evil...",
  },
];
const collectBox = [
  {
    image: collect1,
    rectangle: rectangle,
    play: play,
    text: "All Marvel Films",
  },
  {
    image: collect2,
    rectangle: rectangle,
    play: play,
    text: "Fast and the Furious",
  },
  {
    image: collect3,
    rectangle: rectangle,
    play: play,
    text: "Star Wars",
  },
];

function App() {
  return (
    <div>
      <Header />
      <main>
        <section class="intro">
          <img src={introBg} alt="intro" class="intro__bg" />
          <div class="intro-content">
            <div class="container">
              <h1 class="intro__title">Kong: Skull Island</h1>
              <p class="intro__text">
                The film takes the viewer to the 70s of the last century. The
                protagonist organizes an expedition to the Skull island, always
                covered in fog, on which King Kong was once caught to find the
                missing brother and some mysterious substance. During...
              </p>
              <div class="intro__button">
                <button class="watch__btn">Watch Now</button>
                <button class="intro__load">Download</button>
              </div>
            </div>
          </div>
        </section>
        <section class="films">
          <div class="container">
            <h2 class="section__title">films</h2>
            <div class="films__content">
              {filmsBox.map((item) => {
                return (
                  <div class="films__box">
                    <img src={item.img} alt="Black Panther" class="films__bg" />
                    <div class="films__info">
                      <img src={item.icons} alt="play" class="films__icon" />
                      <div class="films__time">{item.time}</div>
                      <p class="films__title">{item.title}</p>
                      <p class="films__text">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section class="widow">
          <video src={video} class="widow__bg" autoplay muted></video>
          <div class="widow__content">
            <div class="container">
              <img src={widov} alt="" class="widow__image" />
              <p class="widow__text">
                After the events at the Leipzig-Halle airport, Natasha was
                overtaken by the mistakes of the past. The Red Room again made
                itself felt - a program to create Widows - professional killers
                and spies - just like her. Natasha decides once and for all to
                deal with people whose efforts she herself became a Widow.
              </p>
              <button class="watch__btn">Watch Now</button>
            </div>
          </div>
        </section>
        <section class="collect">
          <div class="container">
            <h2 class="section__title">Collections</h2>
            <div class="collect__content">
              {collectBox.map((item) => {
                return (
                  <div class="collect__box">
                    <img
                      src={item.image}
                      alt="collections"
                      class="collect__bg"
                    />
                    <div class="collect__info">
                      <img
                        src={item.rectangle}
                        alt="rectangle"
                        class="collect__rectangle"
                      />
                      <div class="collect__title">
                        <img src={item.play} alt="play" class="collect__play" />
                        <p>{item.text}</p>
                      </div>
                      <img
                        src={item.rectangle}
                        alt="rectangle"
                        class="collect__rectangle"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section class="series">
          <div class="container">
            <h2 class="section__title">series</h2>
            <div class="series__content">
              <div class="series__box">
                <img src={series1} alt="series" class="series__bg" />
                <div class="series__info">
                  <h3 class="series__title">Game of Thrones</h3>
                  <p class="series__text">
                    The time of prosperity is drawing to a close, and the
                    summer, which lasted almost a decade, is dying away. Around
                    the center of power of the Seven Kingdoms, the Iron Throne,
                    a conspiracy is ripening, and during this difficult time,
                    the king decides to seek support from his youth friend
                    Eddard Stark. In a world where everyone - from the king to
                    the mercenary - is eager for power, intrigues and is ready
                    to stick a knife in the back, there is ...
                  </p>
                  <button class="watch__btn">Watch Now</button>
                </div>
              </div>
              <div class="series__box">
                <img src={series2} alt="series" class="series__bg" />
                <div class="series__info">
                  <img src={play} alt="play" class="series__play" />
                  <h4 class="series__box-title">Wanda Vision</h4>
                </div>
              </div>
              <div class="series__box">
                <img src={series3} alt="series" class="series__bg" />
                <div class="series__info">
                  <img src={play} alt="play" class="series__play" />
                  <h4 class="series__box-title">The Flash</h4>
                </div>
              </div>
              <div class="series__box">
                <img src={series4} alt="series" class="series__bg" />
                <div class="series__info">
                  <img src={play} alt="play" class="series__play" />
                  <h4 class="series__box-title">The Great</h4>
                </div>
              </div>
              <div class="series__box">
                <img src={series5} alt="series" class="series__bg" />
                <div class="series__info">
                  <img src={play} alt="play" class="series__play" />
                  <h4 class="series__box-title">GOTHAM</h4>
                </div>
              </div>
              <div class="series__box">
                <img src={series6} alt="series" class="series__bg" />
                <div class="series__info">
                  <img src={play} alt="play" class="series__play" />
                  <h4 class="series__box-title">The witcher</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
