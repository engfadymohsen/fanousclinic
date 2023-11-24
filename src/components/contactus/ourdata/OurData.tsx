import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DataCard from './DataCard';
import Map from '../map/Map';
import theme from '../../../theme/theme';
import { Box } from '@mui/material';

const OurData = () => {
    const icnStyle = {fontSize:'2.2rem', color:theme.primary_color}
  return (
    <>
      <Box>
        <Map />
        <DataCard title='Our Location' desc='10926 South Tryon Street, Suite D, Charlotte, NC 28273'>
            <PlaceOutlinedIcon sx={icnStyle}/>
        </DataCard>
     </Box>
      <DataCard title='Phone Number' desc='(704) 219-5384'>
          <LocalPhoneOutlinedIcon sx={icnStyle}/>
      </DataCard>
      <DataCard title='Email' desc='info@fanousclinic.com'  mb='0'>
          <MailOutlinedIcon sx={icnStyle}/>
      </DataCard>
    </>
  )
}

export default OurData