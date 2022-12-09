
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from '../../i18n/en/translationEN.json';
import translationTR from '../../i18n/tr/translationTR.json';


const resources = {
    en: {
        translation: translationEN
    },
    tr: {
        translation: translationTR
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "en",
        debug: true,
        detection: {
            order: ["queryString", "cookie"],
            cache: ["cookie"],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;