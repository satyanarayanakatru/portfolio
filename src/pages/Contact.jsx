import React, { useEffect, useRef, useState } from "react";
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
import { FiMail, FiMapPin, FiSend, FiPhone } from "react-icons/fi";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "", // Added state field
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError("");
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verification wrapper check including phone validation parameters
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      setError("Please populate all required form input fields.");
      return;
    }

    console.log(formData);
    setSuccess(true);
    setError("");

    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <Box className={styles.wrapper}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <Container maxWidth="lg" className={styles.contentContainer}>
        <Grid container spacing={6}>
          {/* SIDEBAR HEADER & QUICK CHANNELS */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Typography className={styles.badge}>Connect</Typography>
              <Typography className={styles.title}>Let's Connect</Typography>
              <Typography className={styles.desc}>
                Feel free to reach out for new product collaboration
                initiatives, frontend engineering opportunities, or simply to
                discuss technical architecture patterns.
              </Typography>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <FiMail />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <span className={styles.infoValue}>
                      satyanarayanayadav50@gmail.com
                    </span>
                  </div>
                </div>

                {/* ADDED PHONE CHIP INSIDE INTERACTION DIRECTORY */}
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <FiPhone />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Call / WhatsApp</span>
                    <span className={styles.infoValue}>+91 8179795623</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <FiMapPin />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoValue}>
                      Andhra Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Grid>

          {/* MAIN MESSAGE TERMINAL CARD */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              <Card className={styles.contactCard}>
                <CardContent className={styles.cardContent}>
                  <AnimatePresence mode="popLayout">
                    {success && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                      >
                        <Alert severity="success" className={styles.alert}>
                          Your message has been submitted successfully!
                        </Alert>
                      </motion.div>
                    )}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                      >
                        <Alert severity="error" className={styles.alert}>
                          {error}
                        </Alert>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      inputRef={nameInputRef}
                      className={styles.textField}
                    />

                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      className={styles.textField}
                    />

                    {/* ADDED MOBILE INPUT FIELD */}
                    <TextField
                      fullWidth
                      label="Mobile Number"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      margin="normal"
                      className={styles.textField}
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      margin="normal"
                      className={styles.textField}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<FiSend />}
                      className={styles.submitBtn}
                    >
                      Send Message
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
