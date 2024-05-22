import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
//import axios from 'axios';

export const Client = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nuevoCliente = { nombre, apellido, email, telefono };

    try {
      //await axios.post('/api/clientes', nuevoCliente);
      alert('Cliente registrado exitosamente');
      setNombre('');
      setApellido('');
      setEmail('');
      setTelefono('');
    } catch (error) {
      console.error('Hubo un error al registrar el cliente:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Registro de Cliente
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Registrar
        </Button>
      </form>
    </Container>
  );
};



