import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Button, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

// Exemplo de dados
const mockData = [
  { id: 1, nome: 'Fulano', email: 'fulano@example.com' },
  { id: 2, nome: 'Beltrano', email: 'beltrano@example.com' },
];

export default function Funcionarios({ tabValue }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isEmpty = mockData.length === 0;

  return (
    <Box>
      <Typography variant="h1" sx={{ fontSize: '34px', fontWeight: 'regular', marginBottom: 2 }}>
        Funcionários
      </Typography>
      {isEmpty ? (
        <Typography>Até o momento, não há funcionários cadastrados</Typography>
      ) : (
        <Paper
          sx={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001F',
            padding: 2,
          }}
        >
          <TableContainer>
            <Table>
              <TableBody>
                {mockData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <IconButton>
                        <PersonIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">{row.nome}</Typography>
                      <Typography>{row.email}</Typography>
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
  );
}
