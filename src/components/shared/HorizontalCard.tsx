import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme/theme";

const HorizontalCard = (props: any) => {

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", width: props.width }}
      className={props.className}
      key = {props.key}
    >
      <Box
        component="img"
        src={props.src}
        alt=""
        sx={{ width: "40%", height: "fit-content" }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "800",
              color: theme.primary_color,
            }}
          >
            {props.docName}
          </Typography>
          {props.docPos ? (
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "600",
                color: theme.sec_color,
              }}
            >
              {props.docPos}
            </Typography>
          ) : null}
        </Box>
        <Typography
          sx={{
            fontSize: theme.body_font,
            fontWeight: "400",
            color: theme.primary_color,
          }}
        >
          {props.docDisc}
        </Typography>
      </Box>
    </Box>
  );
};

export default HorizontalCard;
