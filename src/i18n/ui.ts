import es from "../locales/es.json";
import en from "../locales/en.json";
import type { Translation } from "src/types";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang: keyof typeof languages = "en";
export const showDefaultLang = false;

export const ui: Record<keyof typeof languages, Translation> = {
  en: en,
  es: es,
};

export const getTranslation = (lang, key) => {
  return ui[lang]?.projects[key] || key;
};