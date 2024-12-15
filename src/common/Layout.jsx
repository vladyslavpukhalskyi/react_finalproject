import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import Navbar from "../features/navbar/Navbar";
import Sidebar from "../features/feed/components/Sidebar";

const Layout = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack direction="row" sx={{ height: "100vh", backgroundColor: "#000" }}>
      <Box
        sx={{
          width: { xs: "60px", md: "240px" },
          borderRight: "1px solid #3d3d3d",
          p: 2,
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
};

export default Layout;
