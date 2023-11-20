import { Box, Typography } from "@mui/material"
import theme from "../../theme/theme"
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from "react-router-dom";
const SumCard = (props: any) => {
  return (
    <Box sx={{ backgroundColor:'white'}}>
      <Box sx={{display:'flex',flexDirection:{xs:'column-reverse', md:'row'}, height:'100%', backgroundColor:props.bgc ? props.bgc : theme.primary_color, borderRadius:'15px'}}>
          <Box sx={{marginLeft:'2rem', display:'flex', flexDirection:'column', justifyContent:'space-evenly', padding:'1rem'}}>
              <Typography sx={{fontSize:'2rem', fontWeight:'700', color:theme.sec_color}} >{props.title}</Typography>
              <Typography sx={{fontSize:theme.body_font, color:props.color ? props.color : 'white'}}>{props.description}</Typography>
              <Link to='aboutus' style={{ textDecoration:'none'}}>
                  <Box sx={{display:'flex', fontSize:theme.body_font, marginTop:'1rem'}}>
                      <Typography sx={{fontSize:'inherit', color:props.color ? props.color : 'white', fontWeight:'600'}}>{props.more}</Typography>
                      <ArrowCircleRightOutlinedIcon sx={{fontSize:'1.7rem', marginLeft:'0.5rem', color:theme.sec_color, fontWeight:'600'}}/>
                  </Box>
              </Link>
          </Box>
          <Box component='img' src={props.src} alt="" loading="lazy"
          sx={{
            width:{xs:'100%', md:'50%'},
            maskImage:{xs:'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0));', md:'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0));'},
            borderRadius:'15px', aspectRatio:'1/1'
            }}></Box>
      </Box>
    </Box>
  )
}

export default SumCard