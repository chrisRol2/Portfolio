import { useState, createContext, useEffect } from "react";
import lang from "../API/lang.json";
import projects from "../API/Projects.json";
const Pes = projects.Pes;
const Pen = projects.Pen;
const es = lang.es;
const en = lang.en;

const LanguageContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(
    localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : navigator.language.split("-")[0]
  );

  const data = {
    lang,
    setLang,
    text: lang === "en" ? en : es,
    pText: lang === "en" ? Pen : Pes,
  };

  useEffect(() => {
    document.querySelector("html").lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
export { LangProvider };
export default LanguageContext;
