import { Box, Grid, Typography } from '@mui/material'
import NavBar from '../components/shared/NavBar/NavBar'
import Footer from '../components/shared/footer/Footer'
import Form from '../components/contactus/form/Form'
import OurData from '../components/contactus/ourdata/OurData'
import theme from '../theme/theme'
import { useRef, useEffect } from 'react'








const ContactUsPage = () => {
  const scrollToTop = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollElement = scrollToTop.current;
    if (scrollElement) {
      scrollElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, []);






  return (
    <Box ref={scrollToTop}>
        <NavBar />
        <Box sx={{
        backgroundImage:'url(./assets/benefits.jpg)',
        backgroundSize:'cover', 
        width:'100%', 
        minHeight:'38rem', 
        padding:{lg:'3rem 4rem', md:'3rem 3rem',sm:'3rem 1rem', xs:'3rem 1rem',},
        boxSizing:'border-box'
        }}>
          <Typography sx={{fontSize:'4rem',lineHeight:{xs:'1', md:'auto'}, color:'white', textAlign:{md:"left", xs:'center'}}} ><span style={{fontWeight:'600', color:theme.primary_color}}>Contact </span>Us</Typography>
          <Box sx={{marginTop:'2rem'}}>
            <Grid container spacing={3} sx={{alignItems:'stretch', height:'80%'}}>
              <Grid item xs={12} md={6} sx={{display:'flex',flexDirection:'column', justifyContent:'space-between'}} order={{ xs: 2, md: 1}}>
                  <OurData />
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box sx={{padding:{lg:'0 0 0 4rem', md:'0 0 0 4rem',sm:'1rem 1rem', xs:'1rem 1rem'}, boxSizing:'border-box'}}>
                  <Form />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer />
    </Box>
  )
}









export default ContactUsPage