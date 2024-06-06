import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const data = {
      email: email,
      userPassword: userPassword
    }

    try {
      await axios.post('https://localhost:7057/auth/login', data)
      navigate(`/home`); 
      
    } catch (error) {
      return error;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar src={`${process.env.PUBLIC_URL}/logo.png`} sx={{ m: 2, bgcolor: 'blue' }}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Giriş
        </Typography>
        <Box component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 3 }}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mt: 3, mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="userPassword"
                label="Şifre"
                type="password"
                id="userPassword"
                autoComplete="new-password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Giriş
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                Kayıt Ol
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
