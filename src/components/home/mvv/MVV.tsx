import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import theme from '../../../theme/theme';









const MVV = () => {
    return (
      <Box sx={{
          width: '95%',
          margin: '0 auto',
          padding: '1rem 0',
          boxSizing: 'border-box',
      }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                  <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      boxShadow: '0px 0px 6px #0334492f',
                      padding: '20px',
                      borderRadius: '15px',
                      minHeight: '100%', // Set to 100% to match the height of the sibling
                  }}>
                      <AdjustRoundedIcon sx={{color: theme.primary_color, fontSize: '10rem'}} />
                      <Typography sx={{fontSize: '2rem', fontWeight: '700'}}>Mission</Typography>
                      <Box sx={{width: '50%', height: '2px', backgroundColor: theme.sec_color}}></Box>
                      <Typography sx={{
                          textAlign: 'justify', 
                          color: theme.primary_color, 
                          marginTop: '2.5rem', 
                          fontSize: theme.body_font, 
                          hyphens: 'auto'
                      }}>
                          We empower our patients with personalized healthcare that is efficient and effective.
                          We help them achieve their health goals and live their best lives.
                      </Typography>
                  </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                  <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      boxShadow: '0px 0px 6px #0334492f',
                      padding: '20px',
                      borderRadius: '15px',
                      minHeight: '100%', // Set to 100% to match the height of the sibling
                  }}>
                      <RemoveRedEyeRoundedIcon sx={{color: theme.primary_color, fontSize: '10rem'}} />
                      <Typography sx={{fontSize: '2rem', fontWeight: '700'}}>Our Vision</Typography>
                      <Box sx={{width: '50%', height: '2px', backgroundColor: theme.sec_color}}></Box>
                      <Typography sx={{
                          textAlign: 'justify', 
                          color: theme.primary_color, 
                          marginTop: '2.5rem', 
                          fontSize: theme.body_font, 
                          hyphens: 'auto'
                      }}>
                          To be the world's largest enterprise for mass customization of healthcare.
                      </Typography>
                  </Box>
              </Grid>           
          </Grid>
      </Box>
    )
  }
  









export default MVV