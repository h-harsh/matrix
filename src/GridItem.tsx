import { memo } from "react"
import { GridItemProps } from "./types"

const GridItem = memo(({
    rowIndex,
    colIndex,
    value,
    onDelete
}: GridItemProps) => {
    return (
        <div 
            className="grid-cell"
            onClick={() => onDelete(rowIndex, colIndex)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onDelete(rowIndex, colIndex)
                }
            }}
        >
            {value}
        </div>
    )
})
export default GridItem