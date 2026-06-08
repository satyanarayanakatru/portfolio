import React, { useReducer, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { initialState, productReducer } from "../reducers/projectReducer";

function Dashboard() {
  const [projectName, setProjectName] = useState("");
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    const trimmedName = projectName.trim();

    if (!trimmedName) {
      alert("please enter project name");
      return;
    }

    if (editId) {
      dispatch({
        type: "UPDATE_PROJECT",
        payload: {
          id: editId,
          title: projectName,
        },
      });

      setEditId(null);
    } else {
      dispatch({
        type: "ADD_PROJECT",
        payload: {
          id: Date.now(),
          title: projectName,
        },
      });
    }

    setProjectName("");
  };

  const handleEdit = (project) => {
    setProjectName(project.title);
    setEditId(project.id);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Manage your portfolio projects.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 4,
        }}
      >
        <TextField
          label="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <Button variant="contained" onClick={handleAddOrUpdate}>
          {editId ? "Update" : "Add"}
        </Button>
      </Box>

      <Grid container spacing={3}>
        {state.projects.map((project) => (
          <Grid item xs={12} md={4} key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    mt: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => handleEdit(project)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      dispatch({ type: "DELETE_PROJECT", payload: project.id });
                    }}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
