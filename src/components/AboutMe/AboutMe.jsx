import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const AboutMe = () => {
  return (
    <Container sx={{ mb: "25rem" }}>
      <Paper elevation={24} sx={{p: '4rem', background:"transparent"}}>
        <Typography variant="h1" color="white">
          ABOUT ME
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.8rem", mt: "6rem" }}
          color="white"
        >
          I graduated from IT studies at the Univeristy of Silesia. My
          specialisation is web applications designing, which is releated to my
          programming skills. I’m interested in sports, especially football and
          computer games.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutMe;
