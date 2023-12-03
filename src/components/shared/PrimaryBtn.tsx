import { Button, Box, Typography } from '@mui/material'
import theme from '../../theme/theme'









const PrimaryBtn = (props: any) => {
  return (
    <Button sx={{padding:'0px', width:'fit-content'}} type={props.type ? props.type : 'button'}>
        <Box sx={{
        backgroundColor:theme.primary_color,
        color:'white',
        padding:'10px 40px',
        borderRadius:'20px',
        transition: '0.3s',
        '&:hover':{
            backgroundColor:theme.sec_color,
            color:theme.primary_color
        }
        }}>
            <Typography sx={{fontSize:'1rem', fontWeight:'400', textAlign:'justify'}}>
                {props.content}
            </Typography>
        </Box>
    </Button>
  )
}








export default PrimaryBtn