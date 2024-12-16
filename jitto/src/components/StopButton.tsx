import {useReducer, useEffect, useLayoutEffect, useState} from 'react'
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
  isSimming : [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function StopButton({isSimming} : props) : JSX.Element{
  const onClick = () => {
    // grid.update();
    // updater();
    isSimming[1](false);

  }

  return (
    <Button onClick={onClick} disabled={!isSimming[0]}>
      Stop Sim
    </Button>
    // <p>{row},{col}</p>
  )
}

