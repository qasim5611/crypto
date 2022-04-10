import React, { useEffect, useState, Suspense, lazy } from "react";

import Form from "./../form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

// import Header from "./../Header";
import Header2 from "./../../Containers/Header/Header2";
import LogoutHeader2 from "./../../Containers/Header/LogoutHeader2";


import Login from "../Login/login";
import Signup from "./../SignUp/signup";
import Sitehome from "../Sitehome";
import Verifyemail from "../VerifyEmaill/verifyemail";
import VerifyTockenMail from "../ForgetPass/VerifyTockenMail";
import Forgetpass from "../ForgetPass/Forgetpass";
import Newpass from "../ForgetPass/Newpass";
import Notfound from "./../PageNotFound/pagenotfound";
import Sidebar from "./../../Containers/Sidebar/sidebar";

import ArticleShow from "./../../Containers/main/Article/Article";
import ArticleUpload from "./../../Containers/main/UploadArricles/UploadArticle";
import Date from "./../../Containers/main/UploadArricles/date";



import { useSelector } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";

import history from "./../history/history";

import PrivateRoute from "./../Routes/PrivateRoutes/PrivateRoutes2";

import PublicRoute from "../Routes/PublicRoutes/PublicRoute2";
// import PageNotFound from "../PageNotFound/PageNotFound";
// const state = useSelector((state)=> state.LoginAdmin.)

import Progressbar from "../Login/progressbar";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./../../Assets/logo.png";

import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 240;

const AllRoutes = (props) => {
 const { window } = props;
 const [mobileOpen, setMobileOpen] = useState(false);

 const handleDrawerToggle = () => {
   setMobileOpen(!mobileOpen);
 };

 const drawer = (
   <div>
     <Toolbar />
     <Divider />
     <List>
       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
         <ListItem button key={text}>
           <ListItemIcon>
             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
           </ListItemIcon>
           <ListItemText primary={text} />
         </ListItem>
       ))}
     </List>
     <Divider />
     <List>
       {["All mail", "Trash", "Spam"].map((text, index) => (
         <ListItem button key={text}>
           <ListItemIcon>
             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
           </ListItemIcon>
           <ListItemText primary={text} />
         </ListItem>
       ))}
     </List>
   </div>
 );

 const container =
   window !== undefined ? () => window().document.body : undefined;








  
  return (
    <div>
      <Box>
        {/* <Header2 handleDrawerToggle={handleDrawerToggle} /> */}
        {/* <AppBar
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
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Router history={history} forceRefresh={true}>
          <Switch>
            <PublicRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/"
              component={Sitehome}
              exact={true}
            />
            <PublicRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/article"
              component={ArticleShow}
              exact={true}
            />
            <PrivateRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/articleupload"
              component={ArticleUpload}
              exact={true}
            />

            <PublicRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/signup"
              component={Signup}
              exact={true}
           
            />
            <PublicRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/login"
              component={Login}
              exact={true}
            />

            <PublicRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/Forgetpass"
              component={Forgetpass}
              exact={true}
            />
            <PublicRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/Newpass"
              component={Newpass}
              exact={true}
            />
            <PublicRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/verifyemail"
              component={Verifyemail}
              exact={true}
            />

            <PublicRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/VerifyTockenMail"
              component={VerifyTockenMail}
              exact={true}
            />
          </Switch>

          <Sidebar
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
        </Router>

        {/* ////////////////////////////////  Sidebar Content ///////////////////////// */}

        {/* ////////////////////////////////  Main Content ///////////////////////// */}
      </Box>
    </div>
  );
};

export default AllRoutes;
