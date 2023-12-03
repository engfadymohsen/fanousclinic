import { Box, Grid } from '@mui/material'
import SumCard from '../../shared/SumCard'









const DoctorsAndFeatures = () => {
  return (
    <Box sx={{backgroundColor:'white',width:'95%', margin:'1rem auto 0'}}>
        {/* <Box sx={{backgroundColor:theme.sec_color, width:'60%', margin:'1rem auto 2rem', height:'0.1rem'}}></Box> */}
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} >
              
                <SumCard src = './assets/doctors/fulldoctorimg.jpg' title='Doctor Name' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.' more='View All Doctors'/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <SumCard
                src = './assets/features/fullFeatureImg.jpg'
                title='Feature Name'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.'
                more='View All Features'
                // bgc='white'
                // color={theme.primary_color}
                />
            </Grid>
        </Grid>
    </Box>
  )
}






export default DoctorsAndFeatures