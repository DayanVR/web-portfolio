import { TAGS } from "../constants/Constants";

const { FRONTEND, BACKEND } = TAGS;
const { TAILWIND: tailwind, REACT: react } = FRONTEND;
const { NODEJS: nodejs } = BACKEND;
const techArray = [tailwind, react];
const techArrayBack = [tailwind, react, nodejs];

export const PROJECTS = [
  {
    title: "Game Finder Pro",
    description:
      "My standout project use an API to fetch data on video games, offering users a seamless search experience with advanced filters. Each game has its dedicated page, providing detailed information. Furthermore, users have the option to save their favorite games within a dedicated library. This project showcases my expertise in API integration, data visualization, and user-centric design, making it a standout accomplishment.",
    link: "https://gamefinderpro.netlify.app/",
    github: "https://github.com/DayanVR/game_finder_pro",
    image: "/projects/game-finder.webp",
    tags: techArrayBack,
  },
  {
    title: "Space Multi-Page",
    description:
      "I completed a Frontend Mentor challenge, building a multi-page space website using Tailwind CSS and React. The site features space technologies, astronaut crews, and destinations, all managed with JSON for efficient data handling. It's a modern and interactive platform that showcases my frontend skills and data management expertise.",
    link: "https://dayanvy-space-multi-page-website.netlify.app/",
    github: "https://github.com/DayanVR/space-multi-page-website",
    image: "/projects/space-multi.webp",
    tags: techArray,
  },
  {
    title: "Shortener Api",
    description:
      "I meticulously crafte the full-page layout following the design guidelines provided by Frontend Mentor. The result is a URL shortener API with a responsive navbar and the ability to copy shortened URLs. Notably, the shortened URLs are saved locally, ensuring data persistence across sessions.",
    link: "https://dayanvr-shortapi.netlify.app/",
    github: "https://github.com/DayanVR/Short_API",
    image: "/projects/short-api.webp",
    tags: techArray,
  },
  {
    title: "Countries Api",
    description:
      "I created a user-friendly website for exploring country information, using a template from Frontend Mentor challenges. Users can search, filter by region, and view detailed data with ease. The site includes a toggle dark mode for enhanced accessibility. It's designed to prioritize functionality and navigation ease, utilizing Tailwind CSS, Font Awesome icons, and Flowbite React components for a modern and efficient experience.",
    link: "https://dayanvr-restcountriesapi.netlify.app/",
    github: "https://github.com/DayanVR/rest_country_api",
    image: "/projects/countries-api.webp",
    tags: techArray,
  },
];

export default PROJECTS;
