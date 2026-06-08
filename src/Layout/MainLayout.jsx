import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../context/ThemeContext";
import { Box } from "@mui/material";

function MainLayout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#121212",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <Navbar />
      <main>{children}</main>
    </Box>
  );
}

export default MainLayout;
