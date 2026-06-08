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
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";

const stats = [
  {
    title: "10+",
    subtitle: "Projects Completed",
  },
  {
    title: "React",
    subtitle: "Frontend Development",
  },
  {
    title: "React Native",
    subtitle: "Mobile Apps",
  },
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and modern web applications using React and JavaScript.",
  },
  {
    title: "React Native Apps",
    description:
      "Creating cross-platform mobile applications with excellent user experience.",
  },
  {
    title: "UI Development",
    description: "Developing clean, reusable, and scalable user interfaces.",
  },
];

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            minHeight: "85vh",
            py: 6,
          }}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  mb: 2,
                }}
              >
                Hi, I'm
                <br />
                Katru Satyanarayana
              </Typography>

              <Typography
                variant="h5"
                color="primary"
                sx={{
                  mb: 3,
                }}
              >
                React JS Developer
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mb: 4,
                  fontSize: "1.1rem",
                }}
              >
                Passionate about building modern, responsive, and scalable
                applications using React, React Native, JavaScript, and modern
                frontend technologies.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  size="large"
                >
                  View Projects
                </Button>

                <Button variant="outlined" size="large">
                  Download Resume
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Profile"
                sx={{
                  width: {
                    xs: 250,
                    md: 380,
                  },
                  height: {
                    xs: 250,
                    md: 380,
                  },
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
                  boxShadow: 8,
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {stats.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent
                    sx={{
                      textAlign: "center",
                      py: 4,
                    }}
                  >
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      {item.title}
                    </Typography>

                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services Section */}
      <Container
        maxWidth="lg"
        sx={{
          py: 10,
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          What I Do
        </Typography>

        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{
            mb: 5,
          }}
        >
          Services and technologies I work with.
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {service.title}
                    </Typography>

                    <Typography color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Let's Work Together
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mb: 4,
            }}
          >
            Interested in collaborating on a project or discussing new
            opportunities?
          </Typography>

          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
          >
            Contact Me
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Home;
