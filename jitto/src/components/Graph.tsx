import React, { memo, useEffect, useLayoutEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Cell from "./Cell";
import Grid from "@mui/material/Grid2";
import simulatorGrid from "../Grid";
import { LineChart } from '@mui/x-charts/LineChart';


interface props {
  grid : simulatorGrid; 
}


// const memoCell = memo(function Cell({row, col, grid} : cellProps) {
//   return (
//     // <p>test</p>
//     <Cell row = {row} col = {col} grid = {grid} />
//   );
// });

export default function DisplayGrid({grid}: props){
  // board.map((row, i) => (
  //     <div key={i}>
  //       {row.map((cell, j) => (
  //         <span key={j}>{cell} </span>
  //       ))}
  //     </div>
  //   ))}
  // </div>
  let population = grid.getCountHistory();
  console.log()
  return (
    <LineChart   
      xAxis={[{ data: Array(population.length).fill(0).map((val, index) => {return index})}]}
      yAxis={[{
        colorMap: {
          type: 'piecewise',
          thresholds: [0],
          colors: ['red', 'lightblue'],
        }
      }]}
      series={[
        {
          data: population,
          showMark: false,
          area: true,
          color: "white"
        },
      ]}
      width={500}
      height={300}
      sx={{
        //change left yAxis label styles
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
        strokeWidth:"0.4",
        fill:"white"
        },
        // change all labels fontFamily shown on both xAxis and yAxis
        "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":{
            fontFamily: "Roboto",
        },
        // change bottom label styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
            strokeWidth:"0.5",
            fill:"white"
          },
          // bottomAxis Line Styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
          stroke:"white",
          strokeWidth:0.4
          },
          // leftAxis Line Styles
          "& .MuiChartsAxis-left .MuiChartsAxis-line":{
          stroke:"white",
          strokeWidth:0.4
          }
      }}
    />
  )
}