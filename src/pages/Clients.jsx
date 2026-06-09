import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  CircularProgress,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiGlobe,
  FiAlertCircle,
} from "react-icons/fi";
import useFetchData from "../hooks/useFetchData";
import styles from "./Clients.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Clients() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
  );

  // PREMIUM LOADING LOADING SYSTEM WRAPPER
  if (loading) {
    return (
      <Box className={styles.loadingWrapper}>
        <CircularProgress size={44} thickness={4} className={styles.spinner} />
        <Typography className={styles.loadingText}>Loading...</Typography>
      </Box>
    );
  }

  // PREMIUM EXCEPTION ERROR WRAPPER
  if (error) {
    return (
      <Box className={styles.errorWrapper}>
        <FiAlertCircle className={styles.errorIcon} />
        <Typography variant="h5" className={styles.errorText}>
          {error || "Failed to establish synchronization hook connection."}
        </Typography>
      </Box>
    );
  }

  return (
    <Box className={styles.wrapper}>
      {/* Ambient background visual layout parameters */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <Container maxWidth="lg" className={styles.contentContainer}>
        {/* HEADER SECTION */}
        <Box className={styles.headerSection}>
          <Typography className={styles.badge}>Social Proof</Typography>
          <Typography className={styles.title}>
            Client Testimonials
          </Typography>{" "}
          {/* Rebranded Title */}
          <Typography className={styles.desc}>
            Real-time feedback and directory metrics from engineering teams and
            project managers I've collaborated with.
          </Typography>
        </Box>

        {/* PROFILE DIRECTORY RESPONSIVE GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.gridWrapper}
        >
          <Grid container spacing={4}>
            <AnimatePresence mode="popLayout">
              {data &&
                data.map((user) => (
                  <Grid item xs={12} md={6} lg={4} key={user.id}>
                    <motion.div
                      variants={cardVariants}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className={styles.motionCardContainer}
                    >
                      <Card className={styles.userCard}>
                        <CardContent className={styles.cardContent}>
                          {/* PROFILE HEADER SUMMARY ROW */}
                          <div className={styles.profileHeader}>
                            <div className={styles.avatarWrapper}>
                              <FiUser />
                            </div>
                            <div>
                              <Typography className={styles.userName}>
                                {user.name}
                              </Typography>
                              <span className={styles.usernameTag}>
                                @{user.username.toLowerCase()}
                              </span>
                            </div>
                          </div>

                          {/* DATA SPECIFIC LINK FIELDS */}
                          <div className={styles.infoFields}>
                            <div className={styles.fieldRow}>
                              <FiMail className={styles.fieldIcon} />
                              <span className={styles.fieldValue}>
                                {user.email}
                              </span>
                            </div>

                            <div className={styles.fieldRow}>
                              <FiPhone className={styles.fieldIcon} />
                              <span className={styles.fieldValue}>
                                {user.phone.split(" ")[0]}
                              </span>
                            </div>

                            <div className={styles.fieldRow}>
                              <FiGlobe className={styles.fieldIcon} />
                              <span className={styles.fieldValue}>
                                {user.website}
                              </span>
                            </div>
                          </div>

                          {/* COMPANY FOOTER EMBED */}
                          <div className={styles.companyFooter}>
                            <Typography className={styles.companyLabel}>
                              Organization
                            </Typography>
                            <Typography className={styles.companyValue}>
                              {user.company?.name}
                            </Typography>
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

export default Clients;
