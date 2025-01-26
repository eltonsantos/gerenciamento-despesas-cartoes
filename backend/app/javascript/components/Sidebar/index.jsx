import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CategoryIcon from '@mui/icons-material/Category';

// eslint-disable-next-line react/prop-types
export default function Sidebar() {
  const menuItems = [
    { text: 'Despesas', icon: <ReceiptIcon />, path: '/' },
    { text: 'Funcionários', icon: <PersonIcon />, path: '/users' },
    { text: 'Cartões', icon: <CreditCardIcon />, path: '/cards' },
    { text: 'Categoria', icon: <CategoryIcon />, path: '/categories' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', borderRight: '1px solid #ccc' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems
            .map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          
            <ListItem button component="a" href="/users/sign_out" data-method="delete">
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          
        </List>
      </Box>
    </Drawer>
  );
}
