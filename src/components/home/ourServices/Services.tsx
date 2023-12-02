import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../../../theme/theme";
import Swipper from "../../shared/Swipper";

const Services = () => {
  const services = [
    {
      imgSrc: "./assets/services/service1.png",
      title: "Urgent Care Services",
      content:
        "We offer extended hours of services for our patients to manage their urgent medical needs. We believe that we have to be there for our special patients population when they need urgent services.",
    },
    {
      imgSrc: "./assets/services/service2.png",
      title: "Chronic Conditions Services",
      content:
        "We developed a state of art practice to serve our patients with chronic conditions. As 6 out 10 adults in US live with one or more chronic conditions, we focus on those patients who need special medical expertise. We developed a harmonious system for effective management of most common conditions including Hypertension, Diabetes, Hyperlipidemia, Obesity and other common conditions.",
    },
    {
      imgSrc: "./assets/services/service3.png",
      title: "Preventive Care services",
      content:
        "Whether you have chronic conditions or you do not, we strongly focus on preventive services. We believe that preventive care is the gateway to prevent chronic diseases, even we can reverse chronic diseases with preventive services. We help our patients to live healthy lifestyle.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.primary_color,
        width: "100%",
        padding: "30px 0",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#41bbcb4f",
          width: "90%",
          borderRadius: "15px",
          margin: "0 auto 20px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "4rem",
            fontWeight: "600",
            color: "white",
          }}
        >
          OUR SERVICES
        </Typography>
      </Box>
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Swipper className="service-card" timeOut={5000} NumOfElements={2}>
          {services.map((service) => (
            <Box
              sx={{ width: "45vw", padding: "1rem ", boxSizing: "border-box" }}
            >
              <Box
                className="service-card"
                sx={{
                  height: "100%",

                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "15px",
                  border: "1px solid #41bbcb",
                }}
              >
                <Box
                  component="img"
                  src={service.imgSrc}
                  alt=""
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "15rem",
                    borderTopRightRadius: "15px",
                    borderTopLeftRadius: "15px",
                  }}
                ></Box>
                <Box
                  sx={{ padding: "0px 20px 20px", color: "white"}}
                >
                  <Typography sx={{ fontSize: "2rem", fontWeight: "700", textAlign: "center"  }}>
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{ marginTop: "1rem", fontSize: theme.body_font, textAlign: "justify", hyphens:'auto', textAlignLast:'center' }}
                  >
                    {service.content}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Swipper>
      </Box>
    </Box>
  );
};

export default Services;
