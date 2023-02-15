import AddIcon from '@mui/icons-material/Add';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Typography } from "@mui/material";
import { Card } from "../Card";
import { Menu } from "../Menu";

interface ListProps {
  title: string;
}

export function List({ title }: ListProps) {
  return (
    <Box
      minWidth='256px'
      display='flex'
      flexDirection='column'
      gap='1rem'
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography
          fontFamily='Poppins'
          fontWeight='bold'
          fontSize='1.25rem'
        >
          {title}
        </Typography>
        <Menu
          menuItems={[
            {
              label: 'Clear list',
              icon: <ClearAllIcon sx={{ fontSize: '1.25rem' }} />,
              onClick: () => { /* TODO */ }
            },
            {
              label: 'Delete list',
              icon: <DeleteIcon sx={{ fontSize: '1.25rem' }} />,
              onClick: () => { /* TODO */ }
            }
          ]}
        />
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        gap='1rem'
        alignItems='center'
      >
        {Array(2).fill(1).map(item => <Card />)}
        <Button
          fullWidth
          variant='outlined'
          startIcon={<AddIcon />}
          size='small'
          onClick={() => { /* TODO */ }}
        >
          Add another card
        </Button>
      </Box>
    </Box>
  )
}