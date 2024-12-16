import {memo, useEffect, useLayoutEffect, useState} from 'react'

interface props { 
  row :number; 
  col : number; 
  gridVal : boolean; 
  length : number;
}

const Cell = ({row, col, gridVal, length} : props) => {
  // console.log(`rendered ${row}:${col}`);
  
  return (
    <div
    className="cell"
    style={{
      backgroundColor: gridVal ? "#4F9B64" : "#A397CE",
      height: `${57/ length}vh`,
      width: `${57/length}vh`, 
    }}
  >
  </div>
  )
}

export default memo(Cell);

// export default function Cell({row, col, gridVal} : props) : JSX.Element{
    
//     return (
//       <Grid>
//         {/* <Box bgcolor={(Math.random() < 0.5) ? "black" : "red"} height={5} width={5}> */}
//         <Box bgcolor={gridVal ? "black" : "red"} height={5} width={5}>
//           {/* <p>{grid.at(row, col) ? "1" : "0"}.</p> */}
//           {/* <Typography margin={0}>{grid.at(row, col) ? "1" : "0"}</Typography> */}
//         </Box>
//       </Grid>
//       // <p>{row},{col}</p>
//     )
//   }