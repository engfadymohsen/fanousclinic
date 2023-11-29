import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";

interface doctotsData {
  className: string;
  docName: string;
  docPos: string;
  imgSrc: string;
}

const DoctorCard = ({ className, docName, docPos, imgSrc }: doctotsData) => {
  return (
    <Box
      className={className}
      sx={{
        width: "30vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt=""
        sx={{ width: "80%", borderRadius: "15px" }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "2rem 3rem",
          borderRadius: "15px",
          marginTop: "-5rem",
          filter: "drop-shadow(00px 00px 10px #bbbbbb66)"
        }}
      >
        <Typography sx={{width:'100%', textAlign:'center', color:theme.primary_color, fontSize:theme.body_font, fontWeight:'600'}}>{docName}</Typography>
        <Typography sx={{width:'100%', textAlign:'center', color:theme.sec_color, fontSize:theme.body_font}}>{docPos}</Typography>
      </Box>
    </Box>
  );
};

export default DoctorCard;
