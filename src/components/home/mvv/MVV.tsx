import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import theme from '../../../theme/theme';

const MVV = () => {
  return (
    <Box sx={{
        width: '90%',
        margin: '0 auto',
        padding: '1rem 0',
        boxSizing: 'border-box',
        display: 'flex', // Make this a flex container
        flexDirection: 'column', // Column direction to manage vertical spacing
        height: '100%', // Full height
    }}>
        <Grid container spacing={4} sx={{ flex: 1 }}> {/* Flex 1 to fill the parent container */}
            <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
                <Box sx={{
                    flex: 1, // Flex 1 to fill the grid item container
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0px 0px 6px #0334492f',
                    padding: '20px 40px',
                    borderRadius: '15px',
                }}>
                    <AdjustRoundedIcon sx={{ color: theme.primary_color, fontSize: '10rem' }} />
                    <Typography sx={{ fontSize: '2rem', fontWeight: '700' }}>Mission</Typography>
                    <Box sx={{ width: '50%', height: '2px', backgroundColor: theme.sec_color }}></Box>
                    <Typography sx={{ textAlign: 'center', color: theme.primary_color, marginTop: '2.5rem', fontSize: theme.body_font}}>
                        We empower patients with personalized healthcare that is efficient and effective.
                        We guide them to achieve their health goals by discovering the truth of wellness
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
                <Box sx={{
                    flex: 1, // Flex 1 to fill the grid item container
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0px 0px 6px #0334492f',
                    padding: '20px 40px',
                    borderRadius: '15px',
                }}>
                    <RemoveRedEyeRoundedIcon sx={{ color: theme.primary_color, fontSize: '10rem' }} />
                    <Typography sx={{ fontSize: '2rem', fontWeight: '700' }}>Our Vision</Typography>
                    <Box sx={{ width: '50%', height: '2px', backgroundColor: theme.sec_color }}></Box>
                    <Typography sx={{ textAlign: 'center', color: theme.primary_color, marginTop: '2.5rem', fontSize: theme.body_font}}>
                        To Become the Most Recognized Healthcare Company on Earth by Nurturing Every Person 
                        to Realize The Way to a Healthy Life.
                    </Typography>
                </Box>
            </Grid>           
        </Grid>
    </Box>
  )
}

export default MVV;
