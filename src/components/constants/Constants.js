import React from "@components/icons/React.astro";
import AstroBrand from "@components/icons/AstroBrand.astro";
import Css from "@components/icons/Css.astro";
import Tailwind from "@components/icons/Tailwind.astro";
import Html from "@components/icons/Html.astro";
import Javascript from "@components/icons/Javascript.astro";
import PostgresSQL from "@components/icons/PostgesSQL.astro";
import Github from "@components/icons/Github.astro";
import Git from "@components/icons/Git.astro";
import Typescript from "@components/icons/Typescript.astro";
import Next from "@components/icons/Next.astro";
import Npm from "@components/icons/Npm.astro";
import Vscode from "@components/icons/Vscode.astro";
import NodeJS from "@components/icons/NodeJS.astro";
import Pnpm from "@components/icons/Pnpm.astro";

export const TAGS = {
  LEARNING: {
    TYPESCRIPT: {
      name: "TypeScript",
      icon: Typescript,
      class:
        "border-blue-600 border text-blue-500 hover:bg-blue-600/25 hover:border-blue-600",
    },
    POSTGRESQL: {
      name: "PostgreSQL",
      icon: PostgresSQL,
      class:
        "border-blue-600 border text-blue-500 hover:bg-blue-600/25 hover:border-blue-600",
    },
  },
  TOOLS: {
    GIT: { name: "GitHub", icon: Github },
    GITHUB: { name: "Git", icon: Git },
    PNPM: { name: "Pnpm", icon: Pnpm },
    VSCODE: { name: "VSCode", icon: Vscode },
  },
  FRONTEND: {
    NEXT: {
      name: "NextJS",
      icon: Next,
      class:
        "border-white/40 border text-white hover:bg-black/60 hover:border-black",
    },
    JAVASCRIPT: { name: "JavaScript", icon: Javascript },
    REACT: {
      name: "React",
      icon: React,
      class:
        "border-blue-400 border text-blue-400 hover:bg-blue-400/25 hover:border-blue-500",
    },
    HTML: { name: "HTML", icon: Html },
    ASTRO: {
      name: "Astro",
      icon: AstroBrand,
      class:
        "border-orange-400 border text-orange-400 hover:bg-orange-400/25 hover:border-orange-500",
    },
    TAILWIND: {
      name: "Tailwind",
      icon: Tailwind,
      class:
        "border-blue-300 border text-blue-300 hover:bg-blue-300/25 hover:border-blue-400",
    },
  },
  BACKEND: {
    NODEJS: {
      name: "NodeJS",
      icon: NodeJS,
      class:
        "border-green-400 border text-green-400 hover:bg-green-400/25 hover:border-green-400",
    },
  },
};

export const extraTags = [
  "Responsive Design",
  "Teamwork",
  "SEO",
  "WPO",
  "Testing and Debugging",
];
