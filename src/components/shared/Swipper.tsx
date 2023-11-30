import { Box } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import theme from "../../theme/theme";

interface SwipperType {
  children: React.ReactNode;
  className: string;
  timeOut: number;
  NumOfElements: number
}

export const controller = (children: any, setScroll: Function, setI: Function, i: number, NumOfElements: number) => {
  let content: ReactElement[] = [];
  for (let l = 0; l < children.length - (NumOfElements - 1); l++) {
    content.push(
      <Box
        id="swipper-id-1"
        sx={{
          borderRadius: "50%",
          backgroundColor: i === l ? theme.primary_color : "#ddd",
          width: "1rem",
          height: "1rem",
          cursor: "pointer",
        }}
        onClick={() => {
          setScroll(l * (-90 / NumOfElements));
          setI(l);
        }}
      ></Box>
    );
  }
  return content;
};

const Swipper = ({ children, className, timeOut, NumOfElements}: SwipperType) => {
  const [Scroll, setScroll] = useState(0);
  const [i, setI] = useState(0);
  const x = document.getElementsByClassName(className);

  useEffect(() => {
    const interval = setInterval(() => {
      setScroll(Scroll - 90 / NumOfElements);
      if (i < x.length - (NumOfElements)) {
        setScroll(Scroll - 90 / NumOfElements);
        setI(i + 1);
      } else {
        setScroll(Scroll + (x.length - (NumOfElements)) * 90 / NumOfElements);
        setI(0);
      }
    }, timeOut);

    return () => clearInterval(interval);
  }, [Scroll, i, timeOut, x.length, NumOfElements]);
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Box
        sx={{
          transition: "0.3s",
          display: "flex",
          width: "fit-content",
          transform: {
            lg: `translateX(${Scroll}vw)`,
            md: `translateX(${Scroll}vw)`,
            sm: `translateX(${Scroll * 2}vw)`,
            xs: `translateX(${Scroll * 2}vw)`,
          },
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "2rem",
          width: "7rem",
          margin: "0 auto",
          justifyContent: "space-between",
          marginTop: "2rem",
        }}
      >
        {controller(children, setScroll, setI, i, NumOfElements)}
      </Box>
    </Box>
  );
};

export default Swipper;
