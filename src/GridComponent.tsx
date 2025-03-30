import { memo, useCallback } from "react"
import GridItem from "./GridItem"

const GridComponent = memo(({
    grid,
    handleSetGrid
}) => {

    console.log("GridComponent render",)

    const handleDeleteItem = useCallback((i1, i2) => {
    const updatedData = grid.map((item, index) => {
      if(index === i1){
       return item.map((item2, index2) => {
          if(index2 === i2){
            return ""
          }else return item2
        })
      }else return item
    })
    handleSetGrid(updatedData)
  }, [])

    return(
    <div>
      {
        grid.map((item, index) => {
          return(
            <div className='row' >
              {
                item.map((item2, index2) => {
                  return(
                    <GridItem index={index} index2={index2} item2={item2}  handleDeleteItem={handleDeleteItem} />
                  )
                })
              }
            </div>
          )
        })
      }

    </div>
    )
})

export default GridComponent