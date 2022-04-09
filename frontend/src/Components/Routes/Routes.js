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


const drawerWidth = 240;

const AllRoutes = (props) => {
  // const Form = lazy(() => import("../form.js"));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));










  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
        <CssBaseline />

        {/* <Header2 handleDrawerToggle={handleDrawerToggle} /> */}
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
              path="/date"
              component={Date}
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
              path="/Progressbar"
              component={Progressbar}
              exact={true}
            />
            <PublicRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/VerifyTockenMail"
              component={VerifyTockenMail}
              exact={true}
            />
            <PrivateRoute
              handleDrawerToggle={handleDrawerToggle}
              path="/form"
              component={Form}
              exact={true}
            />
          </Switch>
          <Sidebar />
        </Router>

        {/* ////////////////////////////////  Sidebar Content ///////////////////////// */}

        {/* ////////////////////////////////  Main Content ///////////////////////// */}
        {/* <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </Box> */}
      </Box>
    </div>
  );
};

export default AllRoutes;
