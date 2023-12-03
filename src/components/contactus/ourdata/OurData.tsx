import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import DataCard from "./DataCard";
import Map from "../map/Map";
import theme from "../../../theme/theme";
import { Box, Link } from "@mui/material";








const OurData = () => {
  const icnStyle = { fontSize: "2.2rem", color: theme.primary_color };
  return (
    <>
      <Box>
        <Map />
        <Link
          href="https://www.google.com/maps/place/10926+S+Tryon+St,+Charlotte,+NC+28273/data=!4m2!3m1!1s0x88569a474bb9509b:0x9a21640c57d737f1?sa=X&ved=2ahUKEwi2udzV_tWCAxULm7AFHQXPD2YQ8gF6BAgPEAA"
          target="_blank"
          rel="noopener"
          sx={{ textDecoration: "none", color: "white" }}
        >
          <DataCard
            title="Our Location"
            desc="10926 South Tryon Street, Suite D, Charlotte, NC 28273"
          >
            <PlaceOutlinedIcon sx={icnStyle} />
          </DataCard>
        </Link>
      </Box>
      <Link
        href="tel:(704) 219-5384"
        target="_blank"
        rel="noopener"
        sx={{ textDecoration: "none", color: "white" }}
      >
        <DataCard title="Phone Number" desc="(704) 219-5384">
          <LocalPhoneOutlinedIcon sx={icnStyle} />
        </DataCard>
      </Link>
      <Link
        href="mailto:marketing@fanousclinic.com"
        target="_blank"
        rel="noopener"
        sx={{ textDecoration: "none", color: "white" }}
      >
        <DataCard title="Email" desc="marketing@fanousclinic.com" mb="0">
          <MailOutlinedIcon sx={icnStyle} />
        </DataCard>
      </Link>
    </>
  );
};






export default OurData;