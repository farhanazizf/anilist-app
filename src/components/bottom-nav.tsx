import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const menuBottom = [
  {
    label: "Homepage",
    url: "/anime",
    icon: <HomeIcon />,
  },
  {
    label: "My Collection",
    url: "/my-collection",
    icon: <FavoriteIcon />,
  },
];

const BottomNav: React.FC = () => {
  const currentUrl = window.location.pathname;
  const navigate = useNavigate();

  return (
    <Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          width: "100%",
          maxWidth: "35rem",
        }}
        elevation={2}
      >
        <BottomNavigation showLabels value={currentUrl}>
          {menuBottom.map((val) => (
            <BottomNavigationAction
              key={val.url}
              onClick={() => navigate(val.url)}
              label={val.label}
              value={val.url}
              icon={val.icon}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
