import { memo, useCallback } from "react"
import GridItem from "./GridItem"
import { GridComponentProps } from "./types"

const GridComponent = memo(({
    grid,
    onGridUpdate
}: GridComponentProps) => {
    const handleDeleteItem = useCallback((rowIndex: number, colIndex: number) => {
        const updatedGrid = grid.map((row, rIndex) => {
            if (rIndex === rowIndex) {
                return row.map((cell, cIndex) => 
                    cIndex === colIndex ? "" : cell
                )
            }
            return row
        })
        onGridUpdate(updatedGrid)
    }, [grid, onGridUpdate])

    return (
        <div className="grid-container">
            {grid.map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="grid-row">
                    {row.map((cell, colIndex) => (
                        <GridItem
                            key={`cell-${rowIndex}-${colIndex}`}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            value={cell}
                            onDelete={handleDeleteItem}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
})
export default GridComponent