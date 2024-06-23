import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { containerStyle } from "../ContactForm/ContactForm";

export const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box my={4} sx={containerStyle}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ color: "#0088ff" }}
        gutterBottom
      >
        {t("aboutUs")}
      </Typography>
      <Box my={2}>
        <Typography variant="h5" component="h3" gutterBottom>
          {t("mission")}
        </Typography>
        <Typography variant="body1">{t("missionText")}</Typography>
      </Box>
      <Box my={2}>
        <Typography variant="h5" component="h3" gutterBottom>
          {t("team")}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h4">
                  {t("teamMember1")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h4">
                  {t("teamMember2")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h4">
                  {t("teamMember3")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
