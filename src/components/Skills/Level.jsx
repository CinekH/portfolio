import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Grid, Typography } from "@mui/material";

const Level = ({ level }) => {
  const levels = [
    "BEGINNER",
    "BEGINNER",
    "INTERMEDIATE",
    "UPPER-INTERMEDIATE",
    "ADVANCED",
    "ADVANCED",
  ];
  return (
    <Grid
      container
      direction={"column"}
      spacing={1}
      paddingRight={"2rem"}
    >
      <Grid item container columns={6}>
        {levels.map((element, index) => {
          return (
            <Grid item>
              <CircleIcon color={index < level ? "warning" : "action"} />
            </Grid>
          );
        })}
      </Grid>
      <Grid item>
        <Typography variant="body1" color="white">{levels[level - 1]}</Typography>
      </Grid>
    </Grid>
  );
};

export default Level;
