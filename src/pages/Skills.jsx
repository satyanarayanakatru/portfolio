import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { FiLayout, FiSmartphone, FiCpu, FiTrendingUp } from "react-icons/fi";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FiLayout />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Responsive Design",
    ],
  },
  {
    title: "Mobile Development",
    icon: <FiSmartphone />,
    skills: ["React Native", "React Navigation", "REST APIs"],
  },
  {
    title: "Tools & Technologies",
    icon: <FiCpu />,
    skills: ["Git", "GitHub", "Postman", "VS Code", "npm"],
  },
  {
    title: "Currently Learning",
    icon: <FiTrendingUp />,
    skills: ["Backend Development", "System Design", "Full Stack Development"],
  },
];

// Motion orchestration settings
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <Box className={styles.wrapper}>
      {/* Visual background atmospheric elements */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <Container maxWidth="lg" className={styles.contentContainer}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* HEADER SECTION */}
          <motion.div variants={cardVariants} className={styles.headerSection}>
            <Typography className={styles.badge}>Expertise</Typography>
            <Typography className={styles.title}>Technical Toolkit</Typography>
            <Typography className={styles.desc}>
              A comprehensive selection of modern web technologies, programming
              languages, mobile frameworks, and development environments I use
              to build scalable digital applications.
            </Typography>
          </motion.div>

          {/* SKILLS CATEGORIES GRID */}
          <Grid container spacing={4}>
            {skillCategories.map((category) => (
              <Grid item xs={12} md={6} key={category.title}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={styles.skillCard}>
                    <CardContent className={styles.cardContent}>
                      <div className={styles.cardHeader}>
                        <div className={styles.iconWrapper}>
                          {category.icon}
                        </div>
                        <Typography className={styles.categoryTitle}>
                          {category.title}
                        </Typography>
                      </div>

                      <div className={styles.pillsContainer}>
                        {category.skills.map((skill) => (
                          <motion.div
                            className={styles.skillPill}
                            key={skill}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 15,
                            }}
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Skills;
