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
  updater : React.DispatchWithoutAction;
  config : {[param : string] : [number, React.Dispatch<React.SetStateAction<number>>]}
  isSimming : [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function StartButton({grid, updater, config, isSimming} : props) : JSX.Element{
  // console.log(grid);    

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      if (isSimming[0]){
        grid.update();
        updater();  
      }
      if (grid.getCount() === 0){
        isSimming[1](false);
      }
    }, 1000*config["updateTime"][0]);
    return () => clearInterval(interval);
  }, [isSimming]);

  const onClick = () => {
    // grid.update();
    // updater();
    isSimming[1](true);

  }

  return (
    <button onClick={onClick} disabled={isSimming[0]}>
      Start Sim
    </button>
    // <p>{row},{col}</p>
  )
}

