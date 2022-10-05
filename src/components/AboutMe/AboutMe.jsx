import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const AboutMe = ({ text }) => {
  return (
    <Container sx={{ mb: "25rem" }}>
      <Paper elevation={24} sx={{ p: "4rem", background: "transparent" }}>
        <Typography variant="h1" color="white">
          {text?.NavigationAbout}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.8rem", mt: "6rem" }}
          color="white"
        >{text?.AboutMeText}</Typography>
      </Paper>
    </Container>
  );
};

export default AboutMe;
