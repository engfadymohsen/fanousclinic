import { Grid, Link, SvgIcon, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import theme from '../../../theme/theme';
const Footer = () => {
  return (
    <Box sx={{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:{md:'3rem 6rem', xs:'2rem 1rem'},
        boxSizing:'border-box',
        backgroundColor:theme.primary_color,
    }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} >
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <Box component='img' src='./assets/logoheart.png' alt='' sx={{width:'10rem'}}></Box>
              <Box sx={{color:'white', marginLeft:'2rem', fontWeight:'600'}}>
                <Typography sx={{marginBottom:'0.5rem',fontSize:theme.body_font}}>Fanous Clinic.Com</Typography>
                <Typography sx={{marginBottom:'0.5rem',fontSize:theme.body_font}}>Help Center</Typography>
                <Typography>Terms</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Box sx={{display:'flex', justifyContent:'space-between', width:'37%', marginBottom:'1rem'}}>
                <Link href="https://www.facebook.com/profile.php?id=61552333749894" target="_blank" rel="noopener"><FacebookRoundedIcon sx={{color:'white'}}/></Link>
                <Link href="https://www.instagram.com/fanous.clinic" target="_blank" rel="noopener"><InstagramIcon sx={{color:'white'}}/></Link>
                <Link href="http://www.linkedin.com/company/fanousclinic" target="_blank" rel="noopener"><LinkedInIcon sx={{color:'white'}}/></Link>
                <Link href="https://www.tiktok.com/fanous.clinic" target="_blank" rel="noopener">
                  <SvgIcon sx={{color:'white'}}><FontAwesomeIcon icon={faTiktok}/></SvgIcon>
                </Link>
                <Link href="https://www.youtube.com/@fanousclinic" target="_blank" rel="noopener"><YouTubeIcon sx={{color:'White'}}/></Link>      
              </Box>
              <Box sx={{color:'white'}}>
                <Typography sx={{ fontWeight:'600', marginBottom:'0.3rem',fontSize:theme.body_font}}>Fanous Clinic</Typography>
                <Typography sx={{ fontWeight:'200', marginBottom:'0.3rem',fontSize:theme.body_font}}>9200i Woodhall Lake Drive Waxhaw, NC 28173</Typography>
                <Typography sx={{ fontWeight:'200',fontSize:theme.body_font}}>2166595992</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography sx={{color:'#aaa',marginTop:'2rem'}}>
          © {new Date().getFullYear()} Copyright: Fanous Clinic
        </Typography>
    </Box>
  )
}

export default Footer