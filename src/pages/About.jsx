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
import styles from "./About.module.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "React Native",
  "Git",
  "GitHub",
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "KGRL PG College",
    duration: "2024 - 2026",
    details:
      "Focusing on advanced computing paradigms, software engineering practices, and core application development architectures.",
  },
  {
    degree: "Bachelor of Science (Computer Science)",
    institution: "DNR Degree College",
    duration: "2019 - 2022",
    details:
      "Acquired fundamental concepts in object-oriented programming, data structures, database environments, and system analysis.",
  },
];

// Framer motion variants for container staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function About() {
  return (
    <Box className={styles.wrapper}>
      {/* Background elements syncing perfectly with home layout styling */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <Container maxWidth="lg" className={styles.contentContainer}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* INTRO BIO */}
          <motion.div variants={itemVariants} className={styles.sectionMargin}>
            <Typography className={styles.badge}>My Journey</Typography>
            <Typography className={styles.title}>About Me</Typography>
            <Typography className={styles.bioText}>
              I'm <span>Katru Satyanarayana</span>, a passionate React and React
              Native Developer deeply dedicated to crafting ultra-modern web and
              cross-platform mobile environments. My design ethos centers on
              transforming complex logic into clean, highly architectural, and
              maintainable codebases that yield smooth user experiences.
            </Typography>
          </motion.div>

          {/* EDUCATION & TIMELINE */}
          <Grid container spacing={6} className={styles.sectionMargin}>
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Typography className={styles.sectionTitle}>
                  Education
                </Typography>
                <div className={styles.timeline}>
                  {education.map((edu, idx) => (
                    <div className={styles.timelineItem} key={idx}>
                      <div className={styles.timelineDot} />
                      <div className={styles.timelineContent}>
                        <Typography className={styles.duration}>
                          {edu.duration}
                        </Typography>
                        <Typography className={styles.degree}>
                          {edu.degree}
                        </Typography>
                        <Typography className={styles.institution}>
                          {edu.institution}
                        </Typography>
                        <Typography className={styles.details}>
                          {edu.details}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Grid>

            {/* TECHNICAL SKILLS PILLS */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Typography className={styles.sectionTitle}>
                  Technical Toolkit
                </Typography>
                <div className={styles.skillsGrid}>
                  {skills.map((skill) => (
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
              </motion.div>
            </Grid>
          </Grid>

          {/* EXPERIENCE & GOALS */}
          <Grid container spacing={4} className={styles.sectionMargin}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Card className={styles.infoCard}>
                  <CardContent className={styles.cardContent}>
                    <Typography className={styles.cardHeaderTitle}>
                      Frontend Engineering
                    </Typography>
                    <Typography className={styles.cardDescription}>
                      Hands-on building experience integrating modular web
                      configurations, lifecycle manipulation, complex
                      asynchronous API requests, advanced navigation systems,
                      and cross-platform dynamic layouts matching crisp
                      interface designs.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Card className={styles.infoCard}>
                  <CardContent className={styles.cardContent}>
                    <Typography className={styles.cardHeaderTitle}>
                      Career Roadmap
                    </Typography>
                    <Typography className={styles.cardDescription}>
                      My primary goal is iterating toward a mastery of
                      full-stack engineering. I aim to consistently deploy heavy
                      scale applications, design intuitive data streams, and
                      contribute optimized architectures to high-impact
                      development initiatives.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;
