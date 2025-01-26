import { useState } from 'react';
import { TextField, Button, Box, CardActions, Typography, Container } from '@mui/material';

import logoImg from '../../assets/images/logo.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Login realizado com sucesso:", { email, password });
  };

  const handleForgotPassword = () => {
    console.log("Redirecionar para recuperar senha");
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#2196F3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        component="img"
        src={logoImg}
        alt="Logo"
        sx={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '50px',
          fontWeight: 400,
          lineHeight: '60px'
        }}
      />
      <Container maxWidth="xs" sx={{ backgroundColor: 'white', padding: 1, borderRadius: 1 }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: '24px',
            fontWeight: 400,
            textAlign: 'left',
            marginBottom: 1,
            paddingTop: 1,
          }}
        >
          Logar no Espresso
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Usuário"
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
          <CardActions sx={{ justifyContent: 'flex-start', marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleLogin}
            >
              Entrar
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              onClick={handleForgotPassword}
            >
              Criar conta
            </Button>
          </CardActions>
        </Box>
      </Container>
    </Box>
  );
}
