import { Box, Typography } from "@mui/material";
import HorizontalCard from "../../shared/HorizontalCard";
import theme from "../../../theme/theme";
import { useState, useEffect } from "react";
import Swipper from "../../shared/Swipper";

const OurFeatures = () => {
  const featurs = [
    {
      id: "1",
      src: "./assets/features/f1.png",
      title: "Feature 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
      id: "2",
      src: "./assets/features/f2.png",
      title: "Feature 2",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
      id: "3",
      src: "./assets/features/f3.png",
      title: "Feature 3",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
      id: "4",
      src: "./assets/features/f3.png",
      title: "Feature 4",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
      id: "5",
      src: "./assets/features/f3.png",
      title: "Feature 5",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.",
    },
  ];

  return (
    <Box sx={{ width: "90%", margin: "20px auto" }}>
      <Typography
        sx={{
          fontSize: "4rem",
          color: theme.primary_color,
          marginBottom: "20px",
          lineHeight: { xs: "1", md: "auto" },
        }}
      >
        <span style={{ fontWeight: "600" }}>Our </span>Features
      </Typography>
      <Swipper className="feature-card" timeOut={5000} NumOfElements={2}>
        {featurs.map((feature) => (
          <HorizontalCard
            key={feature.id}
            className={"feature-card"}
            width={{lg:'45vw', md:'45vw', sm:'90vw', xs:'90vw'}}
            docName={feature.title}
            docDisc={feature.body}
            src={feature.src}
          ></HorizontalCard>
        ))}
      </Swipper>
    </Box>
  );
};

export default OurFeatures;
