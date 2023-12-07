import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../theme/theme";

const ReadMore = (props: {
  children: string;
  NumberOfChars: number;
  dark?: boolean;
}) => {
  const text = props.children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      {isReadMore ? text.slice(0, props.NumberOfChars) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={{
          color: props.dark ? theme.primary_color : theme.sec_color,
          cursor: "pointer",
          fontStyle: "italic",
          fontWeight: "600",
        }}
      >
        {isReadMore ? " ...read more" : " show less"}
      </span>
    </>
  );
};

export default ReadMore;
