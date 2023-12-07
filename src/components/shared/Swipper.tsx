import { Box } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import theme from "../../theme/theme";

interface SwipperType {
  children: React.ReactNode;
  className: string;
  timeOut: number;
  NumOfElements: number;
}

export const controller = (
  children: any,
  setScroll: Function,
  setI: Function,
  i: number,
  NumOfElements: number
) => {
  let content: ReactElement[] = [];
  for (let l = 0; l < children.length - (NumOfElements - 1); l++) {
    content.push(
      <Box
        sx={{
          borderRadius: "50%",
          backgroundColor: i === l ? "#000000dd" : "#00000050",
          width: "1rem",
          height: "1rem",
          cursor: "pointer",
          margin: "0 .5rem ",
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

const Swipper = ({
  children,
  className,
  timeOut,
  NumOfElements,
}: SwipperType) => {
  const [Scroll, setScroll] = useState(0);
  const [i, setI] = useState(0);
  const x = document.getElementsByClassName(className);

  useEffect(() => {
    const interval = setInterval(() => {
      setScroll(Scroll - 90 / NumOfElements);
      if (i < x.length - NumOfElements) {
        setScroll(Scroll - 90 / NumOfElements);
        setI(i + 1);
      } else {
        setScroll(Scroll + ((x.length - NumOfElements) * 90) / NumOfElements);
        setI(0);
      }
    }, timeOut);
    console.log(Scroll);

    return () => clearInterval(interval);
  }, [Scroll, i, timeOut, x.length, NumOfElements]);

  return (
    <Box sx={{ position: "relative" }}>
      <KeyboardArrowLeftRoundedIcon
        sx={{
          position: "absolute",
          top: "50%",
          left: { lg: "-2rem", md: "-2rem", sm: "0rem", xs: "0rem" },
          transform: "translateY(-50%)",
          fontSize: "2rem",
          color: theme.primary_color,
          cursor: i === 0 ? "default" : "pointer",
          opacity: i === 0 ? "0.4" : "1",
        }}
        onClick={() =>
          i !== 0 ? (setScroll(Scroll + 90 / NumOfElements), setI(i - 1)) : null
        }
      />
      <Box
        sx={{
          width: "100%",
          overflowX: "hidden",
          margin: { lg: "0 1rem", md: "0 1rem", sm: "0", xs: "0" },
        }}
      >
        <Box
          sx={{
            transition: "0.3s",
            display: "flex",
            width: "fit-content",
            transform: {
              lg: `translateX(${Scroll}vw)`,
              md: `translateX(${Scroll}vw)`,
              sm: `translateX(${Scroll}vw)`,
              xs: `translateX(${Scroll}vw)`,
            },
          }}
        >
          {children}
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "2rem",
            margin: "0 auto",
            justifyContent: "center",
            marginTop: "2rem",
            color: theme.primary_color,
            cursor: "pointer",
          }}
        >
          {controller(children, setScroll, setI, i, NumOfElements)}
        </Box>
      </Box>
      <KeyboardArrowRightRoundedIcon
        sx={{
          position: "absolute",
          right: { lg: "-2rem", md: "-2rem", sm: "0rem", xs: "0rem" },
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "2rem",
          color: theme.primary_color,
          cursor: i === x.length - NumOfElements ? "default" : "pointer",
          opacity: i === x.length - NumOfElements ? "0.4" : "1",
        }}
        onClick={() =>
          i !== x.length - NumOfElements ? (setScroll(Scroll - 90 / NumOfElements), setI(i + 1)) : null
        }
      />
    </Box>
  );
};

export default Swipper;
