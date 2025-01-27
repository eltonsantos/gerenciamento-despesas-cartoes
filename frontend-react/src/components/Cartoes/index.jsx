import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Button, IconButton } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useState } from 'react';

// Exemplo de dados
const mockData = [
  { id: 1, nome: 'Fulano', numero: '1234567812345678' },
  { id: 2, nome: 'Beltrano', numero: '8765432187654321' },
];

export default function Cartoes({ tabValue }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isEmpty = tabValue === 0 ? mockData.length === 0 : false;

  const formatarNumeroCartao = (numero) => {
    return `**** **** **** ${numero.slice(-4)}`;
  };

  return (
    <>
      <Typography variant="h1" sx={{ fontSize: '34px', fontWeight: 'regular', marginBottom: 2 }}>
        Cartões
      </Typography>
      <Box>
        {isEmpty ? (
          <Typography>Até o momento, não há cartões cadastrados</Typography>
        ) : (
          <Paper
            sx={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001F',
              padding: 2,
              width: '100%',
              
            }}
          >
            <TableContainer>
              <Table>
                <TableBody>
                  {mockData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <IconButton>
                          <CreditCardIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6">{`Cartão do ${row.nome}`}</Typography>
                        <Typography>{formatarNumeroCartao(row.numero)}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Button variant="contained" color="primary">Editar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        )}
      </Box>
    </>
  );
}
