import {useReducer, useEffect, useLayoutEffect, useState} from 'react'
import simulatorGrid from "../Grid";

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
      if (grid.getCount()===0){
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
      {/* Start */}
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
    </button>
    // <p>{row},{col}</p>
  )
}

