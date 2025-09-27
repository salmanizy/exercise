import React from 'react';
import { Form, Field } from 'react-final-form';
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

const LoginFormFinalForm = () => {

  const onSubmit = async (values) => {
    alert(`Pendaftaran Berhasil!\nNama: ${values.nama}\nEmail: ${values.email}`);
    console.log('Submitted Values:', values);
  };

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
          Form Pendaftaran (React Final Form + MUI Inline)
        </Typography>

        <Form
          onSubmit={onSubmit}
          initialValues={{ nama: '', email: '', password: '' }}
          validate={validate} 
          render={({ handleSubmit, submitting, hasValidationErrors }) => (
            <Box 
              component="form" 
              onSubmit={handleSubmit} 
              noValidate 
              sx={{ mt: 1, width: '100%' }}
            >
              <Field
                name="nama"
                render={({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Nama"
                    type="text"
                    fullWidth
                    required
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              />

              <Field
                name="email"
                render={({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              />

              <Field
                name="password"
                render={({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Password"
                    type="password"
                    fullWidth
                    required
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || hasValidationErrors}
              >
                {submitting ? 'Memproses...' : 'Submit'}
              </Button>
            </Box>
          )}
        />
      </Box>
    </Container>
  );
};

export default LoginFormFinalForm;