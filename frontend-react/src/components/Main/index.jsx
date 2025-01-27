import { useLocation } from 'react-router-dom';
import { Box, Typography, Tabs, Tab, Toolbar } from '@mui/material';
import Cartoes from '../Cartoes';
import Categorias from '../Categorias';
import Funcionarios from '../Funcionarios';
import Despesas from '../Despesas';
import { useState } from 'react';

export default function Main() {
  const location = useLocation();
  const path = location.pathname.substring(1) || 'despesas';
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderContent = () => {
    switch (path) {
      case 'despesas':
        return (
          <>
            <Typography variant="h1" sx={{ fontSize: '34px', fontWeight: 'regular', marginBottom: 2 }}>
              Despesas
            </Typography>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="Lista" />
              <Tab label="Arquivadas" />
            </Tabs>
            <Box sx={{ padding: 2 }}>
              {tabValue === 0 && <Despesas tabValue={tabValue} />}
              {tabValue === 1 && <Typography>Conteúdo Arquivado de Despesas</Typography>}
            </Box>
          </>
        );
      case 'cartoes':
        return <Cartoes />;
      case 'categorias':
        return <Categorias />;
      case 'funcionarios':
        return <Funcionarios />;
    }
  };

  return (
    <Box
      component="main"
      sx={{
        padding: '24px 132px 0px 132px',
        gap: '24px',
        width: '100%',
      }}
    >
      <Toolbar />
      {renderContent()}
    </Box>
  );
}
