import React from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';

const LoginScreen = () => {
  return (
    <Container maxWidth="xs">
      <Grid container spacing={2} justifyContent="flex-end" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12}>
          <div style={{ padding: '20px', borderRadius: '8px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <h2>Login</h2>
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Senha" type="password" variant="outlined" fullWidth style={{ marginTop: '10px' }} />
            <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px', backgroundColor: 'rgb(215, 56, 55)' }}>
              Login
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginScreen;
