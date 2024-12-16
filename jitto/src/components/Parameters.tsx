import React, { useEffect, useLayoutEffect, useState} from 'react'
import simulatorGrid from "../Grid";

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
      grid.reset();
      updater();
    }
    return (
      <div>
        <form action="">
        <div>
            <label>Update Time (sec)</label><br/>
            <input type="number" min="1" max="500" onChange={(e) => {console.log(`time change ${Number(e.target.value)}`);onChange("updateTime")(Number(e.target.value))}} />
            <br/>
            <label>Grid Size</label><br/>
            <input type="number" min="1" max="500" onChange={(e) => {onChange("gridSize")(Number(e.target.value))}} />
            <br/>
            <label>Life Span (sec)</label><br/>
            <input type="number" min="1" onChange={(e) => {onChange("lifeSpan")(Number(e.target.value))}} />
          
          </div>
        <div>
          <br/><label>Divide % with 1 adjacent</label><br/>
          <input type="number" min="0" max = "100" onChange={(e) => {onChange("adj1")(Number(e.target.value))}} />
          <br/><label>Divide % with 2 adjacent</label><br/>
          <input type="number" min="0" max = "100" onChange={(e) => {onChange("adj2")(Number(e.target.value))}} />
          <br/><label>Divide % with 3 adjacent</label><br/>
          <input type="number" min="0" max = "100" onChange={(e) => {onChange("adj3")(Number(e.target.value))}} />
          <br/><label>Divide % with 4 adjacent</label><br/>
          <input type="number" min="0" max = "100" onChange={(e) => {onChange("adj4")(Number(e.target.value))}} />
        </div>
        <br></br>
        </form>
        <button onClick={changeParams} disabled={isSimming[0]}>Update</button>


      </div>
      // <p>{row},{col}</p>
    )
  }