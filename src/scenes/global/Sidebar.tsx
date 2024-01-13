import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {
  LightModeOutlined as LightModeOutlinedIcon,
  DarkModeOutlined as DarkModeOutlinedIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ollapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          src=""
            style={{ cursor: "pointer", borderRadius: "50%" }}
          alt="profile"
        />
      </Box>
      <Box textAlign="center">
        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: '20px'}}>User Name</Typography>
        <Typography variant="h3">User Name</Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;