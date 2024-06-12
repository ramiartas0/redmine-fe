
import React from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'

export default function Login() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Geçersiz email adresi').required('Email gereklidir'),
    userPassword: Yup.string().min(6, 'Şifre en az 6 karakter uzunluğunda olmalıdır').required('Şifre gereklidir')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      userPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await login(values);
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          Swal.fire({text: "Giriş Başarılı!",icon: "success"});
          navigate('/home', { replace: true });
        }
      } catch (error) {
        Swal.fire({text: "Giriş Başarısız!",icon: "error"});
        throw error;
      }
    }
  });

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
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ mt: 3, mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="userPassword"
              name="userPassword"
              label="Şifre"
              type="password"
              autoComplete="new-password"
              value={formik.values.userPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.userPassword && Boolean(formik.errors.userPassword)}
              helperText={formik.touched.userPassword && formik.errors.userPassword}
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
