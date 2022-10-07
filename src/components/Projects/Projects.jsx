import React from "react";
import { Container, Typography, Grid, ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import "./projects.css";

import Project from "./Project";

const Projects = ({ text }) => {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#90caf9'
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <Container sx={{ marginTop: "10rem", overflow: 'hidden'}}>
      <ThemeProvider theme={theme}>
      <Grid item xs={12}>
        <Typography variant="h1" color="white">
          {text?.NavigationProjects}
        </Typography>
      </Grid>
        <Project
          text={text}
          imagesDirectory={`./images/project1/`}
          textIndex={0}
        />
        <Project
          text={text}
          imagesDirectory={`./images/project2/`}
          textIndex={2}
        />
        <Project
          text={text}
          imagesDirectory={`./images/project3/`}
          textIndex={1}
        />
      </ThemeProvider>
    </Container>
  );
};

export default Projects;
