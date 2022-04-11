import React, { useEffect, useState, Suspense, lazy } from "react";

import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import logo from "./../../Assets/logo.png";
import { logoutuser } from "./../../redux/actions/authuser";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";


const LogoutHeader2 = (props) => {

  console.log("Logout Header 2 props test");

  console.log(props);

  
const dispatch = useDispatch();

const logoutUser = () => {
  dispatch(logoutuser());
};
  const drawerWidth = 240;

  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
          onClick={props.handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Link
                to="/"
                style={{
                  color: "white",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                {" "}
                <Item style={{ background: "none" }}>
                  <img
                    src={logo}
                    className="logoimg"
                    style={{
                      width: 150,
                      height: 30,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  />
                </Item>
              </Link>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Link
                to="/articleupload"
                style={{
                  color: "white",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <Item
                  sx={{ p: 1, width: 200, cursor: "pointer" }}
                  className="fancybtn"
                >
                  <CloudUploadIcon /> Upload Articles
                </Item>
              </Link>
              &nbsp; &nbsp;&nbsp;{" "}
              <Item
                className="fancybtn"
                onClick={logoutUser}
                sx={{ p: 1, width: 110, cursor: "pointer" }}
              >
                <LogoutIcon /> Logout
              </Item>
            </Grid>
          </Grid>
        </Box>
        {/* <HeaderForLogins>
          <NavHeader></NavHeader>
          <NavHeader></NavHeader>
        </HeaderForLogins> */}

        {/* <Typography variant="h6" noWrap component="div">
          Home
        </Typography>
        <Typography variant="h6" noWrap component="div">
          SignIn
        </Typography>
        <Typography variant="h6" noWrap component="div">
          SignUp
        </Typography>
        <Typography variant="h6" noWrap component="div">
          Contact
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default LogoutHeader2;
