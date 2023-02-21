import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import "./index.css";
import App from "./App";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "mk"],
    fallback: "en",
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <App />
  
);
