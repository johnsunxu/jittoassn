import React, { memo, useEffect, useLayoutEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Cell from "./cell";
import Grid from "@mui/material/Grid2";
import simulatorGrid from "../grid";

interface props {
  grid : simulatorGrid; 
  updater : React.DispatchWithoutAction;
}


// const memoCell = memo(function Cell({row, col, grid} : cellProps) {
//   return (
//     // <p>test</p>
//     <Cell row = {row} col = {col} grid = {grid} />
//   );
// });

export default function DisplayGrid({grid, updater}: props){
  // board.map((row, i) => (
  //     <div key={i}>
  //       {row.map((cell, j) => (
  //         <span key={j}>{cell} </span>
  //       ))}
  //     </div>
  //   ))}
  // </div>
  console.log(`grid length ${grid.getLength()}`);
  
  const onClick = (row : number) => (col : number) => () => {
    grid.flip(row, col);
    // console.log("flipping");
    updater();
  }
  const listItems = grid.getGrid().map((row, i) => (
    <Box key = {i}>
      {row.map((cell, j) => (
        // <memoCell row = {i} col = {j} grid = {grid} />
        <Box onClick={onClick(i)(j)}>
          <Cell row = {i} col = {j} gridVal = {grid.at(i,j)} />        
        </Box>
        // <span>test</span>
      ))}
    </Box>
  ));
  // let listItems : any[] = new Array(grid.getLength()); 

    // for (let i = 0; i < grid.getLength(); i++){
    //   listItems[i] = new Array(grid.getLength());
      // for (let j = 0; j < grid.getLength(); j++){
      //   listItems[i][j] = 
      // }
    // }

    // listItems = listItems.map(() => 
    //   <li key = >

    //   </li>
    // )


    return (
      <Grid container rowSpacing = {0} columnSpacing={0}>
        {listItems}
      </Grid>
      // <Box>
      //   {listItems}
      // </Box>
    )
  }