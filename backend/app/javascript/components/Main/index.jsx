import { useState } from 'react';
import { Box, Typography, Tabs, Tab, Toolbar } from '@mui/material';
import Despesas from '../Despesas';

// eslint-disable-next-line react/prop-types
export default function Main({ menuSelection }) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      component="main"
      sx={{
          padding: '24px 0px 0px 232px',
          gap: '24px',
        }}
      >
      <Toolbar />
      <Typography variant="h1" sx={{ fontSize: '34px', fontWeight: 'regular', marginBottom: 2 }}>
        {menuSelection}
      </Typography>
      {menuSelection === 'Despesas' ? (
        <Despesas />
      ) : (
        <>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Lista" />
            <Tab label="Arquivada" />
          </Tabs>
          <Box sx={{ padding: 2 }}>
            {tabValue === 0 && <Typography>Conteúdo da Lista de {menuSelection}</Typography>}
            {tabValue === 1 && <Typography>Conteúdo Arquivado de {menuSelection}</Typography>}
          </Box>
        </>
      ) }
    </Box>
  );
}
