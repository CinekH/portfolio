import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import { useState, useEffect } from "react";

function App() {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  const [text, setText] = useState(null);

  useEffect(() => {
    const importText = async (lan) => {
      if (lan === "en")
        setText((await import("./text/englishText")).englishText);
      if (lan === "pl") setText((await import("./text/polishText")).polishText);
    };
    if (language === "null" || language === null || language === "en") {
      importText("en");
    }
    if (language === "pl") {
      importText("pl");
    }
    localStorage.setItem("language", language);
  }, [language]);

  let darkTheme = createTheme({ palette: { mode: "dark", primary: {main: '#90caf9'} } });
  darkTheme = responsiveFontSizes(darkTheme);
  
  return (
    <ThemeProvider theme={darkTheme}>
      {text && (
        <>
          <section id="Home">
            <Home text={text} />
          </section>
          <section id="AboutMe">
            <AboutMe text={text} />
          </section>
          <section id="Skills">
            <Skills text={text} />
          </section>
          <section id="Projects">
            <Projects text={text} />
          </section>
          <section id="Contact">
            <Contact text={text} />
          </section>
          <Navigation setLanguage={setLanguage} text={text} />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
