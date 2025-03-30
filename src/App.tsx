import { useCallback, useMemo, useState } from 'react'
import './App.css'
import GridComponent from './GridComponent'
import { Grid } from './types'

function App() {
  const [gridSize, setGridSize] = useState<number>(0)
  const [grid, setGrid] = useState<Grid>([])

  const handleSetGrid = useCallback((newGrid: Grid) => {
    setGrid(newGrid)
  }, [])

  const gridMemoed = useMemo(() => grid, [grid])

  const handleChangeGridInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setGridSize(value)
    }
  }

  const createRandomNumber = (max: number): number => {
    return Math.floor(Math.random() * max) + 1
  }

  const handleCreateMatrix = useCallback(() => {
    if (gridSize <= 0) return

    const newGrid = Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => createRandomNumber(gridSize))
    )
    setGrid(newGrid)
  }, [gridSize])

  return (
    <div className="app-container">
      <div className="controls">
        <input 
          type="number" 
          min="1"
          value={gridSize} 
          onChange={handleChangeGridInput}
          placeholder="Enter grid size"
        />
        <button 
          onClick={handleCreateMatrix}
          disabled={gridSize <= 0}
        >
          Create Matrix
        </button>
      </div>

      {grid.length > 0 && (
        <GridComponent 
          grid={gridMemoed} 
          onGridUpdate={handleSetGrid} 
        />
      )}
    </div>
  )
}

export default App
