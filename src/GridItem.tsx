import { memo } from "react"

const GridItem = memo(({
    index,
    index2,
    item2,
    handleDeleteItem
}) => {

    console.log("GridItem render",index, index2)

  return (
   <p onClick={() => handleDeleteItem(index, index2)} className='cell'>{item2}</p>
  )
})

export default GridItem