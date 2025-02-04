import type { Translation } from "src/types";
import { ui, defaultLang, showDefaultLang } from "./ui";
import es from "../locales/es.json";
import en from "../locales/en.json";

type Lang = "en" | "es";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export const useTranslations = (lang: Lang): Translation => {
  const translations = {
    en: en,
    es: es,
  };

  return translations[lang];
};

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
