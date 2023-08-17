import React from 'react';
import { Link } from 'react-router-dom';
import { Container, TextField, Button, Grid, AppBar, Toolbar } from '@mui/material';
import GoogleLogin from 'react-google-login';

const LoginScreen = () => {
  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success:', response);
  };

  const handleGoogleLoginFailure = (error) => {
    console.log('Google login error:', error);
  };


  const buttonStyle = {
    backgroundColor: 'rgb(215, 56, 55)',
    color: 'white',
    marginTop: '10px',
    padding: '10px 20px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'rgb(215, 56, 55)', width: '100%' }}>
        <Toolbar />
      </AppBar>

      <Container maxWidth="xs">
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={12}>
            <div style={{ padding: '20px', borderRadius: '8px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                {}
              </div>
              <h2 style={{ textAlign: 'center' }}>Login</h2>
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="Senha" type="password" variant="outlined" fullWidth style={{ marginTop: '10px' }} />
              <Button variant="contained" color="secondary" fullWidth style={{ ...buttonStyle, marginTop: '20px' }}>
                Login
              </Button>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <Link to="/cadastro" style={{ textDecoration: 'none', marginBottom: '10px', width: '100%' }}>
                  <Button variant="contained" color="secondary" style={buttonStyle}>
                    Criar uma conta
                  </Button>
                </Link>
                {}
                <GoogleLogin
                  clientId="231057203284-vmjdr09plm6e9oc6l5stggfalf75reup.apps.googleusercontent.com"
                  onSuccess={handleGoogleLoginSuccess}
                  onFailure={handleGoogleLoginFailure}
                  buttonText="Google"
                  style={buttonStyle}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default LoginScreen;
