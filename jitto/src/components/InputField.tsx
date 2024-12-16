import {useReducer, useEffect, useLayoutEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import simulatorGrid from "../Grid";


interface props { 
  fieldName : string;
}

export default function InputField({fieldName} : props) : JSX.Element{
  const onInput = () => {
    return;
  }

  return (
    <>
      <label>{fieldName}</label>
      <input onInput={onInput} disabled = {false}>
        Reset Sim
      </input>  
    </>
    // <p>{row},{col}</p>
  )
}

