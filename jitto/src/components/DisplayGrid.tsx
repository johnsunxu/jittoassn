import React, { memo, useEffect, useLayoutEffect, useState} from 'react'
import Cell from "./Cell";
import simulatorGrid from "../Grid";

interface props {
  grid : simulatorGrid; 
  updater : React.DispatchWithoutAction;
}

export default function DisplayGrid({grid, updater}: props){
  console.log(`grid length ${grid.getLength()}`);
  
  const onClick = (row : number) => (col : number) => () => {
    grid.flip(row, col);
    // console.log("flipping");
    updater();
  }
  const listItems = grid.getGrid().map((row, i) => (
    <div key = {i}>
      {row.map((cell, j) => (
        <div onClick={onClick(i)(j)}>
          <Cell row = {i} col = {j} gridVal = {grid.at(i,j)} length={grid.getLength()}/>        
        </div>
      ))}
    </div>
  ));

    return (
      <div className="grid">
        {listItems}
      </div>
    )
  }