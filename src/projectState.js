import GHjobs from "./img/GHjobs.png";
import rollinplayer from "./img/rollinplayer.png";
import apperbrochure from "./img/apperbrochure.png";
import cryptoapp from "./img/cryptoapp.png";


export const ProjectState = () => {
  return [
    {
      title: "GitHub Job Finder",
      mainImg: GHjobs,
      url: "/work/githubjobfinder",
      awards: [
        {
          title: "What can i do?",
          description:
            "Soy una aplicación de búsqueda para trabajos de la plataforma github creada con su API / I'm a Job searching app for github jobs made with GH own API",
        },
        {
          title: "Tech Stack",
          description:
            "JavaScript, HTML5, Tailwind",
        },
        {
          title: "Try me!",
          description: <a href="https://mygithub-jobs.netlify.app" rel="noreferrer" target="_blank"><i class="fas fa-paper-plane fa-4x"></i>Go</a>,
          code:  <a href="https://github.com/0PabloTapia/githubjobfinder" rel="noreferrer" target="_blank"><i class="fab fa-github fa-4x"></i>MyCode</a>,
        },
      ],
    },
    {
      title: "Mobile App Brochure",
      mainImg: apperbrochure,
      url: "/work/brochuresite",
      awards:  [
        {
          title: "What can i do?",
          description:
            "Soy una página de presentación simple hecha para practicar con css y bootstrap / I'm a simple brochure site to practice with css and bootstrap ",
        },
        {
          title: "Tech Stack",
          description:
            "HTML5, CSS3, Bootstrap, JS for a scrolling function",
        },
        {
          title: "Try me!",
          description: <a href="https://appernew.netlify.app" rel="noreferrer" target="_blank"><i class="fas fa-paper-plane fa-4x"></i>Go</a>,
          code:  <a href="https://github.com/0PabloTapia/appernew"  rel="noreferrer" target="_blank"><i class="fab fa-github fa-4x"></i>MyCode</a>,
        },
      ],
    },
    {
      title: "Rollin' Player",
      mainImg: rollinplayer,
      url: "/work/rolling-player",
      awards: [
        {
          title: "What can i do?",
          description:
            "Soy un reproductor de música con una lista hecha con canciones de la página chillHop! / I'm a music player with a preloaded song list from chillHop page! ",
        },
        {
          title: "Tech Stack",
          description:
            "JavaScript, ReactJS, Sass",
        },
        {
          title: "Try me!",
          description: <a href="https://rolling-player.netlify.app" rel="noreferrer" target="_blank"><i class="fas fa-paper-plane fa-4x"></i>Go</a>,
          code:  <a href="https://github.com/0PabloTapia/Rollin-player"  rel="noreferrer" target="_blank"><i class="fab fa-github fa-4x"></i>MyCode</a>,
        },
      ],
    },
    
    {
      title: "Crypto Check",
      mainImg: cryptoapp,
      url: "/work/cryptocheck",
      awards: [
        {
          title: "What can i do?",
          description:
            "Cotizo criptomonedas a distintas divisas con la API de CryptoCompare / I can check accurate cryptocurrency market price to foreign exchange with CryptoCompare API  ",
        },
        {
          title: "Tech Stack",
          description:
            "JavaScript, HTML5, CSS3",
        },
        {
          title: "Try me!",
          description: <a href="https://mycrypto-exchange.netlify.app" rel="noreferrer" target="_blank"><i class="fas fa-paper-plane fa-4x"></i>Go</a>,
          code:  <a href="https://github.com/0PabloTapia/cotizadorcriptomonedas"  rel="noreferrer" target="_blank"><i class="fab fa-github fa-4x"></i>MyCode</a>,
        },
      ],
    },
  ];
};