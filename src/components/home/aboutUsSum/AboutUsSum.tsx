import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import PrimaryBtn from '../../shared/PrimaryBtn'
import theme from '../../../theme/theme'






const AboutUsSum = () => {
  return (
    <Box sx={{
        backgroundImage:{lg:'url(./assets/sumaboutus.png)', md:'url(./assets/benefits.jpg)', sm:'url(./assets/benefits.jpg)',xs:'url(./assets/benefits.jpg)'},
        backgroundSize:'cover', 
        width:'100%', 
        minHeight:'38rem', 
        padding:{md:'4rem 6rem', xs:'1rem 1rem'},
        boxSizing:'border-box'
        }}>
        <Box sx={{display:'flex', flexDirection:{md:'row',xs:'column'}, color:theme.primary_color, fontSize:'5rem'}}>
            <Typography sx={{fontWeight:'700', fontSize:'inherit'}}>ABOUT</Typography><Typography sx={{fontWeight:'100',fontSize:'inherit',marginTop:{md:'auto',xs:'-2rem'}}}>US</Typography>
        </Box>
        <Box sx={{width:{lg:'50%',md:'100%',sm:'100%',xs:'100%'}}}>
          <Typography sx={{fontSize:theme.body_font, color:theme.primary_color, fontWeight:'400', textAlign:'left'}}>
            At <span style={{color:theme.primary_color, fontWeight:'600'}}>fanous CLINIC</span>, we are a community of dedicated healthcare professionals committed to providing personalized, high-quality healthcare services to our patients in Charlotte, North Carolina. We are committed to innovation and providing the best possible care for our patients. What truly sets FANOUS Clinic apart is our unwavering commitment to our patients. We believe in empowering individuals to lead healthy and fulfilling lives.
          </Typography>
        </Box>
        <Box sx={{marginTop:'5%'}}>
          <Link to='aboutus'>
            <PrimaryBtn content='Read More' />
          </Link>
        </Box>
    </Box>
  )
}





export default AboutUsSum