import React from "react";

import {
  Typography,
  Container,
  Grid,
  Divider,
  ThemeProvider,
} from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const Contact = ({ text }) => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Divider sx={{ borderColor: "#90caf9" }} />
        <Grid
          justifyContent="center"
          marginTop="33rem"
          marginBottom="20rem"
          container
          xs="12"
        >
          <Typography textAlign="center" color="#90caf9" variant="h3">
            {text.Write}
            {
              <Typography mt="1rem" variant="h3" color="white">
                marcin.herman.97@gmail.com
              </Typography>
            }
          </Typography>
        </Grid>
      </ThemeProvider>
    </Container>
  );
};

export default Contact;
