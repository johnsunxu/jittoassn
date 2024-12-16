import React, { useEffect, useLayoutEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import simulatorGrid from "../grid";

interface props { 
  grid : simulatorGrid; 
  config : {[param : string] : [number, React.Dispatch<React.SetStateAction<number>>]}
}

export default function Parameters({grid, config} : props) : JSX.Element{
    const onChange = (paramName : string) => (paramValue : number) => () =>{
      config[paramName][1](paramValue);
    }
    return (
      <Stack>
        <Stack direction = "row">
          <TextField onChange={(e) => {onChange("updateTime")(Number(e.target.value))}} label="Update Time (sec)"/>
          <TextField label="Update Time (sec)"/>
          <TextField label="Update Time (sec)"/>
          <TextField label="Update Time (sec)"/>
        </Stack>
        <Stack direction = "row">
          <TextField label="Update Time (sec)"/>
          <TextField label="Update Time (sec)"/>
          <TextField label="Update Time (sec)"/>
          <TextField label="Update Time (sec)"/>

        </Stack>
      </Stack>
      // <p>{row},{col}</p>
    )
  }