import React from "react";
import { Container, Typography } from "@mui/material";
const Home = () => {
  return (
    <Container  sx={{ height: '100%', mt: "15rem", mb: "25rem"}}>
      <Typography fontWeight='bold' fontFamily='Fraunces' color="white" variant="h1">Hello, I am</Typography>
      <Typography fontWeight='bold' fontStyle="italic" fontFamily='Fraunces' color="primary" variant="h1">Marcin Herman</Typography>
      <Typography fontWeight='bold' fontFamily='Fraunces' color="white" variant="h1">a begginer web developer</Typography>
    </Container>
  );
};

export default Home;
