import React from "react";
import { ReactComponent as Bootstrap } from "./assets/bootstrap.svg";
import { ReactComponent as Javascript } from "./assets/javascript.svg";
import { ReactComponent as MaterialUI } from "./assets/materialUI.svg";
import { ReactComponent as ReactLogo } from "./assets/react.svg";
import { ReactComponent as Css } from "./assets/css.svg";
import { ReactComponent as Node } from "./assets/node.svg";
import { Grid, Icon, Container, Typography } from "@mui/material";
import Level from "./Level";
import Skill from "./Skill";

const Skills = () => {
  return (
    <Container>
      <Typography variant="h1" color="white" marginBottom={"10rem"}>
        SKILLS
      </Typography>
      <Grid container spacing={2} rowSpacing="8rem">
        <Skill name="CSS" icon={Css} level={5} />
        <Skill name="React" icon={ReactLogo} level={2} />
        <Skill name="Bootstrap" icon={Bootstrap} level={4} />
        <Skill name="Material-UI" icon={MaterialUI} level={1} />
        <Skill name="Node" icon={Node} level={2} />
        <Skill name="Javascript" icon={Javascript} level={4} />
      </Grid>
    </Container>
  );
};

export default Skills;
