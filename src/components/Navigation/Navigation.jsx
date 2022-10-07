import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Menu,
  MenuItem,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = ({ text, setLanguage }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (name) => {
    const element = document.getElementById(name);
    window.scrollTo({
      top: element.getBoundingClientRect()?.top + window.pageYOffset,
      behavior: "smooth",
    });
  };
  const listenScrollEvent = (event) => {
    let AboutPos =
      document.getElementById("AboutMe")?.getBoundingClientRect().top +
      window.pageYOffset;
    const SkillsPos =
      document.getElementById("Skills")?.getBoundingClientRect().top +
      window.pageYOffset;
    const ContactPos =
      document.getElementById("Contact")?.getBoundingClientRect().top +
      window.pageYOffset;
    const ProjectsPos =
      document.getElementById("Projects")?.getBoundingClientRect().top +
      window.pageYOffset;
    if (window.scrollY < AboutPos) {
      return setCurrentPosition("Home");
    }
    if (window.scrollY >= AboutPos && window.scrollY < SkillsPos) {
      return setCurrentPosition("About");
    }
    if (window.scrollY >= SkillsPos && window.scrollY < ProjectsPos) {
      return setCurrentPosition("Skills");
    }
    if (window.scrollY >= ProjectsPos && window.scrollY < ContactPos) {
      return setCurrentPosition("Projects");
    }
    if (window.scrollY >= ContactPos) {
      return setCurrentPosition("Contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <nav>
      <AppBar position="fixed" color="transparent">
        <Container sx={{ background: "#00172A" }} maxWidth="false">
          <Toolbar align="center">
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <MenuIcon color="primary" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    color={
                      currentPosition === "Home" ? "primary" : "primary.light"
                    }
                    underline={"hover"}
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                  >
                    {text?.NavigationHome}
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    onClick={() => {
                      scrollToSection("AboutMe");
                    }}
                    color={
                      currentPosition === "AboutMe"
                        ? "primary"
                        : "primary.light"
                    }
                    underline={"hover"}
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                  >
                    {text?.NavigationAbout}
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    onClick={() => {
                      scrollToSection("Skills");
                    }}
                    color={
                      currentPosition === "Skills" ? "primary" : "primary.light"
                    }
                    underline={"hover"}
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                  >
                    {text?.NavigationSkills}
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    onClick={() => {
                      scrollToSection("Projects");
                    }}
                    color={
                      currentPosition === "Projects"
                        ? "primary"
                        : "primary.light"
                    }
                    underline={"hover"}
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                  >
                    {text?.NavigationProjects}
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    onClick={() => {
                      scrollToSection("Contact");
                    }}
                    color={
                      currentPosition === "Contact"
                        ? "primary"
                        : "primary.light"
                    }
                    underline={"hover"}
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                  >
                    {text?.NavigationContact}
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}>
              <Link
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                variant="h5"
                color={currentPosition === "Home" ? "primary" : "primary.light"}
                underline={"hover"}
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                {text?.NavigationHome}
              </Link>
              <Link
                onClick={() => {
                  scrollToSection("AboutMe");
                }}
                variant="h5"
                color={
                  currentPosition === "About" ? "primary" : "primary.light"
                }
                underline={"hover"}
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                {text?.NavigationAbout}
              </Link>
              <Link
                onClick={() => {
                  scrollToSection("Skills");
                }}
                variant="h5"
                color={
                  currentPosition === "Skills" ? "primary" : "primary.light"
                }
                underline={"hover"}
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                {text?.NavigationSkills}
              </Link>
              <Link
                onClick={() => {
                  scrollToSection("Projects");
                }}
                variant="h5"
                color={
                  currentPosition === "Projects" ? "primary" : "primary.light"
                }
                underline={"hover"}
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                {text?.NavigationProjects}
              </Link>
              <Link
                onClick={() => {
                  scrollToSection("Contact");
                }}
                variant="h5"
                color={
                  currentPosition === "Contact" ? "primary" : "primary.light"
                }
                underline={"hover"}
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                {text?.NavigationContact}
              </Link>
            </Box>
            <Box color="white" display={"flex"}>
              <Button onClick={() => setLanguage("pl")}>PL</Button>
              <Divider orientation="vertical" flexItem />
              <Button onClick={() => setLanguage("en")}>EN</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};

export default Navigation;
