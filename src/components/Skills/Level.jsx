import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Grid, Typography } from "@mui/material";

const Level = ({ level, text }) => {
  const levels = [
    text?.LevelsBeginner,
    text?.LevelsBeginner,
    text?.LevelsIntermediate,
    text?.LevelsUpperIntermediate,
    text?.LevelsAdvanced,
    text?.LevelsAdvanced,
  ];
  return (
    <Grid
      container
      direction={"column"}
      spacing={1}
    >
      <Grid item container columns={6}>
        {levels.map((element, index) => {
          return (
            <Grid item key={String.toString(element) + index}>
              <CircleIcon color={index < level ? "warning" : "action"} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Level;
