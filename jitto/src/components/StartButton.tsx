import { useEffect, useLayoutEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import simulatorGrid from "../grid";

interface props { 
  grid : simulatorGrid; 
  updater : any;
}

export default function StartButton({grid, updater} : props) : JSX.Element{
  console.log(grid);    
  const onClick = () => {
    grid.update();
    // console.log("clicked");
    // console.log(grid.getCount());
    updater();

  }

  return (
    <Button onClick={onClick}>
      Start Sim
    </Button>
    // <p>{row},{col}</p>
  )
}