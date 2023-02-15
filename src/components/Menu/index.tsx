import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, MenuItem, Menu as MenuMui } from "@mui/material";
import React, { ReactNode } from "react";

interface IMenuItem {
  label: string;
  icon: ReactNode;
  onClick: () => void;
}

interface MenuProps {
  menuItems: IMenuItem[]
}

export function Menu({ menuItems }: MenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <IconButton
        edge='end'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <MenuMui
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleClose()
              item.onClick()
            }}
            sx={{
              display: 'flex',
              gap: '0.5rem'
            }}
          >
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </MenuMui>
    </div>
  );
}