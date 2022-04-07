import React from 'react';
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import SidebarMain, { Search, SidebarOption, Icon, SearchField } from "./sidebar.style";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  return (
    <SidebarMain>
      <SidebarOption>
        <SearchField>
          <Icon>
            {" "}
            <SearchIcon />
          </Icon>
          <input type="search" placeholder="Search..." className="srch" />
        </SearchField>
      </SidebarOption>

      <Link to="/article">
        <SidebarOption>Show Article </SidebarOption>
      </Link>

      <SidebarOption>Leader Boards</SidebarOption>
      <SidebarOption>Biginners Guide</SidebarOption>  
      <SidebarOption>Engineering</SidebarOption>
      <SidebarOption>Health</SidebarOption>
      <SidebarOption>Science</SidebarOption>
      <SidebarOption>Chat</SidebarOption>
      <SidebarOption>Announcement</SidebarOption>
      <SidebarOption>Owner Tab</SidebarOption>

      <SidebarOption>
        <Button variant="contained" className="connbtn">
          Connect
        </Button>
      </SidebarOption>

      {/* <Search type="search" /> */}
    </SidebarMain>
  );
}

export default Sidebar;