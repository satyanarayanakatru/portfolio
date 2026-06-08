import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Dashboard from "../pages/Dashboard";
import ProjectDetails from "../pages/ProjectDetails";
import MainLayout from "../Layout/MainLayout";
import Users from "../pages/Users";
import { Box } from "@mui/material";
import JavascriptProjects from "../pages/JavascriptProjects";
import ReactProjects from "../pages/ReactProjects";
import StaticProjects from "../pages/StaticProjects";

function AppRoutes() {
  return (
    <Box>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />}>
              <Route path="javascript" element={<JavascriptProjects />} />
              <Route path="react" element={<ReactProjects />} />
              <Route path="static" element={<StaticProjects />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Box>
  );
}

export default AppRoutes;
