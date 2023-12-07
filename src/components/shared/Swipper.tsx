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
  mode?: string;
}

export const controller = (
  children: any,
  setScroll: Function,
  setI: Function,
  i: number,
  NumOfElements: number,
  mode: string | undefined,
  windowWidth: number
) => {
  let content: ReactElement[] = [];
  for (
    let l = 0;
    l < children.length - ((windowWidth < 900 ? 1 : NumOfElements) - 1);
    l++
  ) {
    content.push(
      <Box
        sx={{
          borderRadius: "50%",
          backgroundColor:
            mode === "light"
              ? i === l
                ? "#ffffffdd"
                : "#ffffff50"
              : i === l
              ? "#000000dd"
              : "#00000050",

          width: "1rem",
          height: "1rem",
          cursor: "pointer",
          margin: "0 .5rem ",
        }}
        onClick={() => {
          setScroll(l * (-90 / (windowWidth < 900 ? 1 : NumOfElements)));
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
  mode,
}: SwipperType) => {
  let [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const reportWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };
  window.onresize = reportWindowSize;
  const [Scroll, setScroll] = useState(0);
  const [i, setI] = useState(0);
  const x = document.getElementsByClassName(className);

  useEffect(() => {
    const interval = setInterval(() => {
      setScroll(Scroll - 90 / (windowWidth < 900 ? 1 : NumOfElements));
      if (i < x.length - (windowWidth < 900 ? 1 : NumOfElements)) {
        setScroll(Scroll - 90 / (windowWidth < 900 ? 1 : NumOfElements));
        setI(i + 1);
      } else {
        setScroll(
          Scroll +
            ((x.length - (windowWidth < 900 ? 1 : NumOfElements)) * 90) /
              (windowWidth < 900 ? 1 : NumOfElements)
        );
        setI(0);
      }
    }, timeOut);

    return () => clearInterval(interval);
  }, [Scroll, i, timeOut, x.length, NumOfElements, windowWidth]);

  useEffect(() => {
    setScroll(0);
    setI(0);
  }, [windowWidth]);

  return (
    <Box sx={{ position: "relative" }}>
      <KeyboardArrowLeftRoundedIcon
        sx={{
          position: "absolute",
          top: "50%",
          left: { lg: "-3rem", md: "-3rem", sm: "-1rem", xs: "-1rem" },
          transform: "translateY(-50%)",
          fontSize: { lg: "3rem", md: "3rem", sm: "2rem", xs: "2rem" },
          color: mode === "light" ? "white" : theme.primary_color,
          cursor: i === 0 ? "default" : "pointer",
          opacity: i === 0 ? "0.4" : "1",
          zIndex: "1000",
        }}
        onClick={() =>
          i !== 0
            ? (setScroll(Scroll + 90 / (windowWidth < 900 ? 1 : NumOfElements)),
              setI(i - 1))
            : null
        }
      />
      <Box
        sx={{
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            marginLeft: {
              lg: "-0.2rem",
              md: "-0.2rem",
              sm: "0rem",
              xs: "0rem",
            },
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
          }}
        >
          {controller(
            children,
            setScroll,
            setI,
            i,
            NumOfElements,
            mode,
            windowWidth
          )}
        </Box>
      </Box>
      <KeyboardArrowRightRoundedIcon
        sx={{
          position: "absolute",
          right: { lg: "-3rem", md: "-3rem", sm: "-1rem", xs: "-1rem" },
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: { lg: "3rem", md: "3rem", sm: "2rem", xs: "2rem" },
          color: mode === "light" ? "white" : theme.primary_color,
          cursor:
            i === x.length - (windowWidth < 900 ? 1 : NumOfElements)
              ? "default"
              : "pointer",
          opacity:
            i === x.length - (windowWidth < 900 ? 1 : NumOfElements)
              ? "0.4"
              : "1",
          zIndex: "1000",
        }}
        onClick={() =>
          i !== x.length - (windowWidth < 900 ? 1 : NumOfElements)
            ? (setScroll(Scroll - 90 / (windowWidth < 900 ? 1 : NumOfElements)),
              setI(i + 1))
            : null
        }
      />
    </Box>
  );
};

export default Swipper;
