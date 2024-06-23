import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Grid } from "@mui/material";
import { ServiceCard } from "../ServiceCard";
import { containerStyle } from "../ContactForm/ContactForm";

export const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box my={4} sx={containerStyle}>
      <Typography
        variant="h4"
        sx={{ color: "#0088ff" }}
        component="h2"
        gutterBottom
      >
        {t("services")}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard title={t("stakingService")} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard title={t("rewardCalculation")} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard title={t("customerSupport")} />
        </Grid>
      </Grid>
    </Box>
  );
};
