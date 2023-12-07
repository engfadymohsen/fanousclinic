import { Box, Typography } from "@mui/material";
import HorizontalCard from "../../shared/HorizontalCard";
import theme from "../../../theme/theme";
import Swipper from "../../shared/Swipper";








const OurFeatures = () => {
  const featurs = [
    {
      id: "1",
      src: "./assets/features/fearure1.png",
      title: "Comprehensive Medical Care",
      body: "fanous Clinic offers a one-stop-shop for all your medical needs. You can consult with your primary care provider, a specialist, and a pharmacist all in one place.",
    },
    {
      id: "2",
      src: "./assets/features/feature2.png",
      title: "Streamlined Communication",
      body: "fanous  Clinic ensures that there is no lack of communication between your primary care provider, specialist, and pharmacist.",
    },
    {
      id: "3",
      src: "./assets/features/feature3.png",
      title: "Transparency",
      body: "fanous Clinic is committed to transparency in all aspects of its operations. Patients can be confident that they are receiving the best possible care.",
    }
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
      <Swipper className="feature-card" timeOut={8000} NumOfElements={1}>
        {featurs.map((feature) => (
          <HorizontalCard
            key={feature.id}
            className={"feature-card"}
            width={{lg:"45vw", md:"45vw", sm:"90vw", xs:"90vw"}}
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
