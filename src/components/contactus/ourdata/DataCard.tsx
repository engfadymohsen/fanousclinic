import { Box, Typography } from "@mui/material"
import theme from "../../../theme/theme"






const DataCard = (props: any) => {
  return (
    <Box sx={{display:'flex', marginBottom:props.mb ? props.mb : '1rem'}}>
        {props.children}
        <Box sx={{marginLeft:'0.7rem'}}>
            <Typography sx={{fontSize:'1rem', fontWeight:'400', color:theme.primary_color}}>{props.title}</Typography>
            <Typography sx={{fontSize:theme.body_font, fontWeight:'600', color:theme.primary_color, width:'100%'}}>{props.desc}</Typography>
        </Box>
    </Box>
  )
}






export default DataCard