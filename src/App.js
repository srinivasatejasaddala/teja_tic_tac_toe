import { useEffect, useState } from 'react';
import Square from './square.jsx'

function App() {
  const [stateArray,setStateArray]=useState(Array(9).fill(null))
  const [isNext,setIsNext]=useState(true)
  const [turn,setTurn]=useState('X')
  const [winnerState,setWinnerState]=useState(null)
  const [statecount,setStateCount]=useState(0)
  const winner=[[0,1,2,],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
]

useEffect(()=>{
  handleWinner();
},[stateArray,isNext,winnerState,turn,winner])

const handleWinner=()=>{
  for(let i=0;i<winner.length;i++){
    const [a,b,c]=winner[i]
  if((stateArray[a] === stateArray[b]) && (stateArray[b] ===stateArray[c])) {
    if(stateArray[c]===null)
      return false
    else{
    setWinnerState(stateArray[c])
    return true
  }
  }
  if(statecount===9){
    setWinnerState("Game is draw")
  }
}
return false
}
const handleRestart=()=>{
  setIsNext(true)
  setTurn('X')
  setWinnerState(null)
  setStateArray(Array(9).fill(null))
  setStateCount(0)
  

}
 const handleClick=(index)=>{
 
  
       if(handleWinner()||stateArray[index])
          {
               return
          }
       if(isNext)
         {
             const temp=stateArray.slice()
             temp[index]='X'
            setStateArray(temp)
            setIsNext(!isNext)
            setTurn('O')
            setStateCount(statecount+1)
         }
     else{
             const temp=stateArray.slice()
             temp[index]='O'
             setStateArray(temp)
             setIsNext(!isNext)
             setTurn("X")
             setStateCount(statecount+1)
         }
      
       const temp=handleWinner();
       
   
 }


  return (
    <div id="outermostdiv" className='text-center m-auto'>
      
      

     <div id='innerdiv1' >
     <button id='restart' onClick={handleRestart} className='rounded-md w-[100px] mb-4 border-[#0e0e15] bg-[#0e0e15] text-white  pt-1 pb-1 hover:bg-white hover:text-black hover:border-white border-[2px]'>Restart</button>
      <h2 className='m-auto mb-3 '>Turn for : <span className='text-white'>{turn}</span></h2>
      <div className='flex'>
       <Square value={stateArray[0]} index={0} handleClick={handleClick}/>
       <Square value={stateArray[1]} index={1} handleClick={handleClick}/>
      <Square value={stateArray[2]} index={2} handleClick={handleClick}/>
      </div>
      <div className='flex'>
      <Square value={stateArray[3]} index={3} handleClick={handleClick}/>
      <Square value={stateArray[4]} index={4} handleClick={handleClick}/>
      <Square value={stateArray[5]} index={5} handleClick={handleClick}/>
      </div>
      <div className='flex'>
      <Square value={stateArray[6]} index={6} handleClick={handleClick}/>
      <Square value={stateArray[7]} index={7} handleClick={handleClick}/>
      <Square value={stateArray[8]} index={8} handleClick={handleClick}/>
      </div>
      <br></br>
      <p className='m-auto'>The winner is :  {winnerState}</p>
    </div>

    
    {/* <div className='m-auto'> </div> */}
   
    </div>
    
  );
}

export default App;
