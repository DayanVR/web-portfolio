import React from "../icons/React.astro";
import AstroBrand from "../icons/AstroBrand.astro";
import Css from "../icons/Css.astro";
import Tailwind from "../icons/Tailwind.astro";
import Html from "../icons/Html.astro";
import Javascript from "../icons/Javascript.astro";
import Github from "../icons/Github.astro";
import Git from "../icons/Git.astro";
import Typescript from "../icons/Typescript.astro";
import Sass from "../icons/Sass.astro";
import Npm from "../icons/Npm.astro";
import Vscode from "../icons/Vscode.astro";

export const TAGS = {
  LEARNING: {
    ASTRO: { name: "Astro", icon: AstroBrand },
    TYPESCRIPT: { name: "TypeScript", icon: Typescript },
  },
  TOOLS: {
    GIT: { name: "GitHub", icon: Github },
    GITHUB: { name: "Git", icon: Git },
    NPM: { name: "Npm", icon: Npm },
    VSCODE: { name: "VSCode", icon: Vscode },
  },
  FRONTEND: {
    HTML: { name: "HTML", icon: Html },
    CSS: { name: "CSS", icon: Css },
    JAVACRIPTS: { name: "JavaScript", icon: Javascript },
    TAILWIND: { name: "Tailwind CSS", icon: Tailwind },
    REACT: { name: "React", icon: React },
    SASS: { name: "Sass", icon: Sass },
  },
};

export const extraTags = [
  "Responsive Design",
  "Teamwork",
  "SEO",
];

// "WPO",
// "Testing and Debugging",