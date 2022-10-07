import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Divider, Button } from "@mui/material";
import SlideShow from "./SlideShow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./projects.css";

const Project = ({ text, imagesDirectory, textIndex }) => {
  const [images, setImages] = useState([]);
  const [loadedData, setLoadedData] = useState(null);

  useEffect(() => {
    const loadJs = async () => {
      setLoadedData(
        (await import(`${imagesDirectory}loadImages.js`)).loadImages
      );
    };
    loadJs();
  }, []);

  useEffect(() => {
    if (Array.isArray(loadedData)) setImages(loadedData);
  }, [loadedData]);

  return (
    <Container sx={{ marginTop: "10rem", marginBottom: "5rem" }}>
      <Grid
        position={"relative"}
        container
        overflow={"hidden"}
        sx={{ width: "100%", aspectRatio: "2.10/1" }}
      >
        <Grid item xs={6} container direction={"column"}>
          <Grid item xs={3}>
            <Grid item height={"100%"} xs={2}>
              <Divider sx={{ borderColor: "#90caf9" }} orientation="vertical" />
            </Grid>
          </Grid>
          <Grid marginTop={"1.5rem"} item xs={7} container zIndex={1}>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Typography
                fontFamily={"Fraunces"}
                sx={{
                  textShadow:
                    "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000, 0px 0px 5px #000",
                }}
                color={"white"}
                variant="h3"
              >
                {text.Projects[textIndex].Name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid container direction={"column"} item xs={4} zIndex={"1"}>
          <Grid item xs={9} container>
            <Grid item xs={7} />
            <Grid item container direction={"column-reverse"} xs={5}>
              <Grid item container direction="column" alignSelf={"bottom"}>
                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    paddingLeft: 0,
                    fontSize: "1rem",
                    textTransform: "none",
                    width: "fit-content",
                  }}
                  width={"fit-content"}
                >
                  Github
                </Button>
                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    paddingLeft: 0,
                    fontSize: "1rem",
                    textTransform: "none",
                    width: "fit-content",
                  }}
                >
                  {text.Site}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} container>
            <Grid item xs={7}>
              <Divider orientation="vertical" sx={{ borderColor: "#90caf9" }} />
            </Grid>
          </Grid>
        </Grid>
        <SlideShow images={images} />
      </Grid>
      <Grid spacing={3} marginTop={"1rem"} container justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" textAlign={"center"}>
            {text.ProjectDetails}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography color={"white"} textAlign={"justify"} variant="body1">
            {text.Projects[textIndex].Details}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Project;
