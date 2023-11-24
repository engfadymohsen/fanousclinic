import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import theme from '../../../theme/theme'

const Services = () => {

  const services = [
    {
      imgSrc: './assets/welcome.jpg',
      title: 'Service 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat repudiandae nam quidem voluptatum quam est in porro repellendus quo suscipit officiis iste asperiores, velit cupiditate quae possimus accusantium maxime.'
    },
    {
      imgSrc: './assets/welcome.jpg',
      title: 'Service 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat repudiandae nam quidem voluptatum quam est in porro repellendus quo suscipit officiis iste asperiores, velit cupiditate quae possimus accusantium maxime.'
    },
    {
      imgSrc: './assets/welcome.jpg',
      title: 'Service 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat repudiandae nam quidem voluptatum quam est in porro repellendus quo suscipit officiis iste asperiores, velit cupiditate quae possimus accusantium maxime.'
    },
  ]

  return (
    <Box sx={{backgroundColor:theme.primary_color, width:'100%', padding:'30px 0'}}>
      <Box sx={{backgroundColor:'#41bbcb4f', width:'90%',borderRadius:'15px', margin:'0 auto 20px'}}>
        <Typography sx={{textAlign:'center', fontSize:'4rem', fontWeight:'600', color:'white'}}>OUR SERVICES</Typography>
      </Box>
      <Box sx={{width:'90%', margin:'0 auto'}}>
         <Grid container spacing={3}>
          {services.map((service)=>(
              <Grid item xs={12} md={4}>
                  <Box sx={{minHeight:'60vh', display:'flex',flexDirection:'column', alignItems:'center', borderRadius:'15px', border:'1px solid #41bbcb'}}>
                      <Box component='img' src={service.imgSrc} alt='' sx={{width:'100%', borderTopRightRadius:'15px', borderTopLeftRadius:'15px'}}></Box>
                      <Box sx={{padding:'20px', color:'white'}}>
                        <Typography sx={{fontSize:'2rem', fontWeight:'700'}}>{service.title}</Typography>
                        <Typography sx={{textAlign:'justify', marginTop:'1rem', fontSize:theme.body_font, hyphens: 'auto'}}>{service.content}</Typography>
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