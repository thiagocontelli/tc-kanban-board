import AddIcon from '@mui/icons-material/Add';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useState } from 'react';
import { ICard, IList, useKanban } from '../../hooks/useKanban';
import { AddCardModal } from '../AddCardModal';
import { Card } from "../Card";
import { Menu } from "../Menu";

interface ListProps {
  list: IList;
  cards: ICard[]
}

export function List({ list, cards }: ListProps) {
  const h = useKanban()
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  
  return (
    <Box
      minWidth='256px'
      display='flex'
      flexDirection='column'
      gap='1rem'
      maxHeight='75vh'
      overflow='auto'
      sx={{ overflowX: 'hidden' }}
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        position='sticky'
        top='0'
        sx={{
          background: theme.palette.background.default
        }}
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
              onClick: () => { h.clearList(list.id) }
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
      </Box>
      <Button
        fullWidth
        variant='outlined'
        startIcon={<AddIcon />}
        size='small'
        onClick={() => { setIsOpen(true) }}
        sx={{
          position: 'sticky',
          bottom: '0',
          background: theme.palette.background.default
        }}
      >
        Add another card
      </Button>

      <AddCardModal
        isOpen={isOpen}
        handleClose={() => { setIsOpen(false) }}
        handleSubmit={(inputValue: string) => { 
          h.addCard(inputValue, list.id); 
          setIsOpen(false);
        }}
      />
    </Box>
  )
}