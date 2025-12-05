import { TAGS } from "../constants/Constants";

const { FRONTEND, BACKEND, LEARNING } = TAGS;
const { TAILWIND: tailwind, REACT: react } = FRONTEND;
const { NODEJS: nodejs } = BACKEND;
const { ASTRO: astro, TYPESCRIPT: typescript } = LEARNING;
const techArray = [tailwind, react];
const techArrayBack = [tailwind, react, nodejs];
const astroTechArray = [astro, react, typescript];

export const PROJECTS = [
  {
    title: "Game Finder Pro",
    descriptionKey: "description1",
    link: "https://game-finder-pro-client.vercel.app",
    github: "https://github.com/DayanVR/game_finder_pro",
    image: "/projects/game-finder.webp",
    tags: techArrayBack,
  },
  {
    title: "Chefs Online",
    descriptionKey: "description2",
    link: "https://chefs-online.netlify.app",
    github: "https://github.com/DayanVR/recipes-online",
    image: "/projects/chefs-online.webp",
    tags: astroTechArray,
  },
  {
    title: "Shortener Api",
    descriptionKey: "description3",
    link: "https://dayanvr-shortapi.netlify.app",
    github: "https://github.com/DayanVR/Short_API",
    image: "/projects/short-api.webp",
    tags: techArray,
  },
  {
    title: "Countries Api",
    descriptionKey: "description4",
    link: "https://dayanvr-restcountriesapi.netlify.app",
    github: "https://github.com/DayanVR/rest_country_api",
    image: "/projects/countries-api.webp",
    tags: techArray,
  },
];

export default PROJECTS;

// {
//   title: "Space Multi-Page",
//   description:
//     "I completed a Frontend Mentor challenge, building a multi-page space website using Tailwind CSS and React. The site features space technologies, astronaut crews, and destinations, all managed with JSON for efficient data handling. It's a modern and interactive platform that showcases my frontend skills and data management expertise.",
//   link: "https://dayanvy-space-multi-page-website.netlify.app/",
//   github: "https://github.com/DayanVR/space-multi-page-website",
//   image: "/projects/space-multi.webp",
//   tags: techArray,
// },
