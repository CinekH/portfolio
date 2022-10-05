import React, { useState } from "react";
import {
  Container,
  Box,
  Grid,
  Menu,
  MenuItem,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = ({ text, setLanguage }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <AppBar position="fixed" color="transparent">
        <Container sx={{background: "#00172A"}} maxWidth="false">
          <Toolbar align="center">
            <Box sx={{flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                  <Typography textAlign="center">{text?.NavigationHome}</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">{text?.NavigationAbout}</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">{text?.NavigationSkills}</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">{text?.NavigationProjects}</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">{text?.NavigationContact}</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}>
              <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
              {text?.NavigationHome}
              </Typography>
              <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
              {text?.NavigationAbout}
              </Typography>
              <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
              {text?.NavigationSkills}
              </Typography>
              <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
              {text?.NavigationProjects}
              </Typography>
              <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
              {text?.NavigationContact}
              </Typography>
            </Box>
            <Box color="white">
              <Button onClick={() => setLanguage('pl')} >PL</Button>|<Button onClick={() => setLanguage('en')} >EN</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};

export default Navigation;
