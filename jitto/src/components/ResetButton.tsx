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
  grid : simulatorGrid;
  isSimming : [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  updater : React.DispatchWithoutAction;
}

export default function ResetButton({grid, isSimming, updater} : props) : JSX.Element{
  const onClick = () => {
    
    grid.reset();
    updater();

  }

  return (
    <button onClick={onClick} disabled = {isSimming[0]}>
      Reset Sim
    </button>
    // <p>{row},{col}</p>
  )
}

