
import React from "react";
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../services/api';

export default function Register() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    userName: Yup.string().required('Kullanıcı Adı gereklidir'),
    email: Yup.string().email('Geçersiz email adresi').required('Email gereklidir'),
    userPassword: Yup.string().min(6, 'Şifre en az 6 karakter uzunluğunda olmalıdır').required('Şifre gereklidir'),
    name: Yup.string().required('Ad gereklidir'),
    lastName: Yup.string().required('Soyad gereklidir')
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      name: '',
      lastName: '',
      email: '',
      userPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await register(values);
        navigate(`/`);
      } catch (error) {
        console.error('Kayıt sırasında bir hata oluştu:', error);
      }
    }
  });

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
          Kayıt Ol
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userName"
                label="Kullanıcı Adı"
                name="userName"
                autoComplete="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.userName && Boolean(formik.errors.userName)}
                helperText={formik.touched.userName && formik.errors.userName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Ad"
                name="name"
                autoComplete="given-name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Soyad"
                name="lastName"
                autoComplete="family-name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userPassword"
                label="Şifre"
                name="userPassword"
                type="password"
                autoComplete="new-password"
                value={formik.values.userPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.userPassword && Boolean(formik.errors.userPassword)}
                helperText={formik.touched.userPassword && formik.errors.userPassword}
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
                Zaten bir hesabınız var mı? Giriş Yap
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

