import React from "react";
import { ReactComponent as Bootstrap } from "./assets/bootstrap.svg";
import { ReactComponent as Javascript } from "./assets/javascript.svg";
import { ReactComponent as MaterialUI } from "./assets/materialUI.svg";
import { ReactComponent as ReactLogo } from "./assets/react.svg";
import { ReactComponent as Css } from "./assets/css.svg";
import { ReactComponent as Node } from "./assets/node.svg";
import { ReactComponent as MongoDB } from "./assets/mongodb.svg";
import { Grid, Container, Typography } from "@mui/material";
import Skill from "./Skill";

const Skills = ({ text }) => {
  return (
    <Container>
      <Typography variant="h1" color="white" marginBottom={"6rem"}>
        {text?.NavigationSkills}
      </Typography>
      <Grid container spacing={2} rowSpacing="7rem">
        <Skill name="CSS" icon={Css} level={5} text={text} />
        <Skill name="React" icon={ReactLogo} level={2} text={text} />
        <Skill name="Bootstrap" icon={Bootstrap} level={4} text={text} />
        <Skill name="Material-UI" icon={MaterialUI} level={1} text={text} />
        <Skill name="Node" icon={Node} level={2} text={text} />
        <Skill name="Javascript" icon={Javascript} level={4} text={text} />
        <Skill name="MongoDB" icon={MongoDB} level={3} text={text} />
      </Grid>
    </Container>
  );
};

export default Skills;
