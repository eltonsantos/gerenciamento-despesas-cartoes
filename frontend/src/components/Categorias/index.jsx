import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableRow, IconButton } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import { useState } from 'react';

// Exemplo de dados
const mockData = [
  { id: 1, nome: 'Alimentação' },
  { id: 2, nome: 'Transporte' },
];

export default function Categorias({ tabValue }) {
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

  return (
    <>
      <Typography variant="h1" sx={{ fontSize: '34px', fontWeight: 'regular', marginBottom: 2 }}>
        Categorias
      </Typography>
      <Box>
        {isEmpty ? (
          <Typography>Até o momento, não há categorias cadastradas</Typography>
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
                          <CategoryIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6">{row.nome}</Typography>
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
