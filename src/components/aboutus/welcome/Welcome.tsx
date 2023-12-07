import { Box, Typography } from "@mui/material";
import theme from "../../../theme/theme";

const Welcome = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(./assets/benefits.jpg)",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "38rem",
          padding: { md: "4rem 6rem", xs: "2rem 2rem" },
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            color: theme.primary_color,
            fontSize: { lg: "4rem", md: "4rem", sm: "2rem", xs: "2rem" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "700", fontSize: "inherit" }}>
            ABOUT
          </Typography>
          <Typography sx={{ fontWeight: "100", fontSize: "inherit" }}>
            &nbsp;Fanous Clinic
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontSize: theme.body_font,
              fontWeight: "400",
              color: theme.primary_color,
              textAlign: "justify",
              textAlignLast: "center",
              hyphens: "auto",
              marginTop: "2rem",
            }}
          >
            At{" "}
            <span style={{ color: theme.primary_color, fontWeight: "800" }}>
              fanous Clinic,
            </span>{" "}
            we are more than just a healthcare provider. We are a community of
            dedicated professionals committed to enhancing the quality of life
            for our patients based in Charlotte, North Carolina. Our mission is
            to provide personalized, high-quality healthcare services that are
            easily accessible and effective. We understand that every patient is
            unique, and their healthcare needs are just as diverse. That's why
            we prioritize understanding your needs and concerns. Recognizing the
            value of your time, we have provisions for appointments and online
            smart scheduling to ensure that you receive personalized care. We
            continually invest in cutting-edge technologies and provide our
            staff with ongoing training and development opportunities. This
            commitment to innovation sets us apart and ensures that our patients
            receive the best possible care. But what truly makes us different is
            our unwavering commitment to our patients. At FANOUS Clinic, we
            believe in empowering individuals to lead healthy and fulfilling
            lives. We are here to support you in achieving your health goals and
            enhancing your quality of life. This is not just our job, but our
            passion.
          </Typography>
          <Typography
            sx={{
              color: theme.primary_color,
              fontSize: "1.5rem",
              fontWeight: "700",
              marginTop: "2rem",
            }}
          >
            We are fanous Clinic - your partner in health, your community in
            care.{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Welcome;
