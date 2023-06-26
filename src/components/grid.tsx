import React from "react"
import GridItem from './gridItem'
interface GridProps{
    projects: Array<any>
}
const grid = (props:GridProps) => {

  return (
    <div className="work-wrap">
      <div className="container">
        <div className="items">
          { props.projects.map((item,index)=>(
          <GridItem key={index} project={item.node}/>
          )) }
        </div>
      </div>
    </div>
  )
}

export default grid
