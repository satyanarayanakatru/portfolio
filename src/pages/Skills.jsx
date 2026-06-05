import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Responsive Design",
    ],
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "React Navigation", "REST APIs"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Postman", "VS Code", "npm"],
  },
  {
    title: "Currently Learning",
    skills: ["Backend Development", "System Design", "Full Stack Development"],
  },
];

function Skills() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Skills
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
        Technologies and tools I use to build modern web and mobile
        applications.
      </Typography>

      <Grid container spacing={3}>
        {skillCategories.map((category) => (
          <Grid item xs={12} md={6} key={category.title}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {category.title}
                </Typography>

                {category.skills.map((skill) => (
                  <Typography key={skill} sx={{ mb: 1 }}>
                    • {skill}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
