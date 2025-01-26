import { useState } from 'react';
import { Box, Typography, Tabs, Tab, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Button } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';

const mockData = [
  { id: 1, estabelecimento: 'Loja A', valor: 'R$100', dataCriacao: '2024-08-01', cartao: 'Visa', comprovacao: 'Sim', funcionario: 'João', categoria: 'Alimentação' },
  { id: 2, estabelecimento: 'Loja B', valor: 'R$200', dataCriacao: '2024-08-02', cartao: 'MasterCard', comprovacao: 'Não', funcionario: 'Maria', categoria: 'Transporte' },
];

export default function Despesas() {
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isEmpty = tabValue === 0 ? mockData.length === 0 : false;

  return (
    <Box
    >
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        sx={{ marginBottom: 2 }}
      >
        <Tab label="Lista" />
        <Tab label="Arquivadas" />
      </Tabs>

      {tabValue === 0 ? (
        <Box>
          {isEmpty ? (
            <Typography>Até o momento, não há despesas listadas</Typography>
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
                  <TableHead>
                    <TableRow>
                      <TableCell>Estabelecimento</TableCell>
                      <TableCell>Valor</TableCell>
                      <TableCell>Data de criação</TableCell>
                      <TableCell>Cartão</TableCell>
                      <TableCell>Comprovação</TableCell>
                      <TableCell>Funcionário</TableCell>
                      <TableCell>Categoria</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mockData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.estabelecimento}</TableCell>
                        <TableCell>{row.valor}</TableCell>
                        <TableCell>{row.dataCriacao}</TableCell>
                        <TableCell>{row.cartao}</TableCell>
                        <TableCell>{row.comprovacao}</TableCell>
                        <TableCell>{row.funcionario}</TableCell>
                        <TableCell>{row.categoria}</TableCell>
                        <TableCell>
                          <Button variant="contained" color="primary">Arquivar</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="td"
                        count={mockData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Paper>
          )}
        </Box>
      ) : (
        <Typography>Até o momento, não há despesas arquivadas</Typography>
      )}
    </Box>
  );
}
