import React from "../icons/React.astro";
import AstroBrand from "../icons/AstroBrand.astro";
import Css from "../icons/Css.astro";
import Tailwind from "../icons/Tailwind.astro";
import Html from "../icons/Html.astro";
import Javascript from "../icons/Javascript.astro";
import Github from "../icons/Github.astro";
import Git from "../icons/Git.astro";
import Typescript from "../icons/Typescript.astro";
import Next from "../icons/Next.astro";
import Npm from "../icons/Npm.astro";
import Vscode from "../icons/Vscode.astro";
import NodeJS from "../icons/NodeJS.astro";

export const TAGS = {
  LEARNING: {
    ASTRO: { name: "Astro", icon: AstroBrand, class: 'border-orange-400 border text-orange-400 hover:bg-orange-400/25 hover:border-orange-500' },
    TYPESCRIPT: { name: "TypeScript", icon: Typescript, class: 'border-blue-600 border text-blue-500 hover:bg-blue-600/25 hover:border-blue-600' },
  },
  TOOLS: {
    GIT: { name: "GitHub", icon: Github },
    GITHUB: { name: "Git", icon: Git },
    NPM: { name: "Npm", icon: Npm },
    VSCODE: { name: "VSCode", icon: Vscode },
  },
  FRONTEND: {
    NEXT: { name: "NextJS", icon: Next },
    REACT: { name: "React", icon: React, class: 'border-blue-400 border text-blue-400 hover:bg-blue-400/25 hover:border-blue-500' },
    HTML: { name: "HTML", icon: Html },
    CSS: { name: "CSS", icon: Css },
    JAVASCRIPT: { name: "JavaScript", icon: Javascript },
    TAILWIND: { name: "Tailwind", icon: Tailwind, class: 'border-blue-300 border text-blue-300 hover:bg-blue-300/25 hover:border-blue-400' },
  },
  BACKEND: {
    NODEJS: {name: "NodeJS", icon: NodeJS, class: 'border-green-400 border text-green-400 hover:bg-green-400/25 hover:border-green-400' },
  },
};



export const extraTags = [
  "Responsive Design",
  "Teamwork",
  "SEO",
  "WPO",
  "Testing and Debugging",
];