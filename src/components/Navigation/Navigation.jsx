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

const Navigation = () => {
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
                <MenuIcon />
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
                  <Typography textAlign="center">HOME</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">ABOUT ME</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">SKILLS</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">PROJECTS</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">CONTACT</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}>
              <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
                HOME
              </Typography>
              <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
                ABOUT ME
              </Typography>
              <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
                SKILLS
              </Typography>
              <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
                PROJECTS
              </Typography>
              <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
                CONTACT
              </Typography>
            </Box>
            <Box color="white">
              <Button>PL</Button>|<Button>EN</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};

export default Navigation;
