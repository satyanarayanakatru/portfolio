import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../context/ThemeContext";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme === "light" ? "#f8fafc" : "#0f172a",
        color: theme === "light" ? "#1e293b" : "#f8fafc",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      <Navbar />
      <Box component="main" sx={{ pt: "80px", flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default MainLayout;
