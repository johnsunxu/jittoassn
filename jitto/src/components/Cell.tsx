import {memo, useEffect, useLayoutEffect, useState} from 'react'
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
  gridVal : boolean; 
}

const Cell = ({row, col, gridVal} : props) => {
  // console.log(`rendered ${row}:${col}`);
  
  return (
    <Grid height = {5} width = {5} bgcolor={gridVal ? "black" : "red"}>
      {/* <Box bgcolor={(Math.random() < 0.5) ? "black" : "red"} height={5} width={5}> */}
      {/* <Box bgcolor={gridVal ? "black" : "red"} height={5} width={5}> */}
        {/* <p>{grid.at(row, col) ? "1" : "0"}.</p> */}
        {/* <Typography margin={0}>{grid.at(row, col) ? "1" : "0"}</Typography> */}
      {/* </Box> */}
    </Grid>
  )
}

export default memo(Cell);

// export default function Cell({row, col, gridVal} : props) : JSX.Element{
    
//     return (
//       <Grid>
//         {/* <Box bgcolor={(Math.random() < 0.5) ? "black" : "red"} height={5} width={5}> */}
//         <Box bgcolor={gridVal ? "black" : "red"} height={5} width={5}>
//           {/* <p>{grid.at(row, col) ? "1" : "0"}.</p> */}
//           {/* <Typography margin={0}>{grid.at(row, col) ? "1" : "0"}</Typography> */}
//         </Box>
//       </Grid>
//       // <p>{row},{col}</p>
//     )
//   }