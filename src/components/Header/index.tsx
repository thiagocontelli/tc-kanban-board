import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Divider, Typography } from "@mui/material";

export function Header () {
  return (
    <>
      <Box
        sx={{
          padding: '2rem 2rem 1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'Poppins'
          }}
          variant="h1"
        >
          TC Kanban Board
        </Typography>
        <Button 
          variant="outlined"
          startIcon={<AddIcon />}
        >
          Add another list
        </Button>
      </Box>
      <Divider />
    </>
  )
}