import React, { useState } from "react";
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Register() {

  const [userName, setUserName] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const navigation = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: userName,
      name: name,
      lastName: lastName,
      email: email,
      userPassword: userPassword
    }

    try {
      await axios.post('https://localhost:7057/auth/register', data)
      handleClear()
      //navigation(`/login`) 
      
    } catch (error) {
      return error;
    }

  };

  const handleClear = () =>{
    setUserName('')
    setName('')
    setLastName('')
    setEmail('')
    setUserPassword('')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar src={`${process.env.PUBLIC_URL}/logo.png`} sx={{ m: 2, bgcolor: 'blue' }}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userName"
                label="Kullanıcı Adı"
                name="userName"
                autoComplete="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="name"
                label="Adı"
                type="text"
                id="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="lastName"
                label="Soyadı"
                type="text"
                id="lastName"
                autoComplete="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Kayıt Ol
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Giriş Yap
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}