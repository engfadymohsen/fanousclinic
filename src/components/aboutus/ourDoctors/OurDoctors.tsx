import { Box, Grid, Typography } from '@mui/material'
import HorizontalCard from '../../shared/HorizontalCard'
import theme from '../../../theme/theme'

const OurDoctors = () => {

  const doctors = [
    {
      docName: 'Dr. Mohamed Ahmed',
      docPos: 'Dentist',
      docDisc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.',
      src: './assets/doctors/doctor.png'
    },
    {
      docName: 'Dr. Mohamed Ahmed',
      docPos: 'Dentist',
      docDisc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.',
      src: './assets/doctors/doctor.png'
    },
    {
      docName: 'Dr. Mohamed Ahmed',
      docPos: 'Dentist',
      docDisc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.',
      src: './assets/doctors/doctor.png'
    },
  ]

  return (
    
    <Box sx={{width:'90%', margin:'20px auto'}} >
      <Typography sx={{fontSize:'4rem',color:theme.primary_color, marginBottom:'20px',lineHeight:{xs:'1', md:'auto'}}} ><span style={{fontWeight:'600'}}>Meet </span>Our Doctors</Typography>
      <Grid container spacing={3}>
        
        {doctors.map((doctor)=>(
          <Grid item xs={12} md={6}>
            <HorizontalCard docName={doctor.docName} docPos={doctor.docPos} docDisc={doctor.docDisc} src={doctor.src}></HorizontalCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default OurDoctors