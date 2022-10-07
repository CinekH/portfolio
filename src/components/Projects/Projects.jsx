import React, { useState } from "react";
import { Container } from "@mui/material";

import "./projects.css";

import Project from "./Project";

const Projects = ({ text }) => {
  return (
    <Container sx={{ marginTop: "10rem" }}>
        <Project text={text} imagesDirectory={`./images/project1/`} textIndex={0} />
    </Container>
  );
};

export default Projects;
