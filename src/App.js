import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  return (
    <ThemeProvider theme={darkTheme}>
      <Navigation />
      <section>
        <Home />
      </section>
      <section>
        <AboutMe />
      </section>
    </ThemeProvider>
  );
}

export default App;
