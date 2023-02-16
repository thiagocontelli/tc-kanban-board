import {
  Button,
  Dialog,
  DialogActions,
  DialogContent, TextField
} from '@mui/material';
import { useState } from 'react';

interface AddCardModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (inputValue: string) => void;
}

export function AddCardModal({
  handleClose,
  isOpen,
  handleSubmit
}: AddCardModalProps) {
  const [inputValue, setInputValue] = useState('')
  
  return (
    <Dialog maxWidth="xs" open={isOpen} onClose={handleClose}>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Card title"
          fullWidth
          variant="filled"
          onChange={e => setInputValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={() => {
            handleSubmit(inputValue)
            setInputValue('')
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
