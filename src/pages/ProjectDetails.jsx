import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent } from "@mui/material";

const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    technology: "React Native",
    description:
      "Online food ordering application with cart, checkout, and order tracking features.",
  },
  {
    id: 2,
    title: "Chat Application",
    technology: "React Native",
    description:
      "Real-time chat application using modern state management and API integration.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    technology: "React",
    description:
      "Personal portfolio website showcasing projects, skills, and experience.",
  },
];

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return <Typography variant="h5">Project Not Found</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Project Details
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {project.title}
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Technology: {project.technology}
          </Typography>

          <Typography color="text.secondary">{project.description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProjectDetails;
