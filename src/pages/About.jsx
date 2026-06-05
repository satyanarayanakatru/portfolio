import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

function About() {
  return (
    <Box sx={{ padding: "40px 20px" }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        About Me
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 5 }}>
        I'm Katru Satyanarayana, a passionate React and React Native Developer
        interested in building modern web and mobile applications. I enjoy
        learning new technologies and creating user-friendly applications with
        clean and maintainable code.
      </Typography>

      <Typography variant="h4" gutterBottom>
        Education
      </Typography>

      <Card sx={{ mb: 5 }}>
        <CardContent>
          <Typography variant="h6">PG</Typography>

          <Typography color="text.secondary">
            KGRL PG COLLEGE, MCA, 2024-2026.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 5 }}>
        <CardContent>
          <Typography variant="h6">Bachelor Degree</Typography>

          <Typography color="text.secondary">
            DNR Degree College, BSc(Computer Science), 2019-2022.
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h4" gutterBottom>
        Technical Skills
      </Typography>

      <Grid container spacing={2} sx={{ mb: 5 }}>
        {[
          "HTML",
          "JavaScript",
          "CSS",
          "TypeScript",
          "React.Js",
          "React Native",
          "Git",
          "GitHub",
        ].map((skill) => (
          <Grid item xs={6} md={3} key={skill}>
            <Card>
              <CardContent>
                <Typography align="center">{skill}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>

      <Card sx={{ mb: 5 }}>
        <CardContent>
          <Typography variant="h6">Frontend Development</Typography>

          <Typography color="text.secondary">
            Worked on multiple React and React Native projects including CRUD
            applications, API integrations, routing, state management, and
            responsive UI development.
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h4" gutterBottom>
        Career Goal
      </Typography>

      <Typography color="text.secondary">
        My goal is to become a skilled Full Stack Developer and contribute to
        building scalable web and mobile applications while continuously
        improving my technical and problem-solving abilities.
      </Typography>
    </Box>
  );
}

export default About;
