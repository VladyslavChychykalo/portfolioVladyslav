import evHub from "../assets/img/ev-hub.PNG";
import imageFinder from "../assets/img/imageFinder.PNG";
import filmoteka from "../assets/img/filmoteka.PNG";
import movieFinder from "../assets/img/movieFinder.PNG";
import wallet from "../assets/img/wallet.PNG";

const portfolio = [
  {
    id: 1,
    link:
      "https://vladyslavchychykalo.github.io/EV-website-project/build/home-page.html",
    info:
      "Website for electric cars. It was made in a small team of 6 people, one of the first typesetting projects. Used technologies: HTML, CSS(Scss), Gulp, BEM, Adaptive layout",
    href: evHub,
    title: "EV-HUB"
  },
  {
    id: 2,
    link: "https://vladyslavchychykalo.github.io/filmoteka/build/",
    info:
      "Website for movie searching. It was made in a small team of 6 people. Used technologies: HTML, CSS(Scss), Vanila JS, BEM, Webpack",
    href: filmoteka,
    title: "Filmoteka"
  },
  {
    id: 3,
    link:
      "https://vladyslavchychykalo.github.io/goit-react-hw-03-image-finder/",
    info:
      "Website for image finder using API. Used technologies: HTML, CSS(Scss), React, RESTful API",
    href: imageFinder,
    title: "Image finder"
  },
  {
    id: 4,
    link: "https://vladyslavchychykalo.github.io/goit-react-hw-04-movies/#/",
    info: "",
    href: movieFinder,
    title: "Movie finder"
  },
  {
    id: 5,
    link: "https://app-wallet-14.herokuapp.com/#/login",
    info: "",
    href: wallet,
    title: "Wallet"
  }
];

export default portfolio;