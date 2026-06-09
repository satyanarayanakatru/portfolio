import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import profileImage from "../assets/profile.png";

const stats = [
  { title: "10+", subtitle: "Premium Apps Shipped" },
  { title: "React Ecosystem", subtitle: "Frontend Architecture" },
  { title: "React Native", subtitle: "Cross-Platform Mobile" },
];

const services = [
  {
    title: "Frontend Engineering",
    description:
      "Crafting beautiful, accessible, production-grade UI systems built for extreme scalability.",
  },
  {
    title: "Mobile Deployments",
    description:
      "Native performance deployment structures tailored efficiently using React Native frameworks.",
  },
  {
    title: "UI/UX System Design",
    description:
      "Atomic architecture systems with highly maintainable design patterns and variables.",
  },
];

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Box className={styles.wrapper}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      {/* Ambient background blur circles */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* HERO SECTION */}
      <Container maxWidth="lg" className={styles.hero}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Typography className={styles.badge}>
                Available For New Projects
              </Typography>
              <Typography className={styles.title}>
                Building Digital <br />
                <span>Experiences</span>
              </Typography>
              <Typography className={styles.subtitle}>
                Katru Satyanarayana — React Engineer
              </Typography>
              <Typography className={styles.desc}>
                Specialized in deploying responsive, production-ready interfaces
                using scalable architectural methodologies.
              </Typography>

              <div className={styles.btnGroup}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/projects"
                  className={styles.primaryBtn}
                >
                  Explore Work
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/contact"
                  className={styles.outlineBtn}
                >
                  Let's Connect
                </Button>
              </div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} className={styles.imageContainer}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.profileCard}>
                <img
                  src={profileImage}
                  alt="Katru Satyanarayana"
                  className={styles.profile}
                />
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* STATS SECTION */}
      <Container maxWidth="lg" className={styles.section}>
        <Grid container spacing={4}>
          {stats.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
              >
                <Card className={styles.card}>
                  <CardContent>
                    <Typography className={styles.statNumber}>
                      {item.title}
                    </Typography>
                    <Typography className={styles.statText}>
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SERVICES SECTION */}
      <Container maxWidth="lg" className={styles.section}>
        <Typography className={styles.sectionTitle}>What I Do</Typography>
        <Grid container spacing={4}>
          {services.map((s, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className={styles.cardHover}>
                  <CardContent>
                    <Typography className={styles.serviceTitle}>
                      {s.title}
                    </Typography>
                    <Typography className={styles.serviceDesc}>
                      {s.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CALL TO ACTION */}
      <Container maxWidth="md" className={styles.ctaWrapper}>
        <Box className={styles.cta}>
          <Typography className={styles.ctaTitle}>
            Let's Build Something Exceptional
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/contact"
            className={styles.ctaBtn}
          >
            Get In Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
