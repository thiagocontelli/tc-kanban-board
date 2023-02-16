import AddIcon from '@mui/icons-material/Add';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Typography } from "@mui/material";
import { ICard, IList, useKanban } from '../../hooks/useKanban';
import { Card } from "../Card";
import { Menu } from "../Menu";

interface ListProps {
  list: IList;
  cards: ICard[]
}

export function List({ list, cards }: ListProps) {
  const h = useKanban()
  
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
          {list.title}
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
              onClick: () => { h.deleteList(list.id)}
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
        {cards.map(card => <Card key={card.id} title={card.title} />)}
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