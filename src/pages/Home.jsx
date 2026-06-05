import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function Home() {
  return (
    <Box sx={{ padding: "40px 20px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "60px" }}>
        <Typography variant="h3" fontWeight="bold">
          Hi, I'm Katru Satyanarayana
        </Typography>

        <Typography variant="h5" color="primary" sx={{ mt: 2 }}>
          Front End Developer
        </Typography>

        <Typography sx={{ mt: 2, color: "gray" }}>
          I build modern web and mobile applications with clean UI and scalable
          code.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Button variant="contained" sx={{ marginRight: 2 }}>
            View Projects
          </Button>

          <Button variant="outlined">Download Resume</Button>
        </Box>
      </Box>

      <Box sx={{ marginBottom: "60px" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Me
        </Typography>

        <Typography color="text.secondary">
          I am Passionate about React & React Native developer with experience
          in building responsive web and mobile applications. Focused on UI/UX,
          performance, and clean architecture.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "60px" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Skills
        </Typography>

        <Grid container spacing={2}>
          {[
            "React",
            "JavaScript",
            "TypeScript",
            "React Native",
            "Node.js",
            "MongoDB",
          ].map((skill, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography>{skill}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ marginBottom: "60px" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Featured Projects
        </Typography>

        <Grid container spacing={2}>
          {[
            { title: "Food Delivery App" },
            { title: "Chat App" },
            { title: "Portfolio Website" },
          ].map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography color="text.secondary">
                    Built using React / React Native with modern UI and state
                    management.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "60px" }}>
        <Typography variant="h5" fontWeight="bold">
          Interested in working together?
        </Typography>

        <Button variant="contained" sx={{ mt: 2 }}>
          Contact Me
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
