import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FiGithub />,
      url: "https://github.com/satyanarayanakatru",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/satyanarayana-katru-7a4846287/",
      label: "LinkedIn",
    },
    {
      icon: <FiInstagram />,
      url: "https://www.instagram.com/satyanarayanakatru/?hl=en",
      label: "Instagram",
    },
    {
      icon: <FiMail />,
      url: "mailto:satyanarayanyadav50@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Clients",
    "Contact",
  ];

  return (
    <Box component="footer" className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} className={styles.topGrid}>
          {/* BRAND AND SLOGAN COLUMN */}
          <Grid item xs={12} md={5} className={styles.brandColumn}>
            <Typography className={styles.logo}>KATRU SATYANARAYANA</Typography>
            <Typography className={styles.description}>
              Crafting scalable, production-ready frontend web environments and
              high-performance cross-platform mobile interfaces.
            </Typography>

            {/* SOCIAL MATRIX PLATFORMS */}
            <div className={styles.socials}>
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={styles.socialIcon}
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </Grid>

          {/* QUICK LINKS DIRECTORY ROW */}
          <Grid item xs={12} md={7} className={styles.linksColumn}>
            <div className={styles.linksWrapper}>
              <Typography className={styles.sectionHeading}>
                Navigation
              </Typography>
              <ul className={styles.linksList}>
                {quickLinks.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                      className={styles.footerLink}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>

        {/* BOTTOM METRIC BAR & SCROLL TO TOP */}
        <Box className={styles.bottomBar}>
          <Typography className={styles.copyright}>
            © {currentYear} Katru Satyanarayana. All rights reserved.
          </Typography>

          <motion.button
            onClick={scrollToTop}
            className={styles.scrollTopBtn}
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowUp />
          </motion.button>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
