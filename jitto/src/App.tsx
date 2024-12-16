import { useState, useEffect, useReducer } from 'react'
import Grid from "./Grid";
import DisplayGrid from "./components/DisplayGrid";
import Parameters from './components/Parameters';
import StartButton from './components/StartButton';
import StopButton from './components/StopButton';
import ResetButton from './components/ResetButton';
import './App.css'

let grid = new Grid();

// grid.flip(0, 0);
function App() {
  const [count, setCount] = useState(0);
  const [, updateGrid] = useReducer(x => x + 1, 0);
  const [isSimming, setIsSimming] = useState(false);

  let config : {[param : string] : [number, React.Dispatch<React.SetStateAction<number>>]} = {
    "updateTime" : useState(1),
    "gridSize" : useState(50),
    "lifeSpan" : useState(6),
    "adj0" : useState(0),
    "adj1" : useState(1),
    "adj2" : useState(2),
    "adj3" : useState(3), 
    "adj4" : useState(4), 

  }
  return (
    <>
      <div>
        <h1>Dish Simulator</h1>
        <div className="main-container">
          <Parameters grid={grid} config = {config} isSimming={[isSimming, setIsSimming]} updater = {updateGrid}></Parameters>
          <div className="simulator">
            <DisplayGrid grid={grid} updater = {updateGrid}></DisplayGrid>
            <div className="simulator-buttons">
            <StartButton grid={grid} updater = {updateGrid} isSimming={[isSimming, setIsSimming]} config={config}></StartButton>
            <StopButton isSimming={[isSimming, setIsSimming]}></StopButton>
            <ResetButton grid={grid} updater = {updateGrid} isSimming={[isSimming, setIsSimming]}></ResetButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
