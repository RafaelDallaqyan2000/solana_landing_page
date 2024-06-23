import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

interface ServiceCardProps {
  title: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" component="h3">
        {title}
      </Typography>
    </CardContent>
  </Card>
);
