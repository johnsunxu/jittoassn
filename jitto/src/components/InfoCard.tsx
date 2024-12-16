import { useEffect, useLayoutEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

export default function InfoCard({title = "default", text = "defaultText", image = "", clickFunction= () => {return}}){
    const cardImage = (
      <CardMedia 
        component = "img"
        image = {image}
        height= "77%"
        sx={{objectFit: "contain"}}
      /> 
    )
    return (
      <Box className="infoCard" component="div" onClick={clickFunction}>
          <Stack direction="row" spacing={4} alignItems="center">
            <Stack spacing={2}>
              <Typography variant='h5' sx={{color: "#BEBEBE"}}>
                {title}
              </Typography>
              <Typography variant='h3' sx={{color: "white"}}>
                {text}
              </Typography>
            </Stack>
          </Stack>
      </Box>
  
    )
  }