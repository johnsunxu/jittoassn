import React, { useEffect, useLayoutEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import simulatorGrid from "../grid";

interface props { 
  grid : simulatorGrid; 
  isSimming : [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  config : {[param : string] : [number, React.Dispatch<React.SetStateAction<number>>]}
  updater : React.DispatchWithoutAction;
}

export default function Parameters({grid, isSimming, config, updater} : props) : JSX.Element{
    const onChange = (paramName : string) => (paramValue : number) => {
      // console.log(`changed ${paramName} to ${paramValue}`);
      config[paramName][1](paramValue);
    }
    const changeParams = () => {
      // console.log(`lifespan ${config["lifeSpan"][0]}`);
      grid.setLifeSpan(config["lifeSpan"][0]/config["updateTime"][0]);
      // console.log("changed");
      grid.setGridSize(config["gridSize"][0]);
      grid.setChances(config["adj1"][0],config["adj2"][0],config["adj3"][0],config["adj4"][0]);
      updater();
    }
    return (
      <Stack spacing = {2}>
        <Stack direction = "row" spacing = {1}>
          <TextField onChange={(e) => {console.log(`time change ${Number(e.target.value)}`);onChange("updateTime")(Number(e.target.value))}} label="Update Time (sec)"/>
          <TextField onChange={(e) => {onChange("gridSize")(Number(e.target.value))}} label="Grid Size"/>
          <TextField onChange={(e) => {onChange("updateTime")(Number(e.target.value))}} label="Life Span (sec)"/>
          <Button onClick={changeParams} disabled={isSimming[0]}>Update Params</Button>
        </Stack>
        <Stack direction = "row" spacing = {1}>
          <TextField onChange={(e) => {onChange("adj1")(Number(e.target.value))}} label="Divide % with 1 adjacent"/>
          <TextField onChange={(e) => {onChange("adj2")(Number(e.target.value))}} label="Divide % with 2 adjacent"/>
          <TextField onChange={(e) => {onChange("adj3")(Number(e.target.value))}} label="Divide % with 3 adjacent"/>
          <TextField onChange={(e) => {onChange("adj4")(Number(e.target.value))}} label="Divide % with 4 adjacent"/>

        </Stack>
      </Stack>
      // <p>{row},{col}</p>
    )
  }