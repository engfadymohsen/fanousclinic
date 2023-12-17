import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import AndroidIcon from "@mui/icons-material/Android";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
// import AppleIcon from "@mui/icons-material/Apple";
import theme from "../../../theme/theme";
import { Link as MUILink } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Box
      sx={{
        backgroundImage: {
          lg: "url(./assets/welcome.jpg)",
          md: "url(./assets/welcome.jpg)",
          sm: "url(./assets/benefits.jpg)",
          xs: "url(./assets/benefits.jpg)",
        },
        backgroundSize: "cover",
        width: "100%",
        minHeight: "38rem",
        padding: { md: "4rem 6rem", xs: "2rem 2rem" },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          textAlign: { lg: "left", md: "left", sm: "center", xs: "center" },
          flexDirection: { md: "row", xs: "column" },
          color: theme.primary_color,
          fontSize: "5rem",
        }}
      >
        <Typography sx={{ fontWeight: "700", fontSize: "inherit" }}>
          FANOUS
        </Typography>
        <Typography
          sx={{
            fontWeight: "100",
            fontSize: "inherit",
            marginTop: { md: "auto", xs: "-2rem" },
          }}
        >
          CLINIC
        </Typography>
      </Box>

      <Box>
        <Box
          sx={{
            color: theme.primary_color,
            fontSize: "2.5rem",
            marginTop: { md: "4%", xs: "10%" },
            marginLeft: "2%",
            textAlign: { lg: "left", md: "left", sm: "center", xs: "center" },
          }}
        >
          <Typography
            sx={{
              fontSize: "inherit",
              marginBottom: "-10px",
              width: { lg: "40%", md: "40%", sm: "100%", xs: "100%" },
              fontStyle: "italic", // Add this line to make the text italic
            }}
          >
            Personalized
            <br />
            Healthcare at your
            <br />
            Fingertips
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: { md: "7%", xs: "20%" },
            flexDirection: { lg: "row", md: "row", xs: "column", sm: "column" },
          }}
        >
          <Link to="/contactus" style={{textDecoration:'none'}}>
            <Box
              sx={{
                backgroundColor: theme.primary_color,
                color: "white",
                padding: "15px 20px",
                marginRight: { lg: "20px", md: "20px", xs: "0", sm: "0" },
                marginBottom: { lg: "0", md: "0", xs: "20px", sm: "20px" },
                height: "20px",
                borderRadius: "20px",
                display: "flex",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* <Box
                id="sw-icons"
                sx={{
                  display: "flex",
                  
                  justifyContent: "center",
                  marginRight: "1rem",
                }}
              >
                <AndroidIcon />
                <AppleIcon />
              </Box> */}
                <Typography sx={{ fontSize: theme.body_font }}>
                  Contact Us
                </Typography>
              </Box>
            </Box>
          </Link>

          <Box sx={{ display: "flex" }}>
            <MUILink
              href="https://www.facebook.com/profile.php?id=61552333749894"
              target="_blank"
              rel="noopener"
            >
              <FacebookRoundedIcon
                sx={{ marginRight: "10px", color: theme.primary_color }}
              />
            </MUILink>
            <MUILink
              href="https://www.instagram.com/fanous.clinic"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon
                sx={{ marginRight: "10px", color: theme.primary_color }}
              />
            </MUILink>
            <MUILink
              href="http://www.linkedin.com/company/fanousclinic"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon
                sx={{ marginRight: "10px", color: theme.primary_color }}
              />
            </MUILink>
            <MUILink
              href="https://www.google.com/maps/place/10926+S+Tryon+St,+Charlotte,+NC+28273/data=!4m2!3m1!1s0x88569a474bb9509b:0x9a21640c57d737f1?sa=X&ved=2ahUKEwi2udzV_tWCAxULm7AFHQXPD2YQ8gF6BAgPEAA"
              target="_blank"
              rel="noopener"
            >
              <PlaceOutlinedIcon
                sx={{ marginRight: "10px", color: theme.primary_color }}
              />
            </MUILink>
            <MUILink
              href="mailto:marketing@fanousclinic.com"
              target="_blank"
              rel="noopener"
            >
              <MailOutlineIcon
                sx={{ marginRight: "10px", color: theme.primary_color }}
              />
            </MUILink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
