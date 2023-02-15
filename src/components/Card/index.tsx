import { Card as CardMui, CardContent, CardMedia, Typography } from "@mui/material";
import Constants from '../../constants'

export function Card() {
  return (
    <CardMui
      sx={{
        width: '200px'
      }}
    >
      <CardMedia
        component='img'
        src={Constants.IMG_URL}
        height={50}
      />
      <CardContent>
        <Typography>
          15 - Refactor class to Typescript
        </Typography>
      </CardContent>
    </CardMui>
  )
}