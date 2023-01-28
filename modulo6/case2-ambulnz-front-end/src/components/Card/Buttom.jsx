import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtonSize(props) {
  const { pizza, addToCart } = props;

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab onClick={() => addToCart(pizza)} size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}