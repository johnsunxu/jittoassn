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
import InputField from "./InputField";
import { Input } from '@mui/material';

interface props { 
  grid : simulatorGrid; 
  isSimming : [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  config : {[param : string] : [number, React.Dispatch<React.SetStateAction<number>>]}
  updater : React.DispatchWithoutAction;
}

export default function Parameters({grid, isSimming, config, updater} : props) : JSX.Element{
  let errors : {[param : string] : [boolean, React.Dispatch<React.SetStateAction<boolean>>]} = {
    "updateTime" : useState(false),
    "gridSize" : useState(false),
    "lifeSpan" : useState(false),
    "adj0" : useState(false),
    "adj1" : useState(false),
    "adj2" : useState(false),
    "adj3" : useState(false), 
    "adj4" : useState(false), 
  }  
  const onChange = (source : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => (paramName : string) => (paramValue : number) => {
    // console.log(`changed ${paramName} to ${paramValue}`);
    if ((paramName[0] != "a" && paramValue<=0) || isNaN(paramValue)){
      // source.currentTarget.error = true;
      errors[paramName][1](true);
    }
    else if (paramName[0] === "a" && (paramValue <0 || paramValue > 100)){
      errors[paramName][1](true);
    }
    else{
      config[paramName][1](paramValue);
      errors[paramName][1](false);
    }
  }
  const changeParams = () => {
    // console.log(`lifespan ${config["lifeSpan"][0]}`);
    grid.setLifeSpan(config["lifeSpan"][0]/config["updateTime"][0]);
    // console.log("changed");
    grid.setGridSize(config["gridSize"][0]);
    grid.setChances(config["adj1"][0],config["adj2"][0],config["adj3"][0],config["adj4"][0]);
    grid.reset();
    updater();
    
  }
  return (
    <div className="stackVertical">
      <div className="stackHorizontal">
        {/* <InputField fieldName="updateTime"></InputField> */}
        <TextField error={errors["updateTime"][0]} onChange={(e) => {onChange(e)("updateTime")(Number(e.target.value))}} label="Update Time (sec)"/>
        <TextField error={errors["gridSize"][0]} onChange={(e) => {onChange(e)("gridSize")(Number(e.target.value))}} label="Grid Size"/>
        <TextField error={errors["lifeSpan"][0]} onChange={(e) => {onChange(e)("lifeSpan")(Number(e.target.value))}} label="Life Span (sec)"/>
        <button onClick={changeParams} disabled={isSimming[0] || hasError(errors)}>Update Params</button>
      </div>
      <div className="stackHorizontal">
        <TextField error={errors["adj1"][0]} onChange={(e) => {onChange(e)("adj1")(Number(e.target.value))}} label="Divide % with 1 adjacent"/>
        <TextField error={errors["adj2"][0]} onChange={(e) => {onChange(e)("adj2")(Number(e.target.value))}} label="Divide % with 2 adjacent"/>
        <TextField error={errors["adj3"][0]} onChange={(e) => {onChange(e)("adj3")(Number(e.target.value))}} label="Divide % with 3 adjacent"/>
        <TextField error={errors["adj4"][0]} onChange={(e) => {onChange(e)("adj4")(Number(e.target.value))}} label="Divide % with 4 adjacent"/>

      </div>
    </div>
    // <p>{row},{col}</p>
  )
}

function hasError(errors : {[param : string] : [boolean, React.Dispatch<React.SetStateAction<boolean>>]}) : boolean{
  for (const [key, value] of Object.entries(errors)) {
    if (value[0]){
      return true;
    };
  }
  return false;
}