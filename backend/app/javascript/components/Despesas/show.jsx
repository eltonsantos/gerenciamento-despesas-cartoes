import { Dialog, DialogTitle, DialogContent, Button, Typography } from '@mui/material';

export default function Show({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Detalhes da Despesa</DialogTitle>
      <DialogContent>
        <Typography>Detalhes da despesa aqui...</Typography>
      </DialogContent>
      <Button onClick={onClose} color="primary">Fechar</Button>
    </Dialog>
  );
}
