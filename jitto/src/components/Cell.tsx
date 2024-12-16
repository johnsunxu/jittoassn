import { useEffect, useLayoutEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import simulatorGrid from "../grid";

interface props { 
  row :number; 
  col : number; 
  grid : simulatorGrid; 
}

export default function Cell({row, col, grid} : props) : JSX.Element{
    
    return (
      <Grid>
        {/* <Box bgcolor={(Math.random() < 0.5) ? "black" : "red"} height={5} width={5}> */}
        <Box bgcolor={grid.at(row, col) ? "black" : "red"} height={5} width={5}>
          {/* <p>{grid.at(row, col) ? "1" : "0"}.</p> */}
          {/* <Typography margin={0}>{grid.at(row, col) ? "1" : "0"}</Typography> */}
        </Box>
      </Grid>
      // <p>{row},{col}</p>
    )
  }