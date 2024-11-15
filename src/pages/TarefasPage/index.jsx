import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function TarefasPage() {
  return (
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Typography variant="h4">Tarefas</Typography>
      <Typography>Gerencie suas tarefas aqui.</Typography>
    </Box>
  );
}