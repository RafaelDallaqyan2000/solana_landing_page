import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Link, Grid } from "@mui/material";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box py={4} textAlign="center" bgcolor="primary.main" color="white">
      <Typography variant="h6" gutterBottom>
        {t("companyName")}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t("companyDescription")}
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Link href="https://facebook.com" target="_blank" color="inherit">
            Facebook
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://twitter.com" target="_blank" color="inherit">
            Twitter
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://linkedin.com" target="_blank" color="inherit">
            LinkedIn
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
