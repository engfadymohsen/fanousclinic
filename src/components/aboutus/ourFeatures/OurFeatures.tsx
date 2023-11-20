import { Box, Typography, Grid } from '@mui/material'
import HorizontalCard from '../../shared/HorizontalCard'
import theme from '../../../theme/theme'

const OurFeatures = () => {
    const featurs =[
        {
            src: './assets/features/f1.png',
            title: 'Feature 1',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.',
        },
        {
            src: './assets/features/f2.png',
            title: 'Feature 2',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.',
        },
        {
            src: './assets/features/f3.png',
            title: 'Feature 3',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.',
        },
    ]
  return (
    <Box sx={{width:'90%', margin:'20px auto'}}>
      <Typography sx={{fontSize:'4rem',color:theme.primary_color, marginBottom:'20px',lineHeight:{xs:'1', md:'auto'}}} ><span style={{fontWeight:'600'}}>Our </span>Features</Typography>
      <Grid container spacing={3}>
        {featurs.map((feature)=>(
          <Grid item xs={12} md={6}>
            <HorizontalCard docName={feature.title} docDisc={feature.body} src={feature.src}></HorizontalCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default OurFeatures