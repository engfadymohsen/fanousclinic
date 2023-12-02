import {Grid, Link as Mlink, SvgIcon, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import PhoneIcon from '@mui/icons-material/Phone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import theme from '../../../theme/theme';
const Footer = () => {
  return (
    <Box sx={{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:{lg:'3rem 5rem 3rem 5rem', xs:'2rem 2rem'},
        boxSizing:'border-box',
        backgroundColor:theme.primary_color,
    }}>
        <Grid container >
          <Grid item xs={12} sm={12} md={12} lg={4} sx={{margin:{lg:'0',md:'1rem 0 3rem',sm:'1rem 0 3rem',xs:'1rem 0 3rem'}}}>
            <Box sx={{display:'flex',flexDirection:{lg:'column',md:'row', sm:'column', xs:'column'}, justifyContent:'space-around', alignItems:{lg:'flex-start', md:'center', sm:'center', xs:'center'}, height:'100%'}}>
              <Box component='img' src='./assets/hlogo2.png' alt='' sx={{width:'18rem', margin:{lg:'0', md:'0',sm:'2rem', xs:'2rem'}}}></Box>
              <Box sx={{display:'flex', justifyContent:'space-between', width:'12rem'}}>
                <Mlink href="https://www.facebook.com/profile.php?id=61552333749894" target="_blank" rel="noopener"><FacebookRoundedIcon sx={{color:'white',fontSize:'1.65rem'}}/></Mlink>
                <Mlink href="https://www.instagram.com/fanous.clinic" target="_blank" rel="noopener"><InstagramIcon sx={{color:'white',fontSize:'1.65rem'}}/></Mlink>
                <Mlink href="http://www.linkedin.com/company/fanousclinic" target="_blank" rel="noopener"><LinkedInIcon sx={{color:'white',fontSize:'1.65rem'}}/></Mlink>
                <Mlink href="https://www.tiktok.com/@fanous.clinic" target="_blank" rel="noopener">
                  <SvgIcon sx={{color:'white'}}><FontAwesomeIcon icon={faTiktok}/></SvgIcon>
                </Mlink>
                <Mlink href="https://www.youtube.com/@fanousclinic" target="_blank" rel="noopener"><YouTubeIcon sx={{color:'White',fontSize:'1.65rem'}}/></Mlink>      
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} sx={{marginBottom:{lg:'0',md:'0',sm:'3rem',xs:'3rem'}}}>
              <Box sx={{color:'white', display:'flex', flexDirection:'column', alignItems:{lg:'flex-start',md:'flex-start',sm:'center',xs:'center'}}}>
                <Typography sx={{fontSize:`calc(${theme.body_font} + .15rem)`, fontWeight:'600'}}>Important Links</Typography>
                <Box sx={{width:'50%', height:'2px', backgroundColor:theme.sec_color, margin:'1rem 0'}}></Box>
                <Link to='/aboutus' style={{textDecoration:'none', color:'white'}}><Typography sx={{marginBottom:'1rem',fontSize:theme.body_font}}>About fanous Clinic</Typography></Link>
                <Link to='/contactus' style={{textDecoration:'none', color:'white'}}><Typography sx={{marginBottom:'1rem',fontSize:theme.body_font}}>Contact Us</Typography></Link>
                <Link to='/' style={{textDecoration:'none', color:'white'}}><Typography sx={{marginBottom:'1rem',fontSize:theme.body_font}}>Help Center</Typography></Link>
                {/* <Link to='/' style={{textDecoration:'none', color:'white'}}><Typography sx={{marginBottom:'1rem',fontSize:theme.body_font}}>Our Policies</Typography></Link> */}
              </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box sx={{color:'white', display:'flex', flexDirection:'column', alignItems:{lg:'flex-start',md:'flex-start',sm:'center',xs:'center'}}}>
                <Typography sx={{fontSize:`calc(${theme.body_font} + .15rem)`, fontWeight:'600'}}>Contact Us</Typography>
                <Box sx={{width:'50%', height:'2px', backgroundColor:theme.sec_color, margin:'1rem 0'}}></Box>
                <Box sx={{color:'white', display:'flex', flexDirection:'column', alignItems:{md:'flex-start',xs:'center'}, textAlign:{md:'left', xs:'center'}}}>
                <Mlink href="https://www.google.com/maps/place/10926+S+Tryon+St,+Charlotte,+NC+28273/data=!4m2!3m1!1s0x88569a474bb9509b:0x9a21640c57d737f1?sa=X&ved=2ahUKEwi2udzV_tWCAxULm7AFHQXPD2YQ8gF6BAgPEAA" target="_blank" rel="noopener" sx={{textDecoration:'none' , color:'white'}}>
                <Box sx={{display:'flex', alignItems:'center', marginBottom:'1rem'}}>
                  <FmdGoodIcon sx={{marginRight:'1rem', color:theme.sec_color, fontSize:'1.65rem'}}/>
                  <Typography sx={{ fontWeight:'200', fontSize:theme.body_font}}>10926 South Tryon Street, Suite D, Charlotte, NC 28273</Typography>
                </Box>
                </Mlink>
                <Mlink href="tel:(704) 219-5384" target="_blank" rel="noopener" sx={{textDecoration:'none' , color:'white'}}>
                <Box sx={{display:'flex', alignItems:'center', marginBottom:'1rem'}}>
                  <PhoneIcon sx={{marginRight:'1rem', color:theme.sec_color, fontSize:'1.65rem'}}/>
                  <Typography sx={{ fontWeight:'200', fontSize:theme.body_font}}>(704) 219-5384</Typography>
                </Box>
                </Mlink>
                <Mlink href="mailto:marketing@fanousclinic.com" target="_blank" rel="noopener" sx={{textDecoration:'none' , color:'white'}}>
                <Box sx={{display:'flex', alignItems:'center', marginBottom:'1rem'}}>
                  <EmailRoundedIcon sx={{marginRight:'1rem', color:theme.sec_color, fontSize:'1.65rem'}}/>
                  <Typography sx={{ fontWeight:'200', fontSize:theme.body_font}}>marketing@fanousclinic.com</Typography>
                </Box>
                </Mlink>
              </Box>
              </Box>
          </Grid>

        </Grid>
        <Typography sx={{color:'#aaa',marginTop:'2.5rem'}}>
          © {new Date().getFullYear()} Copyright: Fanous Clinic
        </Typography>
    </Box>
  )
}

export default Footer