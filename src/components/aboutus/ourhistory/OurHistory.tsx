import { Box, Typography } from '@mui/material'
import theme from '../../../theme/theme'

const OurHistory = () => {

  return (
    <Box sx={{backgroundColor:theme.sec_color, overflow:'hidden', position:'relative'}}>
        <Box component='img' src='./assets/logoheart.png' alt='' sx={{display:{md:'block', xs:'none'},position:'absolute', right:'-20%', top:'-10%', width:{md:'50%', xs:'70%'}}}></Box>
        <Box sx={{padding:{md:'4rem 6rem', xs:'1rem 1rem',},width:{md:'60%', xs:'90%'}, color:'white'}}>
            <Typography sx={{fontSize:'4rem', marginBottom:'20px',lineHeight:{xs:'1', md:'auto'}, color:'white'}} ><span style={{fontWeight:'600', color:theme.sec_color}}>Our </span>Story</Typography>
            <Typography sx={{fontSize:theme.body_font, fontWeight:'400', textAlign:'justify', hyphens: 'auto'}}>
              One day, as Dr. Farag was leaving a hospital room, the patient stopped him with a curious inquiry: "Doctor, did you happen to notice that I just had the same conversation and answered the same questions with another physician who left only 15 minutes ago, all while I'm enduring physical pain?" This question resonated deeply with Dr. Farag about patients’ emotional pain. 
             	Upon pondering these words, Dr. Farag came to a profound realization. Healthcare providers often find themselves caught in the cycle of delivering redundant services that bring no added value to their patients. It became evident that patients, too, experienced discomfort due to the lack of clear communication between their healthcare providers. Both patients and providers suffered from the frustration of inaccessible services, delayed appointments, wasted time, and the unnecessary shuffle between medical facilities. As Dr. Farag continued to contemplate this issue, he recognized that health insurance companies bore a significant financial burden as a result of these inefficiencies. This, in turn, created a ripple effect throughout the already strained U.S. healthcare system, preventing the delivery of personalized and timely care when it was needed most.  
              This realization sparked a crucial question: "What if we could create an environment that fosters transparent communication between patients, providers, and payers? What if we could offer services that flowed seamlessly, with patients having the ability to pull those services at their fingertips?"  
            </Typography>
            <Typography sx={{color:theme.sec_color,fontSize:theme.body_font, fontWeight:'500', marginTop:'1rem'}}>And so, from this profound insight, Fanous Clinic was conceived.  </Typography>
        </Box>
    </Box>
  )
}

export default OurHistory