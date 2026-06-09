import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { FiArrowLeft, FiLayers, FiCpu, FiCheckCircle } from "react-icons/fi";
import styles from "./ProjectDetails.module.css";

const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    technology: "React Native",
    architecture: "Redux Toolkit / Context API",
    status: "Production Ready",
    description:
      "An online food ordering platform featuring a stateful cart architecture, fluid multiscreen checkout sequencing, and dynamic system routing.",
  },
  {
    id: 2,
    title: "Chat Application",
    technology: "React Native",
    architecture: "WebSockets / FastCache",
    status: "Completed",
    description:
      "A secure cross-platform messaging layout built with persistent real-time communication tunnels, message caching, and active channel indicators.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    technology: "React.js",
    architecture: "CSS Modules / Framer Motion",
    status: "Active Deployment",
    description:
      "A premium responsive single-page environment built with modular style sheets, system theme modules, and smooth visual interactive effects.",
  },
  {
    id: 4,
    title: "Todo App",
    technology: "JavaScript",
    architecture: "Vanilla JS / LocalStorage",
    status: "Completed",
    description:
      "A clean productivity management tracking interface exploring local asynchronous data handling, event delegation, and interactive DOM mutations.",
  },
  {
    id: 5,
    title: "Calculator App",
    technology: "JavaScript",
    architecture: "Vanilla JS / String Parsing",
    status: "Completed",
    description:
      "A high-precision functional tool utilizing modular mathematical evaluation logic, expression calculations, and exception handling routines.",
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <Box className={styles.errorWrapper}>
        <Typography variant="h5" className={styles.errorText}>
          Case Study Not Found
        </Typography>
        <Button
          component={Link}
          to="/projects"
          startIcon={<FiArrowLeft />}
          className={styles.backBtn}
        >
          Return to Projects
        </Button>
      </Box>
    );
  }

  return (
    <Box className={styles.wrapper}>
      <Container maxWidth="md" className={styles.innerContainer}>
        {/* BACK TO OVERVIEW CONTROL */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            component={Link}
            to="/projects"
            startIcon={<FiArrowLeft />}
            className={styles.backBtn}
          >
            Back to Overview
          </Button>
        </motion.div>

        {/* DETAILED INSIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Card className={styles.detailCard}>
            <CardContent className={styles.cardContent}>
              <Box className={styles.headerRow}>
                <Typography className={styles.projectTitle}>
                  {project.title}
                </Typography>
                <span className={styles.statusBadge}>
                  <FiCheckCircle className={styles.badgeIcon} />{" "}
                  {project.status}
                </span>
              </Box>

              {/* TECHNICAL METADATA LAYER */}
              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <FiLayers className={styles.metaIcon} />
                  <div>
                    <span className={styles.metaLabel}>Platform Framework</span>
                    <span className={styles.metaValue}>
                      {project.technology}
                    </span>
                  </div>
                </div>

                <div className={styles.metaItem}>
                  <FiCpu className={styles.metaIcon} />
                  <div>
                    <span className={styles.metaLabel}>State Architecture</span>
                    <span className={styles.metaValue}>
                      {project.architecture}
                    </span>
                  </div>
                </div>
              </div>

              {/* DESCRIPTION SEGMENT */}
              <Typography className={styles.sectionHeader}>
                Project Overview
              </Typography>
              <Typography className={styles.projectDesc}>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}

export default ProjectDetails;
