/*  react-i18next is a powerful internationalization framework for React
 which is based on i18next. read more -> https://github.com/i18next/react-i18next */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationES from './locales/es/translation.json'
import translationEN from './locales/en/translation.json'

import liquidParser from './liquid/liquidParser';

// Get page language from modyo site using liquid
const LANG = liquidParser.parse('{{site.language}}');

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  es: {translation: translationES},
  en: {translation: translationEN}
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: LANG,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // react already safes from xss
      prefix: "{{{", // changed to avoid conflict with Liquid interpolation
      suffix: "}}}" // changed to avoid conflict with Liquid interpolation
    }
  });

  export default i18n;
