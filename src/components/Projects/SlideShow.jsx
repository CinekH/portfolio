import React, { useState } from "react";

import { Button, Grid } from "@mui/material";

const SlideShow = ({ images }) => {
  const [displayImage, setDisplayImage] = useState(0);

  return (
    <Grid
      item
      container
      xs={8}
      position={"absolute"}
      left={"50%"}
      sx={{ translate: "-50%" }}
      zIndex={0}
      height={"100%"}
    >
      {images.length !== 0 &&
        images.map((element, index) => {
          return (
            <img
              key={element}
              className={displayImage !== index ? "display-none" : ""}
              style={{
                left: "0%",
                transitionDuration: "500ms",
                position: "absolute",
                maxWidth: "100%",
                borderRadius: "0.5rem",
              }}
              src={element}
            />
          );
        })}
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent={"center"}
        marginTop={"66%"}
      >
        {images.length !== 0 &&
          images.map((element, index) => {
            return (
              <Grid item key={element}>
                <Button
                  onClick={() => setDisplayImage(index)}
                  variant={displayImage === index ? "contained" : "outlined"}
                />{" "}
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default SlideShow;
