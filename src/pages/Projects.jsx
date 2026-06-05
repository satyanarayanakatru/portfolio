import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    technology: "React Native",
    description: "Online food ordering mobile application",
  },
  {
    id: 2,
    title: "Chat Application",
    technology: "React Native",
    description: "Real-time messaging application",
  },
  {
    id: 3,
    title: "Portfolio Website",
    technology: "React",
    description: "Personal developer portfolio",
  },
];

function Projects() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Projects
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Some projects I have worked on during my learning journey.
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.id}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Technology: {project.technology}
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>

                <Button
                  component={Link}
                  to={`/projects/${project.id}`}
                  variant="contained"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
