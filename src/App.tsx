// import { useState } from 'react'
import { useCallback, useMemo, useState } from 'react'
import './App.css'
import GridComponent from './GridComponent'

function App() {
  const [gridInput, setGridInput] = useState(0)
  const [grid, setGrid] = useState([
    [1,2,3],
    [1,2,3],
    [1,2,3],
  ])

  const handleSetGrid = useCallback((input) => {
    setGrid(input)
  }, [])

  const gridMemoed = useMemo(() => grid, [grid])

  const handleChangeGridInput = (e) => {
    setGridInput(e.target.value)
  }

  const handleCreateMatrix = () => {
    const newArr = []
    let temp = []

    for(let i=0; i<gridInput; i++){
      for(let x=0; x<gridInput; x++){
        temp.push(Math.floor(Math.random() * x+i))
      }
      newArr.push(temp)
      temp = []
    }
    setGrid(newArr)
  }




  return (
    <>
    <input value={gridInput} onChange={handleChangeGridInput} />
    <button onClick={handleCreateMatrix} >Create Matrix</button>

    <GridComponent grid={gridMemoed} handleSetGrid={handleSetGrid} />

    </>
  )
}

export default App
