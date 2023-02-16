import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useKanban } from '../../hooks/useKanban';

export function Header() {
  const h = useKanban();
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Box
        sx={{
          padding: '2rem 2rem 1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100px',
        }}
      >
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'Poppins',
          }}
          variant="h1"
        >
          TC Kanban Board
        </Typography>
        {isInputActive ? (
          <Box display="flex" gap="0.5rem" alignItems="center">
            <TextField
              variant="filled"
              size="small"
              label="Card title"
              value={inputValue}
              autoFocus
              onChange={(e) => setInputValue(e.target.value)}
              inputProps={{ maxLength: 25 }}
            />
            <IconButton
              onClick={() => {
                h.addList(inputValue);
                setIsInputActive(false);
                setInputValue('');
              }}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setIsInputActive(false);
                setInputValue('');
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        ) : (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              setIsInputActive(true);
            }}
          >
            Add another list
          </Button>
        )}
      </Box>
      <Divider />
    </>
  );
}
