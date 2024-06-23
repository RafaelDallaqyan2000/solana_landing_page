import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, TextField, Button, Typography } from "@mui/material";

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Box my={4} sx={containerStyle}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ color: "#0088ff" }}
        gutterBottom
      >
        {t("contactUs")}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label={t("name")}
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label={t("email")}
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label={t("message")}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Box textAlign="center" my={2}>
          <Button type="submit" variant="contained" color="primary">
            {t("send")}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export const containerStyle = {
  padding: 5,
  border: "2px solid #ffcb00",
  borderRadius: 5,
};
