import { Box, Typography } from "@mui/material";
import theme from "../../theme/theme";










const HorizontalCard = (props: any) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection:{lg:'row',md:'row',sm:'column',xs:'column',}, alignItems: "center", width: props.width }}
      className={props.className}
      key = {props.key}
    >
      <Box
        component="img"
        src={props.src}
        alt=""
        sx={{ width: {lg:'40%',md:'40%',sm:'70%',xs:'70%',}, height: "fit-content" }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding:'1rem 2rem'

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
            textAlign:'justify',
            hyphens:'auto',
          }}
        >
          {props.docDisc}
        </Typography>
      </Box>
    </Box>
  );
};









export default HorizontalCard;