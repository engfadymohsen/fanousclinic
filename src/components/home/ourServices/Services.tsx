import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import theme from '../../../theme/theme'

const Services = () => {

  const services = [
    {
      imgSrc: './assets/services/service1_UrgentVisit .png',
      title: 'Urgent Care Services',
      content: 'We offer extended hours of services for our patients to manage their urgent medical needs. We believe that we have to be there for our special patients population when they need urgent services.'
    },
    {
      imgSrc: './assets/services/service2_Chronic.png',
      title: 'Chronic Conditions Services',
      content: 'We developed a state of art practice to serve our patients with chronic conditions. As 6 out 10 adults in US live with one or more chronic conditions, we focus on those patients who need special medical expertise. We developed a harmonious system for effective management of most common conditions including Hypertension, Diabetes, Hyperlipidemia, Obesity and other common conditions.'
    },
    {
      imgSrc: './assets/services/service3_PreventiveCare .png',
      title: 'Preventive Care services',
      content: 'Whether you have chronic conditions or you do not, we strongly focus on preventive services. We believe that preventive care is the gateway to prevent chronic diseases, even we can reverse chronic diseases with preventive services. We help our patients to live healthy lifestyle.'
    },
  ]

  return (
    <Box sx={{backgroundColor:theme.primary_color, width:'100%', padding:'30px 0'}}>
      <Box sx={{backgroundColor:'#41bbcb4f', width:'90%',borderRadius:'15px', margin:'0 auto 20px'}}>
        <Typography sx={{textAlign:'center', fontSize:'4rem', fontWeight:'600', color:'white'}}>OUR SERVICES</Typography>
      </Box>
      <Box sx={{width:'95%', margin:'0 auto'}}>
         <Grid container spacing={2}>
          {services.map((service)=>(
              <Grid item  lg={4} md={4} sm={12} xs={12}>
                  <Box sx={{ height:'100%', display:'flex',flexDirection:'column', alignItems:'center', borderRadius:'15px', border:'1px solid #41bbcb'}}>
                      <Box component='img' src={service.imgSrc} alt='' sx={{width:'100%', borderTopRightRadius:'15px', borderTopLeftRadius:'15px'}}></Box>
                      <Box sx={{padding:'20px', color:'white'}}>
                        <Typography sx={{fontSize:'2rem', fontWeight:'700'}}>{service.title}</Typography>
                        <Typography sx={{ marginTop:'1rem', fontSize:theme.body_font, }}>{service.content}</Typography>
                      </Box>
                  </Box>
              </Grid>
          ))}
          </Grid>
      </Box>
    </Box>
  )
}

export default Services