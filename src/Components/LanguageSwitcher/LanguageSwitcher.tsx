import React from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonGroup } from "@mui/material";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ButtonGroup variant="contained">
      <Button onClick={() => changeLanguage("en")}>EN</Button>
      <Button onClick={() => changeLanguage("ru")}>RU</Button>
    </ButtonGroup>
  );
};
