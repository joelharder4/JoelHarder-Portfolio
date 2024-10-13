import React from 'react';
import { Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const ViewFileModal = ({ open, onClose, title, fileContent }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='md'
      fullWidth
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        {fileContent}
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          color='primary'
          onClick={onClose}
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ViewFileModal;