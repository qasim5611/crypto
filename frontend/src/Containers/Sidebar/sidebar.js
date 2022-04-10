// import React from 'react';
// import Button from "@mui/material/Button";

// import { Link } from "react-router-dom";

// import SidebarMain, { Search, SidebarOption, Icon, SearchField } from "./sidebar.style";
// import SearchIcon from "@mui/icons-material/Search";

// function Sidebar() {
//   return (
//     <SidebarMain>
//       <SidebarOption>
//         <SearchField>
//           <Icon>
//             {" "}
//             <SearchIcon />
//           </Icon>
//           <input type="search" placeholder="Search..." className="srch" />
//         </SearchField>
//       </SidebarOption>

//       <Link to="/article">
//         <SidebarOption>Show Article </SidebarOption>
//       </Link>

//       <SidebarOption>Leader Boards</SidebarOption>
//       <SidebarOption>Biginners Guide</SidebarOption>  
//       <SidebarOption>Engineering</SidebarOption>
//       <SidebarOption>Health</SidebarOption>
//       <SidebarOption>Science</SidebarOption>
//       <SidebarOption>Chat</SidebarOption>
//       <SidebarOption>Announcement</SidebarOption>
//       <SidebarOption>Owner Tab</SidebarOption>

//       <SidebarOption>
//         <Button variant="contained" className="connbtn">
//           Connect
//         </Button>
//       </SidebarOption>

//       {/* <Search type="search" /> */}
//     </SidebarMain>
//   );
// }

// export default Sidebar;






import React, { useEffect, useState, Suspense, lazy } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

import AddRoadIcon from "@mui/icons-material/AddRoad";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ChatIcon from "@mui/icons-material/Chat";


// import { useSelector } from "react-redux";
// import { Router, Route, Switch } from "react-router-dom";

// import history from "./../history/history";


// import PageNotFound from "../PageNotFound/PageNotFound";
// const state = useSelector((state)=> state.LoginAdmin.)


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
import VisibilityIcon from "@mui/icons-material/Visibility";

const drawerWidth = 240;

const Sidebar = (props) => {

  console.log("props");
  console.log(props);

  const setbgcol = {
    background: "linear-gradient(150.17deg, rgb(0, 43, 35) 20.75%, rgb(2, 2, 20) 97.02%), rgb(255, 255, 255) !important",
  };


  // const { window } = props;

  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  //  const [mobileOpen, setMobileOpen] = React.useState(false);

  //  const handleDrawerToggle = () => {
  //    setMobileOpen(!mobileOpen);
  //  };


  const drawer = (
    <div
      style={{
        background:
          "linear-gradient(150.17deg, rgb(0, 43, 35) 20.75%, rgb(2, 2, 20) 97.02%), rgb(255, 255, 255)",
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        <Link to="/article" style={{ color: "white", textDecoration: "none" }}>
          <ListItem button className="linkers">
            <ListItemIcon>
              <VisibilityIcon style={{ color: "white" }} />
            </ListItemIcon>
            Show Article
          </ListItem>
        </Link>

        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <ListItem button className="linkers">
            <ListItemIcon>
              <HomeIcon style={{ color: "white" }} />
            </ListItemIcon>
            Home
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button className="linkers">
          <ListItemIcon>
            <DashboardIcon style={{ color: "white" }} />
          </ListItemIcon>
          Leader Boards
        </ListItem>

        <ListItem button className="linkers">
          <ListItemIcon>
            <InboxIcon style={{ color: "white" }} />
          </ListItemIcon>
          Biginners Guide
        </ListItem>

        <ListItem button className="linkers">
          <ListItemIcon>
            <AddRoadIcon boxIcon style={{ color: "white" }} />
          </ListItemIcon>
          Engineering
        </ListItem>

        <ListItem button className="linkers">
          <ListItemIcon>
            <EngineeringIcon style={{ color: "white" }} />
          </ListItemIcon>
          Health
        </ListItem>

        <ListItem button className="linkers">
          <ListItemIcon>
            <HealthAndSafetyIcon style={{ color: "white" }} />
          </ListItemIcon>
          Science
        </ListItem>

        <ListItem button className="linkers">
          <ListItemIcon>
            <ChatIcon style={{ color: "white" }} />
          </ListItemIcon>
          Chat
        </ListItem>
      </List>
    </div>
  );

   const container =
     window !== undefined ? () => window().document.body : undefined;





  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        style={setbgcol}
        // container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        style={setbgcol}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
