import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { LanguageSwitcher } from "../LanguageSwitcher";
import logo from "../../images/solana.png";
import { AnimationCube } from "../AnimationCube/AnimationCube";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <AnimationCube />
      <Box textAlign="center" my={4}>
        <Box sx={{ textAlign: "end" }}>
          <LanguageSwitcher />
        </Box>
        <Box mb={2}>
          <img src={logo} alt="Company Logo" style={{ maxWidth: "250px" }} />
        </Box>
        <Typography variant="h2" component="h1" gutterBottom>
          {t("welcome")}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          {t("description")}
        </Typography>
      </Box>
    </>
  );
};
