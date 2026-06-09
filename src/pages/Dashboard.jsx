import React, { useReducer, useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiEdit2, FiTrash2, FiSliders, FiCheck } from "react-icons/fi";
import { initialState, productReducer } from "../reducers/projectReducer";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [projectName, setProjectName] = useState("");
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  const handleAddOrUpdate = () => {
    const trimmedName = projectName.trim();

    if (!trimmedName) {
      setError("Please input a valid project title name identifier.");
      return;
    }

    setError(""); // Reset validation error logs

    if (editId) {
      dispatch({
        type: "UPDATE_PROJECT",
        payload: {
          id: editId,
          title: trimmedName,
        },
      });
      setEditId(null);
    } else {
      dispatch({
        type: "ADD_PROJECT",
        payload: {
          id: Date.now(),
          title: trimmedName,
        },
      });
    }

    setProjectName("");
  };

  const handleEdit = (project) => {
    setError("");
    setProjectName(project.title);
    setEditId(project.id);
  };

  return (
    <Box className={styles.wrapper}>
      {/* Premium ambient backdrop aesthetics */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <Container maxWidth="lg" className={styles.contentContainer}>
        {/* HEADER BLOCK */}
        <Box className={styles.headerSection}>
          <Typography className={styles.badge}>Admin Control</Typography>
          <Typography className={styles.title}>Project Terminal</Typography>
          <Typography className={styles.desc}>
            Perform secure, lightweight runtime mutations, add new architectural
            case entries, or update existing structural works.
          </Typography>
        </Box>

        {/* INPUT SUBMISSION CONSOLE CONTROL PANEL */}
        <Card className={styles.controlPanelCard}>
          <CardContent className={styles.panelContent}>
            <AnimatePresence mode="popLayout">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Alert severity="warning" className={styles.alert}>
                    {error}
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            <div className={styles.inputFormRow}>
              <TextField
                label="Project Title Identifier"
                value={projectName}
                onChange={(e) => {
                  setError("");
                  setProjectName(e.target.value);
                }}
                className={styles.textField}
                variant="outlined"
                fullWidth
              />

              <Button
                variant="contained"
                onClick={handleAddOrUpdate}
                startIcon={editId ? <FiCheck /> : <FiPlus />}
                className={editId ? styles.updateBtn : styles.addBtn}
              >
                {editId ? "Update" : "Create"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* REPLICATING EQUAL WIDTH & BALANCED DYNAMIC HEIGHT GRID */}
        <motion.div layout className={styles.gridWrapper}>
          <Grid container spacing={4}>
            <AnimatePresence mode="popLayout">
              {state.projects.map((project) => (
                <Grid item xs={12} md={6} lg={4} key={project.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={styles.motionCardContainer}
                  >
                    <Card className={styles.projectCard}>
                      <CardContent className={styles.cardContent}>
                        <div className={styles.cardTopBar}>
                          <div className={styles.iconWrapper}>
                            <FiSliders />
                          </div>
                          <span className={styles.idTag}>
                            ID: {project.id.toString().slice(-6)}
                          </span>
                        </div>

                        <Typography className={styles.projectTitle}>
                          {project.title}
                        </Typography>

                        {/* OPERATION CONTAINER - SHIFTS DYNAMICS FLUIDLY TO BOTTOM */}
                        <div className={styles.actionButtonGroup}>
                          <Button
                            variant="outlined"
                            startIcon={<FiEdit2 />}
                            onClick={() => handleEdit(project)}
                            className={styles.editBtn}
                          >
                            Edit
                          </Button>

                          <Button
                            variant="contained"
                            color="error"
                            startIcon={<FiTrash2 />}
                            onClick={() =>
                              dispatch({
                                type: "DELETE_PROJECT",
                                payload: project.id,
                              })
                            }
                            className={styles.deleteBtn}
                          >
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Dashboard;
