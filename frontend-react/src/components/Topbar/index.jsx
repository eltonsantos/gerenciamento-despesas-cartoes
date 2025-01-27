import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Topbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#2196F3', height: '68px', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ marginLeft: 1, color: '#fff' }}>
            Espresso
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircleIcon sx={{ marginRight: 1 }} />
          <Typography variant="body1" component="div" sx={{ marginRight: 2 }}>
            teste@teste.com
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="logout">
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
