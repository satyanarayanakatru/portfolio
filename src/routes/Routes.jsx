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

function AppRoutes() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
