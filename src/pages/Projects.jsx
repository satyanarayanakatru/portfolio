import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiSmartphone, FiLayers, FiPercent } from "react-icons/fi";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    technology: "React Native",
    category: "react-native",
    icon: <FiSmartphone />,
    description:
      "An online food ordering platform featuring a stateful cart architecture, fluid multiscreen checkout sequencing, and dynamic system routing.",
  },
  {
    id: 2,
    title: "Chat Application",
    technology: "React Native",
    category: "react-native",
    icon: <FiSmartphone />,
    description:
      "A secure cross-platform messaging layout built with persistent real-time communication tunnels, message caching, and active channel indicators.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    technology: "React.js",
    category: "react",
    icon: <FiLayers />,
    description:
      "A premium responsive single-page environment built with modular style sheets, system theme modules, and smooth visual interactive effects.",
  },
  {
    id: 4,
    title: "Todo App",
    technology: "JavaScript",
    category: "javascript",
    icon: <FiCode />,
    description:
      "A clean productivity management tracking interface exploring local asynchronous data handling, event delegation, and interactive DOM mutations.",
  },
  {
    id: 5,
    title: "Calculator App",
    technology: "JavaScript",
    category: "javascript",
    icon: <FiPercent />,
    description:
      "A high-precision functional tool utilizing modular mathematical evaluation logic, expression calculations, and exception handling routines.",
  },
];

const filterOptions = [
  { label: "All Works", value: null },
  { label: "React", value: "react" },
  { label: "React Native", value: "react-native" },
  { label: "JavaScript", value: "javascript" },
];

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");

  const filteredData = currentCategory
    ? projects.filter((project) => project.category === currentCategory)
    : projects;

  return (
    <Box className={styles.wrapper}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <Container maxWidth="lg" className={styles.contentContainer}>
        {/* HEADER */}
        <Box className={styles.headerSection}>
          <Typography className={styles.badge}>Case Studies</Typography>
          <Typography className={styles.title}>Selected Projects</Typography>
          <Typography className={styles.desc}>
            A demonstration of single-page architectures, scalable web system
            interfaces, and native mobile development platforms.
          </Typography>
        </Box>

        {/* FILTER CONTROL BAR */}
        <Box className={styles.filterBar}>
          {filterOptions.map((option) => {
            const isActive = currentCategory === option.value;
            return (
              <Button
                key={option.label}
                variant="text"
                className={`${styles.filterBtn} ${isActive ? styles.activeFilter : ""}`}
                onClick={() => {
                  if (option.value) {
                    setSearchParams({ category: option.value });
                  } else {
                    setSearchParams({});
                  }
                }}
              >
                {option.label}
              </Button>
            );
          })}
        </Box>

        {/* PROJECT GRID DISPLAY */}
        <motion.div layout className={styles.gridWrapper}>
          <Grid container spacing={4}>
            <AnimatePresence mode="popLayout">
              {filteredData.map((project) => (
                <Grid item xs={12} md={6} lg={4} key={project.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    className={styles.motionCardContainer}
                  >
                    <Card className={styles.projectCard}>
                      <CardContent className={styles.cardContent}>
                        <div className={styles.cardTopBar}>
                          <div className={styles.iconWrapper}>
                            {project.icon}
                          </div>
                          <span className={styles.techTag}>
                            {project.technology}
                          </span>
                        </div>

                        <Typography className={styles.projectTitle}>
                          {project.title}
                        </Typography>

                        <Typography className={styles.projectDesc}>
                          {project.description}
                        </Typography>

                        <Button
                          component={Link}
                          to={`/projects/${project.id}`}
                          variant="contained"
                          className={styles.viewBtn}
                        >
                          View Case Study
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </motion.div>

        {/* NESTED LAYER TARGET OVERLAY ROUTER */}
        {window.location.pathname.split("/").length > 2 && (
          <Box className={styles.nestedRouteBox}>
            <Outlet />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Projects;
