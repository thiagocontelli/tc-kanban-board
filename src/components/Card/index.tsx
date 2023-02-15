import { Card as CardMui, CardContent, CardMedia, Typography } from "@mui/material";
import Constants from '../../constants'

interface CardProps {
  title: string
}

export function Card({ title }: CardProps) {
  return (
    <CardMui
      sx={{
        width: '100%'
      }}
    >
      <CardMedia
        component='img'
        src={Constants.IMG_URL}
        height={50}
      />
      <CardContent>
        <Typography>
          {title}
        </Typography>
      </CardContent>
    </CardMui>
  )
}