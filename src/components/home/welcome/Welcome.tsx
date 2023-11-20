import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import theme from '../../../theme/theme';
const Welcome = () => {
  console.log(theme.body_font)
  return (
    <Box sx={{
        backgroundImage:'url(./assets/welcome.jpg)',
        backgroundSize:'cover', 
        width:'100%', 
        minHeight:'38rem', 
        padding:{md:'4rem 6rem', xs:'1rem 1rem',},
        boxSizing:'border-box',
        }}>
        <Box sx={{display:'flex', flexDirection:{md:'row',xs:'column'}, color:theme.primary_color, fontSize:'5rem'}}>
            <Typography sx={{fontWeight:'700', fontSize:'inherit'}}>FANOUS</Typography><Typography sx={{fontWeight:'100',fontSize:'inherit',marginTop:{md:'auto',xs:'-2rem'},color:'white'}}>CLINIC</Typography>
        </Box>
        <Box >
          <Box sx={{color:theme.primary_color, fontSize:'2.5rem', marginTop:{md:'4%',xs:'10%'}, marginLeft:'2%'}}>
            <Typography sx={{fontSize:'inherit', marginBottom:'-10px',width:'40%'}}>{'Personalized Healthcare at your fingertips'.toUpperCase()} </Typography>
          </Box>
          <Box sx={{display:'flex', alignItems: 'center', marginTop:{md:'7%',xs:'20%'}}}>
            <Box sx={{
              backgroundColor:theme.primary_color,
              color:'white',
              padding:'10px 20px',
              marginRight  :'20px',
              height:'20px',
              borderRadius:'20px',
              display:'flex',
              }}>
              <Box sx={{display:'flex', alignItems:'center', }}>
                <Box id='sw-icons' sx={{display:'flex', justifyContent:'center', marginRight:'1rem'}}>
                  <AndroidIcon />
                  <AppleIcon />
                </Box>
                <Typography sx={{fontSize:theme.body_font}}>Fanous Clinic</Typography> 
              </Box>
            </Box>
            <Box sx={{display:'flex'}}>
              <InstagramIcon sx={{marginRight:'10px', }}/>
              <WhatsAppIcon sx={{marginRight:'10px', }}/>
              <MailOutlineIcon sx={{marginRight:'10px', }}/>
            </Box>
          </Box>
        </Box>

    </Box>
  )
}

export default Welcome