import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const validate = values => {
  const errors = {};

  if (!values.nama) {
    errors.nama = 'Nama tidak boleh kosong';
  } else if (values.nama.length < 5) {
    errors.nama = 'Karakter minimal 5 huruf';
  } else if (values.nama.length > 12) {
    errors.nama = 'Karakter maksimal 12 huruf';
  }

  if (!values.email) {
    errors.email = 'Email tidak boleh kosong';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Format email tidak valid';
  }

  if (!values.password) {
    errors.password = 'Password tidak boleh kosong';
  } else if (values.password.length < 6) {
    errors.password = 'Minimal 6 karakter';
  }

  return errors;
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      nama: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      alert(`Pendaftaran Berhasil!\nNama: ${values.nama}\nEmail: ${values.email}`);
      console.log('Submitted Values:', values);
      resetForm();
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box 
        sx={{ 
          marginTop: 8, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          p: 3, 
          border: '1px solid #ccc',
          borderRadius: 2
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box 
          component="form" 
          onSubmit={formik.handleSubmit} 
          noValidate 
          sx={{ mt: 1, width: '100%' }}
        >
        
          <TextField
            margin="normal"
            required
            fullWidth
            id="nama"
            label="Nama"
            name="nama"
            autoComplete="nama"
            autoFocus
            value={formik.values.nama}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.nama && Boolean(formik.errors.nama)}
            helperText={formik.touched.nama && formik.errors.nama}
          />

          <TextField
            margin="normal"
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

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // Formik Props
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Daftar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;