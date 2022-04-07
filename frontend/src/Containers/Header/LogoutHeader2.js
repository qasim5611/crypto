import React, { useEffect, useState, Suspense, lazy } from "react";

import AppBar from "@mui/material/AppBar";

import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const LogoutHeader2 = (props) => {
  const drawerWidth = 240;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Home
        </Typography>
        <Typography variant="h6" noWrap component="div">
         Logout
        </Typography>
        <Typography variant="h6" noWrap component="div">
         fff
        </Typography>
        <Typography variant="h6" noWrap component="div">
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default LogoutHeader2;
