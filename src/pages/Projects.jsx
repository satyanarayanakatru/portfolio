import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    technology: "React Native",
    category: "react-native",
  },
  {
    id: 2,
    title: "Chat Application",
    technology: "React Native",
    category: "react-native",
  },
  {
    id: 3,
    title: "Portfolio Website",
    technology: "React",
    category: "react",
  },
  {
    id: 4,
    title: "Todo App",
    technology: "JavaScript",
    category: "javascript",
  },
];

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  const filteredData = category
    ? projects.filter((project) => project.category === category)
    : projects;
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Projects
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Some projects I have worked on during my learning journey.
      </Typography>

      {/* Nested Route Navigation */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 4,
        }}
      >
        <Button component={NavLink} to="javascript" variant="outlined">
          JavaScript
        </Button>
        <Button component={NavLink} to="react" variant="outlined">
          React
        </Button>
        <Button component={NavLink} to="static" variant="outlined">
          Responsive Static Website using Html,CSS
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <Button
          variant="outlined"
          onClick={() =>
            setSearchParams({
              category: "react",
            })
          }
        >
          React
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            setSearchParams({
              category: "react-native",
            })
          }
        >
          React Native
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            setSearchParams({
              category: "javascript",
            })
          }
        >
          JavaScript
        </Button>

        <Button variant="contained" onClick={() => setSearchParams({})}>
          All
        </Button>
      </Box>

      {/* Project Cards */}
      <Grid container spacing={3}>
        {filteredData.map((project) => (
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

      {/* Nested Routes Render Here */}
      <Box sx={{ mt: 5 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Projects;
