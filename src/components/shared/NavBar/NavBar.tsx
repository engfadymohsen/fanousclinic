import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import theme from '../../../theme/theme';

const pages = ['HOME', 'ABOUT US', 'CONTACT US','OUR POLICIES'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e:any ) => {
    console.log(e)
  };


  return (
    <AppBar position="static" sx={{backgroundColor:'white', color:'black', padding:'10px 10px', boxShadow:'none'}}>
      <Container maxWidth="xl" id='nav'>
        <Toolbar disableGutters sx={{justifyContent:'space-between'}}>
          <Link to='/'>
            <Box component='img' src='./assets/hlogo.png ' alt='' sx={{width:'12rem', display: { xs: 'none', md: 'flex' }, mr: 1 }}></Box>
          </Link>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } ,justifyContent:'flex-end', alignItems:'center', width:'60%'}}>
              {pages.map((page) => (
                <Link to={page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase().replace(/\s/g, '')}`} style={{textDecoration:'none'}} >
                  <Button
                  key={page}
                  id={page}
                  onClick={(e)=>handleCloseNavMenu(e.target)}
                  sx={{ my: 2, color: 'black', display: 'block',fontSize:'1.1rem'}}
                  >
                  {page}
                  </Button>
                </Link>
              ))}
          </Box>
          <Box sx={{ flexGrow: 1,justifyContent:'space-between', display: { xs: 'flex', md: 'none' } }}>
            <Link to='/'>
              <Box component='img' src='./assets/logo.png ' alt='' sx={{width:'10rem', display: { xs: 'flex', md: 'none' }, mr: 1 }}></Box>
            </Link>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon sx={{color:theme.primary_color, fontSize:'3rem'}} />
            </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <Link to={page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase().replace(/\s/g, '')}`} style={{textDecoration:'none'}} >
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" sx={{color:theme.primary_color}}>
                          {page}
                        </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
