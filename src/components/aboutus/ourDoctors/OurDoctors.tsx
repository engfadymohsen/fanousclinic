import { Box, Grid, Typography } from "@mui/material";
import HorizontalCard from "../../shared/HorizontalCard";
import theme from "../../../theme/theme";
import Swipper from "../../shared/Swipper";
import DoctorCard from "./DoctorCard";

const OurDoctors = () => {
  const doctors = [
    {
      docName: "Dr. Mohamed Ahmed",
      docPos: "Dentist",
      docDisc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.",
      src: "./assets/doctors/doctor.jpg",
    },
    {
      docName: "Dr. Mohamed Ahmed",
      docPos: "Dentist",
      docDisc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.",
      src: "./assets/doctors/doctor.jpg",
    },
    {
      docName: "Dr. Mohamed Ahmed",
      docPos: "Dentist",
      docDisc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.",
      src: "./assets/doctors/doctor.jpg",
    },
    {
      docName: "Dr. Mohamed Ahmed",
      docPos: "Dentist",
      docDisc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.",
      src: "./assets/doctors/doctor.jpg",
    },
    {
      docName: "Dr. Mohamed Ahmed",
      docPos: "Dentist",
      docDisc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.",
      src: "./assets/doctors/doctor.jpg",
    },
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
        <span style={{ fontWeight: "600" }}>Meet </span>Our Doctors
      </Typography>
      <Swipper className="doctor-card" timeOut ={4000} NumOfElements={3}>
        {doctors.map((doctor) => (
          <DoctorCard
            className={"doctor-card"}
            docName={doctor.docName}
            docPos={doctor.docPos}
            imgSrc={doctor.src}
          ></DoctorCard>
        ))}
      </Swipper>
    </Box>
  );
};

export default OurDoctors;
