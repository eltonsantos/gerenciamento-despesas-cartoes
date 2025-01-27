import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CategoryIcon from '@mui/icons-material/Category';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Despesas', url: '/despesas', icon: <ReceiptIcon /> },
    { text: 'Funcionários', url: '/funcionarios', icon: <PersonIcon /> },
    { text: 'Cartões', url: '/cartoes', icon: <CreditCardIcon /> },
    { text: 'Categorias', url: '/categorias', icon: <CategoryIcon /> },
  ];

  const handleClick = (url) => {
    // Navega para a URL correspondente ao item clicado
    navigate(`${url.toLowerCase()}`);
  };

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
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => handleClick(item.url)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
