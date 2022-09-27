import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AddContactsForm } from 'components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  // p: 4,
};

export default function BasicModal() {
  return (
    <div>
      <Modal open={true}>
        <Box sx={style}>
          <AddContactsForm type={'update'} />
        </Box>
      </Modal>
    </div>
  );
}
