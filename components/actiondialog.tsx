'use client';

import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function ActionDialog({ open, onClose, data }: any) {
  const [form, setForm] = React.useState<any>({});

  React.useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Datos actualizados:', form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Editar Computadora
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>

          <TextField label="Usuario" name="usuario" value={form.usuario || ''} onChange={handleChange} fullWidth />
          <TextField label="Número de Inventario" name="numero_inventario" value={form.numero_inventario || ''} onChange={handleChange} fullWidth />
          <TextField label="Placa Madre" name="motherboard" value={form.motherboard || ''} onChange={handleChange} fullWidth />
          <TextField label="Microprocesador" name="micro" value={form.micro || ''} onChange={handleChange} fullWidth />
          <TextField label="Memoria RAM" name="ram" value={form.ram || ''} onChange={handleChange} fullWidth />
          <TextField label="Disco Interno" name="disco" value={form.disco || ''} onChange={handleChange} fullWidth />
          <TextField label="Fuente de Poder" name="fuente" value={form.fuente || ''} onChange={handleChange} fullWidth />
          <TextField label="Chasis" name="chasis" value={form.chasis || ''} onChange={handleChange} fullWidth />
          <TextField label="Departamento" name="departamento" value={form.departamento || ''} onChange={handleChange} fullWidth />
          <TextField label="IP" name="ip" value={form.ip || ''} onChange={handleChange} fullWidth />

        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSave}>Guardar Cambios</Button>
      </DialogActions>
    </Dialog>
  );
}
