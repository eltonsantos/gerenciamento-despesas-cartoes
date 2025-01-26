import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

export default function Edit({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar Despesa</DialogTitle>
      <DialogContent>
        <TextField margin="dense" label="Estabelecimento" fullWidth />
        <TextField margin="dense" label="Valor" fullWidth />
        <TextField margin="dense" label="Data de criação" fullWidth />
        <TextField margin="dense" label="Cartão" fullWidth />
        <TextField margin="dense" label="Comprovação" fullWidth />
        <TextField margin="dense" label="Funcionário" fullWidth />
        <TextField margin="dense" label="Categoria" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancelar</Button>
        <Button onClick={() => console.log('Despesa salva')} color="primary">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
