import { useState, useEffect, useReducer } from 'react'
import Stack from '@mui/material/Stack';
import Grid from "./grid";
import DisplayGrid from "./components/DisplayGrid";
import Parameters from './components/Parameters';
import StartButton from './components/StartButton';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

let grid = new Grid();

grid.add(0, 0);
function App() {
  const [count, setCount] = useState(0);
  const [, updateGrid] = useReducer(x => x + 1, 0);

  let config : {[param : string] : [number, React.Dispatch<React.SetStateAction<number>>]} = {
    "updateTime" : useState(2),
  }
  return (
    <>
      <div>
        <h1>Dish Simulator</h1>
        <Stack alignItems="center" spacing = {1}>
          <Parameters grid={grid} config = {config}></Parameters>
          <StartButton grid={grid} updater = {updateGrid}></StartButton>
          <DisplayGrid grid={grid} updater = {updateGrid}></DisplayGrid>
        </Stack>
      </div>


    </>
  )
}

export default App
