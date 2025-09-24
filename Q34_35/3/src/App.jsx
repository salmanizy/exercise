import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Select, MenuItem, FormControl, InputLabel, Container, InputAdornment} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function App() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const [displayName, setDisplayName] = useState('');
  const [displayRole, setDisplayRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayName(name);
    setDisplayRole(role);
    setIsSubmitted(true);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          p: 4,
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: 400,
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Welcome to Jayjay Lesson
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder='Input Username'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                )
              }}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel id="role-select-label">Pilih Jabatan</InputLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              value={role} 
              label="Pilih Jabatan"
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <MenuItem value="SPV">SPV</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Supervisor">Supervisor</MenuItem>
              <MenuItem value="Staff">Staff</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, py: 1.5 }}
          >
            BUAT USER BARU
          </Button>
        </form>

        {isSubmitted && (
          <Box sx={{ mt: 4, p: 2, border: '1px dashed #ccc', borderRadius: '4px' }}>
            <Typography variant="subtitle1" component="h3" fontWeight="bold">
              User Baru Sudah Berhasil Dibuat!
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Nama User:</span> {displayName}
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Jabatan:</span> {displayRole}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default App;