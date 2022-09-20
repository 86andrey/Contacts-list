import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';

const ActionButton = () => {
  return (
    <Box
      margin="90vh 100px"
      position="fixed"
      sx={{ '& > :not(style)': { m: 1 } }}
    >
      <Fab variant="extended" color="primary" aria-label="add">
        <PersonAddAltIcon sx={{ mr: 1 }} />
        Add contact
      </Fab>
      <Fab variant="extended" color="primary" aria-label="add">
        <SearchIcon sx={{ mr: 1 }} />
        Search . . .
      </Fab>
    </Box>
  );
};

export default ActionButton;
