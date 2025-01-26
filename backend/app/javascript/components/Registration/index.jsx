import { useState } from 'react';
import { TextField, Button, Box, Card, CardHeader, CardContent, CardActions, Typography, Container } from '@mui/material';

import logoImg from '../../assets/logo.svg';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [cnpj, setCnpj] = useState('');

  const handleRegister = () => {
    console.log("Usuário registrado com sucesso:", { name, email, password, companyName, cnpj });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#2196F3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Box
        component="img"
        src={logoImg}
        alt="Logo"
        sx={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '50px',
          fontWeight: 400,
          lineHeight: '60px'
        }}
      />
      <Container maxWidth="sm">
        <Card>
          <CardHeader
            title="Criar conta"
            titleTypographyProps={{
              fontSize: '24px'
            }}
          />
          <CardContent>
            <Typography
              sx={{
                fontSize: '16px'
              }}
            >
              Informe os seus dados pessoais
            </Typography>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Nome da Empresa"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <TextField
              label="CNPJ"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-start' }}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleRegister}
            >
              Criar conta
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
}
